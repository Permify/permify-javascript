# permify_api

PermifyApi - JavaScript client for permify_api
Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v0.8.6
- Package version: v0.8.6
- Generator version: 7.6.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://github.com/Permify/permify/issues](https://github.com/Permify/permify/issues)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install permify_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your permify_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/permify/permify-javascript
then install it via:

```shell
    npm install permify/permify-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PermifyApi = require('permify_api');


var api = new PermifyApi.BundleApi()
var tenantId = "tenantId_example"; // {String} Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
var body = new PermifyApi.BundleDeleteRequest(); // {BundleDeleteRequest} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.bundleDelete(tenantId, body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PermifyApi.BundleApi* | [**bundleDelete**](docs/BundleApi.md#bundleDelete) | **POST** /v1/tenants/{tenant_id}/bundle/delete | delete bundle
*PermifyApi.BundleApi* | [**bundleRead**](docs/BundleApi.md#bundleRead) | **POST** /v1/tenants/{tenant_id}/bundle/read | read bundle
*PermifyApi.BundleApi* | [**bundleWrite**](docs/BundleApi.md#bundleWrite) | **POST** /v1/tenants/{tenant_id}/bundle/write | write bundle
*PermifyApi.DataApi* | [**bundleRun**](docs/DataApi.md#bundleRun) | **POST** /v1/tenants/{tenant_id}/data/run-bundle | run bundle
*PermifyApi.DataApi* | [**dataAttributesRead**](docs/DataApi.md#dataAttributesRead) | **POST** /v1/tenants/{tenant_id}/data/attributes/read | read attributes
*PermifyApi.DataApi* | [**dataDelete**](docs/DataApi.md#dataDelete) | **POST** /v1/tenants/{tenant_id}/data/delete | delete data
*PermifyApi.DataApi* | [**dataRelationshipsRead**](docs/DataApi.md#dataRelationshipsRead) | **POST** /v1/tenants/{tenant_id}/data/relationships/read | read relationships
*PermifyApi.DataApi* | [**dataWrite**](docs/DataApi.md#dataWrite) | **POST** /v1/tenants/{tenant_id}/data/write | write data
*PermifyApi.DataApi* | [**relationshipsDelete**](docs/DataApi.md#relationshipsDelete) | **POST** /v1/tenants/{tenant_id}/relationships/delete | delete relationships
*PermifyApi.DataApi* | [**relationshipsWrite**](docs/DataApi.md#relationshipsWrite) | **POST** /v1/tenants/{tenant_id}/relationships/write | write relationships
*PermifyApi.PermissionApi* | [**permissionsCheck**](docs/PermissionApi.md#permissionsCheck) | **POST** /v1/tenants/{tenant_id}/permissions/check | check api
*PermifyApi.PermissionApi* | [**permissionsExpand**](docs/PermissionApi.md#permissionsExpand) | **POST** /v1/tenants/{tenant_id}/permissions/expand | expand api
*PermifyApi.PermissionApi* | [**permissionsLookupEntity**](docs/PermissionApi.md#permissionsLookupEntity) | **POST** /v1/tenants/{tenant_id}/permissions/lookup-entity | lookup entity
*PermifyApi.PermissionApi* | [**permissionsLookupEntityStream**](docs/PermissionApi.md#permissionsLookupEntityStream) | **POST** /v1/tenants/{tenant_id}/permissions/lookup-entity-stream | lookup entity stream
*PermifyApi.PermissionApi* | [**permissionsLookupSubject**](docs/PermissionApi.md#permissionsLookupSubject) | **POST** /v1/tenants/{tenant_id}/permissions/lookup-subject | lookup-subject
*PermifyApi.PermissionApi* | [**permissionsSubjectPermission**](docs/PermissionApi.md#permissionsSubjectPermission) | **POST** /v1/tenants/{tenant_id}/permissions/subject-permission | subject permission
*PermifyApi.SchemaApi* | [**schemasList**](docs/SchemaApi.md#schemasList) | **POST** /v1/tenants/{tenant_id}/schemas/list | list schema
*PermifyApi.SchemaApi* | [**schemasPartialWrite**](docs/SchemaApi.md#schemasPartialWrite) | **PATCH** /v1/tenants/{tenant_id}/schemas/partial-write | partially update your authorization model
*PermifyApi.SchemaApi* | [**schemasRead**](docs/SchemaApi.md#schemasRead) | **POST** /v1/tenants/{tenant_id}/schemas/read | read schema
*PermifyApi.SchemaApi* | [**schemasWrite**](docs/SchemaApi.md#schemasWrite) | **POST** /v1/tenants/{tenant_id}/schemas/write | write schema
*PermifyApi.TenancyApi* | [**tenantsCreate**](docs/TenancyApi.md#tenantsCreate) | **POST** /v1/tenants/create | create tenant
*PermifyApi.TenancyApi* | [**tenantsDelete**](docs/TenancyApi.md#tenantsDelete) | **DELETE** /v1/tenants/{id} | delete tenant
*PermifyApi.TenancyApi* | [**tenantsList**](docs/TenancyApi.md#tenantsList) | **POST** /v1/tenants/list | list tenants
*PermifyApi.WatchApi* | [**watchWatch**](docs/WatchApi.md#watchWatch) | **POST** /v1/tenants/{tenant_id}/watch | watch changes


## Documentation for Models

 - [PermifyApi.AbstractType](docs/AbstractType.md)
 - [PermifyApi.Any](docs/Any.md)
 - [PermifyApi.Argument](docs/Argument.md)
 - [PermifyApi.Attribute](docs/Attribute.md)
 - [PermifyApi.AttributeDefinition](docs/AttributeDefinition.md)
 - [PermifyApi.AttributeFilter](docs/AttributeFilter.md)
 - [PermifyApi.AttributeReadRequestMetadata](docs/AttributeReadRequestMetadata.md)
 - [PermifyApi.AttributeReadResponse](docs/AttributeReadResponse.md)
 - [PermifyApi.AttributeType](docs/AttributeType.md)
 - [PermifyApi.BundleDeleteRequest](docs/BundleDeleteRequest.md)
 - [PermifyApi.BundleDeleteResponse](docs/BundleDeleteResponse.md)
 - [PermifyApi.BundleReadRequest](docs/BundleReadRequest.md)
 - [PermifyApi.BundleReadResponse](docs/BundleReadResponse.md)
 - [PermifyApi.BundleRunRequest](docs/BundleRunRequest.md)
 - [PermifyApi.BundleRunResponse](docs/BundleRunResponse.md)
 - [PermifyApi.BundleWriteRequest](docs/BundleWriteRequest.md)
 - [PermifyApi.BundleWriteResponse](docs/BundleWriteResponse.md)
 - [PermifyApi.CheckResult](docs/CheckResult.md)
 - [PermifyApi.CheckedExpr](docs/CheckedExpr.md)
 - [PermifyApi.Child](docs/Child.md)
 - [PermifyApi.Comprehension](docs/Comprehension.md)
 - [PermifyApi.ComputedAttribute](docs/ComputedAttribute.md)
 - [PermifyApi.ComputedUserSet](docs/ComputedUserSet.md)
 - [PermifyApi.Constant](docs/Constant.md)
 - [PermifyApi.Context](docs/Context.md)
 - [PermifyApi.ContextAttribute](docs/ContextAttribute.md)
 - [PermifyApi.CreateList](docs/CreateList.md)
 - [PermifyApi.CreateStruct](docs/CreateStruct.md)
 - [PermifyApi.DataAttributesReadRequest](docs/DataAttributesReadRequest.md)
 - [PermifyApi.DataBundle](docs/DataBundle.md)
 - [PermifyApi.DataChange](docs/DataChange.md)
 - [PermifyApi.DataChangeOperation](docs/DataChangeOperation.md)
 - [PermifyApi.DataChanges](docs/DataChanges.md)
 - [PermifyApi.DataDeleteRequest](docs/DataDeleteRequest.md)
 - [PermifyApi.DataDeleteResponse](docs/DataDeleteResponse.md)
 - [PermifyApi.DataRelationshipsReadRequest](docs/DataRelationshipsReadRequest.md)
 - [PermifyApi.DataWriteRequest](docs/DataWriteRequest.md)
 - [PermifyApi.DataWriteRequestMetadata](docs/DataWriteRequestMetadata.md)
 - [PermifyApi.DataWriteResponse](docs/DataWriteResponse.md)
 - [PermifyApi.Entity](docs/Entity.md)
 - [PermifyApi.EntityDefinition](docs/EntityDefinition.md)
 - [PermifyApi.EntityDefinitionReference](docs/EntityDefinitionReference.md)
 - [PermifyApi.EntityFilter](docs/EntityFilter.md)
 - [PermifyApi.Entry](docs/Entry.md)
 - [PermifyApi.Expand](docs/Expand.md)
 - [PermifyApi.ExpandLeaf](docs/ExpandLeaf.md)
 - [PermifyApi.ExpandTreeNode](docs/ExpandTreeNode.md)
 - [PermifyApi.ExpandTreeNodeOperation](docs/ExpandTreeNodeOperation.md)
 - [PermifyApi.Expr](docs/Expr.md)
 - [PermifyApi.ExprCall](docs/ExprCall.md)
 - [PermifyApi.FunctionType](docs/FunctionType.md)
 - [PermifyApi.Ident](docs/Ident.md)
 - [PermifyApi.ItContainsTheTenantIdToIdentifyTheTenantAndMetadataOfTheSchemaToBeEditedWithTheCorrespondingEditsToVariousEntities](docs/ItContainsTheTenantIdToIdentifyTheTenantAndMetadataOfTheSchemaToBeEditedWithTheCorrespondingEditsToVariousEntities.md)
 - [PermifyApi.Leaf](docs/Leaf.md)
 - [PermifyApi.ListType](docs/ListType.md)
 - [PermifyApi.MapType](docs/MapType.md)
 - [PermifyApi.NullValue](docs/NullValue.md)
 - [PermifyApi.Partials](docs/Partials.md)
 - [PermifyApi.PermissionCheckRequestMetadata](docs/PermissionCheckRequestMetadata.md)
 - [PermifyApi.PermissionCheckResponse](docs/PermissionCheckResponse.md)
 - [PermifyApi.PermissionCheckResponseMetadata](docs/PermissionCheckResponseMetadata.md)
 - [PermifyApi.PermissionDefinition](docs/PermissionDefinition.md)
 - [PermifyApi.PermissionExpandRequestMetadata](docs/PermissionExpandRequestMetadata.md)
 - [PermifyApi.PermissionExpandResponse](docs/PermissionExpandResponse.md)
 - [PermifyApi.PermissionLookupEntityRequestMetadata](docs/PermissionLookupEntityRequestMetadata.md)
 - [PermifyApi.PermissionLookupEntityResponse](docs/PermissionLookupEntityResponse.md)
 - [PermifyApi.PermissionLookupEntityStreamResponse](docs/PermissionLookupEntityStreamResponse.md)
 - [PermifyApi.PermissionLookupSubjectRequestMetadata](docs/PermissionLookupSubjectRequestMetadata.md)
 - [PermifyApi.PermissionLookupSubjectResponse](docs/PermissionLookupSubjectResponse.md)
 - [PermifyApi.PermissionSubjectPermissionRequestMetadata](docs/PermissionSubjectPermissionRequestMetadata.md)
 - [PermifyApi.PermissionSubjectPermissionResponse](docs/PermissionSubjectPermissionResponse.md)
 - [PermifyApi.PermissionsCheckRequest](docs/PermissionsCheckRequest.md)
 - [PermifyApi.PermissionsExpandRequest](docs/PermissionsExpandRequest.md)
 - [PermifyApi.PermissionsLookupEntityRequest](docs/PermissionsLookupEntityRequest.md)
 - [PermifyApi.PermissionsLookupSubjectRequest](docs/PermissionsLookupSubjectRequest.md)
 - [PermifyApi.PermissionsSubjectPermissionRequest](docs/PermissionsSubjectPermissionRequest.md)
 - [PermifyApi.PrimitiveType](docs/PrimitiveType.md)
 - [PermifyApi.RelationDefinition](docs/RelationDefinition.md)
 - [PermifyApi.RelationReference](docs/RelationReference.md)
 - [PermifyApi.RelationshipDeleteRequest](docs/RelationshipDeleteRequest.md)
 - [PermifyApi.RelationshipDeleteResponse](docs/RelationshipDeleteResponse.md)
 - [PermifyApi.RelationshipReadRequestMetadata](docs/RelationshipReadRequestMetadata.md)
 - [PermifyApi.RelationshipReadResponse](docs/RelationshipReadResponse.md)
 - [PermifyApi.RelationshipWriteRequestMetadata](docs/RelationshipWriteRequestMetadata.md)
 - [PermifyApi.RelationshipWriteResponse](docs/RelationshipWriteResponse.md)
 - [PermifyApi.RelationshipsWriteRequest](docs/RelationshipsWriteRequest.md)
 - [PermifyApi.Rewrite](docs/Rewrite.md)
 - [PermifyApi.RewriteOperation](docs/RewriteOperation.md)
 - [PermifyApi.RuleDefinition](docs/RuleDefinition.md)
 - [PermifyApi.SchemaDefinition](docs/SchemaDefinition.md)
 - [PermifyApi.SchemaDefinitionReference](docs/SchemaDefinitionReference.md)
 - [PermifyApi.SchemaList](docs/SchemaList.md)
 - [PermifyApi.SchemaListResponse](docs/SchemaListResponse.md)
 - [PermifyApi.SchemaPartialWriteRequestMetadata](docs/SchemaPartialWriteRequestMetadata.md)
 - [PermifyApi.SchemaPartialWriteResponse](docs/SchemaPartialWriteResponse.md)
 - [PermifyApi.SchemaReadRequestMetadata](docs/SchemaReadRequestMetadata.md)
 - [PermifyApi.SchemaReadResponse](docs/SchemaReadResponse.md)
 - [PermifyApi.SchemaWriteResponse](docs/SchemaWriteResponse.md)
 - [PermifyApi.SchemasListRequest](docs/SchemasListRequest.md)
 - [PermifyApi.SchemasReadRequest](docs/SchemasReadRequest.md)
 - [PermifyApi.SchemasWriteRequest](docs/SchemasWriteRequest.md)
 - [PermifyApi.Select](docs/Select.md)
 - [PermifyApi.SourceInfo](docs/SourceInfo.md)
 - [PermifyApi.Status](docs/Status.md)
 - [PermifyApi.StreamResultOfPermissionLookupEntityStreamResponse](docs/StreamResultOfPermissionLookupEntityStreamResponse.md)
 - [PermifyApi.StreamResultOfWatchResponse](docs/StreamResultOfWatchResponse.md)
 - [PermifyApi.Subject](docs/Subject.md)
 - [PermifyApi.SubjectFilter](docs/SubjectFilter.md)
 - [PermifyApi.Subjects](docs/Subjects.md)
 - [PermifyApi.Tenant](docs/Tenant.md)
 - [PermifyApi.TenantCreateRequest](docs/TenantCreateRequest.md)
 - [PermifyApi.TenantCreateResponse](docs/TenantCreateResponse.md)
 - [PermifyApi.TenantDeleteResponse](docs/TenantDeleteResponse.md)
 - [PermifyApi.TenantListRequest](docs/TenantListRequest.md)
 - [PermifyApi.TenantListResponse](docs/TenantListResponse.md)
 - [PermifyApi.Tuple](docs/Tuple.md)
 - [PermifyApi.TupleFilter](docs/TupleFilter.md)
 - [PermifyApi.TupleSet](docs/TupleSet.md)
 - [PermifyApi.TupleToUserSet](docs/TupleToUserSet.md)
 - [PermifyApi.V1Call](docs/V1Call.md)
 - [PermifyApi.V1Operation](docs/V1Operation.md)
 - [PermifyApi.V1alpha1Reference](docs/V1alpha1Reference.md)
 - [PermifyApi.V1alpha1Type](docs/V1alpha1Type.md)
 - [PermifyApi.Values](docs/Values.md)
 - [PermifyApi.WatchResponse](docs/WatchResponse.md)
 - [PermifyApi.WatchWatchRequest](docs/WatchWatchRequest.md)
 - [PermifyApi.WellKnownType](docs/WellKnownType.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

