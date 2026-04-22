import assert from 'assert';
import * as PermifyApi from '../src/index';

const PERMIFY_BASE_URL = process.env.PERMIFY_BASE_URL || 'http://127.0.0.1:3476';
const TENANT_ID = 't1';
const RUN_ID = Date.now().toString(36);

function createApis() {
  const apiClient = new PermifyApi.ApiClient(PERMIFY_BASE_URL);
  apiClient.timeout = 10000;

  return {
    schema: new PermifyApi.SchemaApi(apiClient),
    data: new PermifyApi.DataApi(apiClient),
    permission: new PermifyApi.PermissionApi(apiClient),
  };
}

describe('Permify live REST tests', function() {
  this.timeout(20000);

  it('denies a permission check when no relationship exists', async function() {
    const apis = createApis();
    const documentId = `denieddoc${RUN_ID}`;
    const subjectId = `denieduser${RUN_ID}`;
    const schema = `
      entity user {}

      entity document {
        relation viewer @user

        action view = viewer
      }
    `;

    const schemaWrite = await apis.schema.schemasWrite(TENANT_ID, {
      schema,
    });

    const check = await apis.permission.permissionsCheck(TENANT_ID, {
      metadata: {
        snap_token: '',
        schema_version: schemaWrite.schema_version,
        depth: 20,
      },
      entity: {
        type: 'document',
        id: documentId,
      },
      permission: 'view',
      subject: {
        type: 'user',
        id: subjectId,
      },
    });

    assert.strictEqual(check.can, 'CHECK_RESULT_DENIED');
  });

  it('looks up entities a subject can view', async function() {
    const apis = createApis();
    const subjectId = `lookupuser${RUN_ID}`;
    const expectedEntityIds = [
      `lookupdoca${RUN_ID}`,
      `lookupdocb${RUN_ID}`,
      `lookupdocc${RUN_ID}`,
    ];
    const schema = `
      entity user {}

      entity document {
        relation viewer @user

        action view = viewer
      }
    `;

    const schemaWrite = await apis.schema.schemasWrite(TENANT_ID, {
      schema,
    });

    const dataWrite = await apis.data.dataWrite(TENANT_ID, {
      metadata: {
        schema_version: schemaWrite.schema_version,
      },
      tuples: [
        {
          entity: {
            type: 'document',
            id: expectedEntityIds[0],
          },
          relation: 'viewer',
          subject: {
            type: 'user',
            id: subjectId,
          },
        },
        {
          entity: {
            type: 'document',
            id: expectedEntityIds[1],
          },
          relation: 'viewer',
          subject: {
            type: 'user',
            id: subjectId,
          },
        },
        {
          entity: {
            type: 'document',
            id: expectedEntityIds[2],
          },
          relation: 'viewer',
          subject: {
            type: 'user',
            id: subjectId,
          },
        },
      ],
    });

    const lookup = await apis.permission.permissionsLookupEntity(TENANT_ID, {
      metadata: {
        snap_token: dataWrite.snap_token,
        schema_version: schemaWrite.schema_version,
        depth: 20,
      },
      entity_type: 'document',
      permission: 'view',
      subject: {
        type: 'user',
        id: subjectId,
      },
    });

    assert.deepStrictEqual(lookup.entity_ids.sort(), expectedEntityIds.sort());
  });
});
