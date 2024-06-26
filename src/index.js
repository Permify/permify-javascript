/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.9.1
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AbstractType from './model/AbstractType';
import Any from './model/Any';
import Argument from './model/Argument';
import Attribute from './model/Attribute';
import AttributeDefinition from './model/AttributeDefinition';
import AttributeFilter from './model/AttributeFilter';
import AttributeReadRequestMetadata from './model/AttributeReadRequestMetadata';
import AttributeReadResponse from './model/AttributeReadResponse';
import AttributeType from './model/AttributeType';
import BundleDeleteRequest from './model/BundleDeleteRequest';
import BundleDeleteResponse from './model/BundleDeleteResponse';
import BundleReadRequest from './model/BundleReadRequest';
import BundleReadResponse from './model/BundleReadResponse';
import BundleRunRequest from './model/BundleRunRequest';
import BundleRunResponse from './model/BundleRunResponse';
import BundleWriteRequest from './model/BundleWriteRequest';
import BundleWriteResponse from './model/BundleWriteResponse';
import CheckResult from './model/CheckResult';
import CheckedExpr from './model/CheckedExpr';
import Child from './model/Child';
import Comprehension from './model/Comprehension';
import ComputedAttribute from './model/ComputedAttribute';
import ComputedUserSet from './model/ComputedUserSet';
import Constant from './model/Constant';
import Context from './model/Context';
import ContextAttribute from './model/ContextAttribute';
import CreateList from './model/CreateList';
import CreateStruct from './model/CreateStruct';
import DataAttributesReadRequest from './model/DataAttributesReadRequest';
import DataBundle from './model/DataBundle';
import DataChange from './model/DataChange';
import DataChangeOperation from './model/DataChangeOperation';
import DataChanges from './model/DataChanges';
import DataDeleteRequest from './model/DataDeleteRequest';
import DataDeleteResponse from './model/DataDeleteResponse';
import DataRelationshipsReadRequest from './model/DataRelationshipsReadRequest';
import DataWriteRequest from './model/DataWriteRequest';
import DataWriteRequestMetadata from './model/DataWriteRequestMetadata';
import DataWriteResponse from './model/DataWriteResponse';
import Entity from './model/Entity';
import EntityDefinition from './model/EntityDefinition';
import EntityDefinitionReference from './model/EntityDefinitionReference';
import EntityFilter from './model/EntityFilter';
import Entry from './model/Entry';
import Expand from './model/Expand';
import ExpandLeaf from './model/ExpandLeaf';
import ExpandTreeNode from './model/ExpandTreeNode';
import ExpandTreeNodeOperation from './model/ExpandTreeNodeOperation';
import Expr from './model/Expr';
import ExprCall from './model/ExprCall';
import FunctionType from './model/FunctionType';
import Ident from './model/Ident';
import ItContainsTheTenantIdToIdentifyTheTenantAndMetadataOfTheSchemaToBeEditedWithTheCorrespondingEditsToVariousEntities from './model/ItContainsTheTenantIdToIdentifyTheTenantAndMetadataOfTheSchemaToBeEditedWithTheCorrespondingEditsToVariousEntities';
import Leaf from './model/Leaf';
import ListType from './model/ListType';
import MapType from './model/MapType';
import NullValue from './model/NullValue';
import Partials from './model/Partials';
import PermissionCheckRequestMetadata from './model/PermissionCheckRequestMetadata';
import PermissionCheckResponse from './model/PermissionCheckResponse';
import PermissionCheckResponseMetadata from './model/PermissionCheckResponseMetadata';
import PermissionDefinition from './model/PermissionDefinition';
import PermissionExpandRequestMetadata from './model/PermissionExpandRequestMetadata';
import PermissionExpandResponse from './model/PermissionExpandResponse';
import PermissionLookupEntityRequestMetadata from './model/PermissionLookupEntityRequestMetadata';
import PermissionLookupEntityResponse from './model/PermissionLookupEntityResponse';
import PermissionLookupEntityStreamResponse from './model/PermissionLookupEntityStreamResponse';
import PermissionLookupSubjectRequestMetadata from './model/PermissionLookupSubjectRequestMetadata';
import PermissionLookupSubjectResponse from './model/PermissionLookupSubjectResponse';
import PermissionSubjectPermissionRequestMetadata from './model/PermissionSubjectPermissionRequestMetadata';
import PermissionSubjectPermissionResponse from './model/PermissionSubjectPermissionResponse';
import PermissionsCheckRequest from './model/PermissionsCheckRequest';
import PermissionsExpandRequest from './model/PermissionsExpandRequest';
import PermissionsLookupEntityRequest from './model/PermissionsLookupEntityRequest';
import PermissionsLookupSubjectRequest from './model/PermissionsLookupSubjectRequest';
import PermissionsSubjectPermissionRequest from './model/PermissionsSubjectPermissionRequest';
import PrimitiveType from './model/PrimitiveType';
import RelationDefinition from './model/RelationDefinition';
import RelationReference from './model/RelationReference';
import RelationshipDeleteRequest from './model/RelationshipDeleteRequest';
import RelationshipDeleteResponse from './model/RelationshipDeleteResponse';
import RelationshipReadRequestMetadata from './model/RelationshipReadRequestMetadata';
import RelationshipReadResponse from './model/RelationshipReadResponse';
import RelationshipWriteRequestMetadata from './model/RelationshipWriteRequestMetadata';
import RelationshipWriteResponse from './model/RelationshipWriteResponse';
import RelationshipsWriteRequest from './model/RelationshipsWriteRequest';
import Rewrite from './model/Rewrite';
import RewriteOperation from './model/RewriteOperation';
import RuleDefinition from './model/RuleDefinition';
import SchemaDefinition from './model/SchemaDefinition';
import SchemaDefinitionReference from './model/SchemaDefinitionReference';
import SchemaList from './model/SchemaList';
import SchemaListResponse from './model/SchemaListResponse';
import SchemaPartialWriteRequestMetadata from './model/SchemaPartialWriteRequestMetadata';
import SchemaPartialWriteResponse from './model/SchemaPartialWriteResponse';
import SchemaReadRequestMetadata from './model/SchemaReadRequestMetadata';
import SchemaReadResponse from './model/SchemaReadResponse';
import SchemaWriteResponse from './model/SchemaWriteResponse';
import SchemasListRequest from './model/SchemasListRequest';
import SchemasReadRequest from './model/SchemasReadRequest';
import SchemasWriteRequest from './model/SchemasWriteRequest';
import Select from './model/Select';
import SourceInfo from './model/SourceInfo';
import Status from './model/Status';
import StreamResultOfPermissionLookupEntityStreamResponse from './model/StreamResultOfPermissionLookupEntityStreamResponse';
import StreamResultOfWatchResponse from './model/StreamResultOfWatchResponse';
import Subject from './model/Subject';
import SubjectFilter from './model/SubjectFilter';
import Subjects from './model/Subjects';
import Tenant from './model/Tenant';
import TenantCreateRequest from './model/TenantCreateRequest';
import TenantCreateResponse from './model/TenantCreateResponse';
import TenantDeleteResponse from './model/TenantDeleteResponse';
import TenantListRequest from './model/TenantListRequest';
import TenantListResponse from './model/TenantListResponse';
import Tuple from './model/Tuple';
import TupleFilter from './model/TupleFilter';
import TupleSet from './model/TupleSet';
import TupleToUserSet from './model/TupleToUserSet';
import V1Call from './model/V1Call';
import V1Operation from './model/V1Operation';
import V1alpha1Reference from './model/V1alpha1Reference';
import V1alpha1Type from './model/V1alpha1Type';
import Values from './model/Values';
import WatchResponse from './model/WatchResponse';
import WatchWatchRequest from './model/WatchWatchRequest';
import WellKnownType from './model/WellKnownType';
import BundleApi from './permify/BundleApi';
import DataApi from './permify/DataApi';
import PermissionApi from './permify/PermissionApi';
import SchemaApi from './permify/SchemaApi';
import TenancyApi from './permify/TenancyApi';
import WatchApi from './permify/WatchApi';


/**
* Permify is an open source authorization service for creating fine-grained and scalable authorization systems..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PermifyApi = require('index'); // See note below*.
* var xxxSvc = new PermifyApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PermifyApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PermifyApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PermifyApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v0.9.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AbstractType model constructor.
     * @property {module:model/AbstractType}
     */
    AbstractType,

    /**
     * The Any model constructor.
     * @property {module:model/Any}
     */
    Any,

    /**
     * The Argument model constructor.
     * @property {module:model/Argument}
     */
    Argument,

    /**
     * The Attribute model constructor.
     * @property {module:model/Attribute}
     */
    Attribute,

    /**
     * The AttributeDefinition model constructor.
     * @property {module:model/AttributeDefinition}
     */
    AttributeDefinition,

    /**
     * The AttributeFilter model constructor.
     * @property {module:model/AttributeFilter}
     */
    AttributeFilter,

    /**
     * The AttributeReadRequestMetadata model constructor.
     * @property {module:model/AttributeReadRequestMetadata}
     */
    AttributeReadRequestMetadata,

    /**
     * The AttributeReadResponse model constructor.
     * @property {module:model/AttributeReadResponse}
     */
    AttributeReadResponse,

    /**
     * The AttributeType model constructor.
     * @property {module:model/AttributeType}
     */
    AttributeType,

    /**
     * The BundleDeleteRequest model constructor.
     * @property {module:model/BundleDeleteRequest}
     */
    BundleDeleteRequest,

    /**
     * The BundleDeleteResponse model constructor.
     * @property {module:model/BundleDeleteResponse}
     */
    BundleDeleteResponse,

    /**
     * The BundleReadRequest model constructor.
     * @property {module:model/BundleReadRequest}
     */
    BundleReadRequest,

    /**
     * The BundleReadResponse model constructor.
     * @property {module:model/BundleReadResponse}
     */
    BundleReadResponse,

    /**
     * The BundleRunRequest model constructor.
     * @property {module:model/BundleRunRequest}
     */
    BundleRunRequest,

    /**
     * The BundleRunResponse model constructor.
     * @property {module:model/BundleRunResponse}
     */
    BundleRunResponse,

    /**
     * The BundleWriteRequest model constructor.
     * @property {module:model/BundleWriteRequest}
     */
    BundleWriteRequest,

    /**
     * The BundleWriteResponse model constructor.
     * @property {module:model/BundleWriteResponse}
     */
    BundleWriteResponse,

    /**
     * The CheckResult model constructor.
     * @property {module:model/CheckResult}
     */
    CheckResult,

    /**
     * The CheckedExpr model constructor.
     * @property {module:model/CheckedExpr}
     */
    CheckedExpr,

    /**
     * The Child model constructor.
     * @property {module:model/Child}
     */
    Child,

    /**
     * The Comprehension model constructor.
     * @property {module:model/Comprehension}
     */
    Comprehension,

    /**
     * The ComputedAttribute model constructor.
     * @property {module:model/ComputedAttribute}
     */
    ComputedAttribute,

    /**
     * The ComputedUserSet model constructor.
     * @property {module:model/ComputedUserSet}
     */
    ComputedUserSet,

    /**
     * The Constant model constructor.
     * @property {module:model/Constant}
     */
    Constant,

    /**
     * The Context model constructor.
     * @property {module:model/Context}
     */
    Context,

    /**
     * The ContextAttribute model constructor.
     * @property {module:model/ContextAttribute}
     */
    ContextAttribute,

    /**
     * The CreateList model constructor.
     * @property {module:model/CreateList}
     */
    CreateList,

    /**
     * The CreateStruct model constructor.
     * @property {module:model/CreateStruct}
     */
    CreateStruct,

    /**
     * The DataAttributesReadRequest model constructor.
     * @property {module:model/DataAttributesReadRequest}
     */
    DataAttributesReadRequest,

    /**
     * The DataBundle model constructor.
     * @property {module:model/DataBundle}
     */
    DataBundle,

    /**
     * The DataChange model constructor.
     * @property {module:model/DataChange}
     */
    DataChange,

    /**
     * The DataChangeOperation model constructor.
     * @property {module:model/DataChangeOperation}
     */
    DataChangeOperation,

    /**
     * The DataChanges model constructor.
     * @property {module:model/DataChanges}
     */
    DataChanges,

    /**
     * The DataDeleteRequest model constructor.
     * @property {module:model/DataDeleteRequest}
     */
    DataDeleteRequest,

    /**
     * The DataDeleteResponse model constructor.
     * @property {module:model/DataDeleteResponse}
     */
    DataDeleteResponse,

    /**
     * The DataRelationshipsReadRequest model constructor.
     * @property {module:model/DataRelationshipsReadRequest}
     */
    DataRelationshipsReadRequest,

    /**
     * The DataWriteRequest model constructor.
     * @property {module:model/DataWriteRequest}
     */
    DataWriteRequest,

    /**
     * The DataWriteRequestMetadata model constructor.
     * @property {module:model/DataWriteRequestMetadata}
     */
    DataWriteRequestMetadata,

    /**
     * The DataWriteResponse model constructor.
     * @property {module:model/DataWriteResponse}
     */
    DataWriteResponse,

    /**
     * The Entity model constructor.
     * @property {module:model/Entity}
     */
    Entity,

    /**
     * The EntityDefinition model constructor.
     * @property {module:model/EntityDefinition}
     */
    EntityDefinition,

    /**
     * The EntityDefinitionReference model constructor.
     * @property {module:model/EntityDefinitionReference}
     */
    EntityDefinitionReference,

    /**
     * The EntityFilter model constructor.
     * @property {module:model/EntityFilter}
     */
    EntityFilter,

    /**
     * The Entry model constructor.
     * @property {module:model/Entry}
     */
    Entry,

    /**
     * The Expand model constructor.
     * @property {module:model/Expand}
     */
    Expand,

    /**
     * The ExpandLeaf model constructor.
     * @property {module:model/ExpandLeaf}
     */
    ExpandLeaf,

    /**
     * The ExpandTreeNode model constructor.
     * @property {module:model/ExpandTreeNode}
     */
    ExpandTreeNode,

    /**
     * The ExpandTreeNodeOperation model constructor.
     * @property {module:model/ExpandTreeNodeOperation}
     */
    ExpandTreeNodeOperation,

    /**
     * The Expr model constructor.
     * @property {module:model/Expr}
     */
    Expr,

    /**
     * The ExprCall model constructor.
     * @property {module:model/ExprCall}
     */
    ExprCall,

    /**
     * The FunctionType model constructor.
     * @property {module:model/FunctionType}
     */
    FunctionType,

    /**
     * The Ident model constructor.
     * @property {module:model/Ident}
     */
    Ident,

    /**
     * The ItContainsTheTenantIdToIdentifyTheTenantAndMetadataOfTheSchemaToBeEditedWithTheCorrespondingEditsToVariousEntities model constructor.
     * @property {module:model/ItContainsTheTenantIdToIdentifyTheTenantAndMetadataOfTheSchemaToBeEditedWithTheCorrespondingEditsToVariousEntities}
     */
    ItContainsTheTenantIdToIdentifyTheTenantAndMetadataOfTheSchemaToBeEditedWithTheCorrespondingEditsToVariousEntities,

    /**
     * The Leaf model constructor.
     * @property {module:model/Leaf}
     */
    Leaf,

    /**
     * The ListType model constructor.
     * @property {module:model/ListType}
     */
    ListType,

    /**
     * The MapType model constructor.
     * @property {module:model/MapType}
     */
    MapType,

    /**
     * The NullValue model constructor.
     * @property {module:model/NullValue}
     */
    NullValue,

    /**
     * The Partials model constructor.
     * @property {module:model/Partials}
     */
    Partials,

    /**
     * The PermissionCheckRequestMetadata model constructor.
     * @property {module:model/PermissionCheckRequestMetadata}
     */
    PermissionCheckRequestMetadata,

    /**
     * The PermissionCheckResponse model constructor.
     * @property {module:model/PermissionCheckResponse}
     */
    PermissionCheckResponse,

    /**
     * The PermissionCheckResponseMetadata model constructor.
     * @property {module:model/PermissionCheckResponseMetadata}
     */
    PermissionCheckResponseMetadata,

    /**
     * The PermissionDefinition model constructor.
     * @property {module:model/PermissionDefinition}
     */
    PermissionDefinition,

    /**
     * The PermissionExpandRequestMetadata model constructor.
     * @property {module:model/PermissionExpandRequestMetadata}
     */
    PermissionExpandRequestMetadata,

    /**
     * The PermissionExpandResponse model constructor.
     * @property {module:model/PermissionExpandResponse}
     */
    PermissionExpandResponse,

    /**
     * The PermissionLookupEntityRequestMetadata model constructor.
     * @property {module:model/PermissionLookupEntityRequestMetadata}
     */
    PermissionLookupEntityRequestMetadata,

    /**
     * The PermissionLookupEntityResponse model constructor.
     * @property {module:model/PermissionLookupEntityResponse}
     */
    PermissionLookupEntityResponse,

    /**
     * The PermissionLookupEntityStreamResponse model constructor.
     * @property {module:model/PermissionLookupEntityStreamResponse}
     */
    PermissionLookupEntityStreamResponse,

    /**
     * The PermissionLookupSubjectRequestMetadata model constructor.
     * @property {module:model/PermissionLookupSubjectRequestMetadata}
     */
    PermissionLookupSubjectRequestMetadata,

    /**
     * The PermissionLookupSubjectResponse model constructor.
     * @property {module:model/PermissionLookupSubjectResponse}
     */
    PermissionLookupSubjectResponse,

    /**
     * The PermissionSubjectPermissionRequestMetadata model constructor.
     * @property {module:model/PermissionSubjectPermissionRequestMetadata}
     */
    PermissionSubjectPermissionRequestMetadata,

    /**
     * The PermissionSubjectPermissionResponse model constructor.
     * @property {module:model/PermissionSubjectPermissionResponse}
     */
    PermissionSubjectPermissionResponse,

    /**
     * The PermissionsCheckRequest model constructor.
     * @property {module:model/PermissionsCheckRequest}
     */
    PermissionsCheckRequest,

    /**
     * The PermissionsExpandRequest model constructor.
     * @property {module:model/PermissionsExpandRequest}
     */
    PermissionsExpandRequest,

    /**
     * The PermissionsLookupEntityRequest model constructor.
     * @property {module:model/PermissionsLookupEntityRequest}
     */
    PermissionsLookupEntityRequest,

    /**
     * The PermissionsLookupSubjectRequest model constructor.
     * @property {module:model/PermissionsLookupSubjectRequest}
     */
    PermissionsLookupSubjectRequest,

    /**
     * The PermissionsSubjectPermissionRequest model constructor.
     * @property {module:model/PermissionsSubjectPermissionRequest}
     */
    PermissionsSubjectPermissionRequest,

    /**
     * The PrimitiveType model constructor.
     * @property {module:model/PrimitiveType}
     */
    PrimitiveType,

    /**
     * The RelationDefinition model constructor.
     * @property {module:model/RelationDefinition}
     */
    RelationDefinition,

    /**
     * The RelationReference model constructor.
     * @property {module:model/RelationReference}
     */
    RelationReference,

    /**
     * The RelationshipDeleteRequest model constructor.
     * @property {module:model/RelationshipDeleteRequest}
     */
    RelationshipDeleteRequest,

    /**
     * The RelationshipDeleteResponse model constructor.
     * @property {module:model/RelationshipDeleteResponse}
     */
    RelationshipDeleteResponse,

    /**
     * The RelationshipReadRequestMetadata model constructor.
     * @property {module:model/RelationshipReadRequestMetadata}
     */
    RelationshipReadRequestMetadata,

    /**
     * The RelationshipReadResponse model constructor.
     * @property {module:model/RelationshipReadResponse}
     */
    RelationshipReadResponse,

    /**
     * The RelationshipWriteRequestMetadata model constructor.
     * @property {module:model/RelationshipWriteRequestMetadata}
     */
    RelationshipWriteRequestMetadata,

    /**
     * The RelationshipWriteResponse model constructor.
     * @property {module:model/RelationshipWriteResponse}
     */
    RelationshipWriteResponse,

    /**
     * The RelationshipsWriteRequest model constructor.
     * @property {module:model/RelationshipsWriteRequest}
     */
    RelationshipsWriteRequest,

    /**
     * The Rewrite model constructor.
     * @property {module:model/Rewrite}
     */
    Rewrite,

    /**
     * The RewriteOperation model constructor.
     * @property {module:model/RewriteOperation}
     */
    RewriteOperation,

    /**
     * The RuleDefinition model constructor.
     * @property {module:model/RuleDefinition}
     */
    RuleDefinition,

    /**
     * The SchemaDefinition model constructor.
     * @property {module:model/SchemaDefinition}
     */
    SchemaDefinition,

    /**
     * The SchemaDefinitionReference model constructor.
     * @property {module:model/SchemaDefinitionReference}
     */
    SchemaDefinitionReference,

    /**
     * The SchemaList model constructor.
     * @property {module:model/SchemaList}
     */
    SchemaList,

    /**
     * The SchemaListResponse model constructor.
     * @property {module:model/SchemaListResponse}
     */
    SchemaListResponse,

    /**
     * The SchemaPartialWriteRequestMetadata model constructor.
     * @property {module:model/SchemaPartialWriteRequestMetadata}
     */
    SchemaPartialWriteRequestMetadata,

    /**
     * The SchemaPartialWriteResponse model constructor.
     * @property {module:model/SchemaPartialWriteResponse}
     */
    SchemaPartialWriteResponse,

    /**
     * The SchemaReadRequestMetadata model constructor.
     * @property {module:model/SchemaReadRequestMetadata}
     */
    SchemaReadRequestMetadata,

    /**
     * The SchemaReadResponse model constructor.
     * @property {module:model/SchemaReadResponse}
     */
    SchemaReadResponse,

    /**
     * The SchemaWriteResponse model constructor.
     * @property {module:model/SchemaWriteResponse}
     */
    SchemaWriteResponse,

    /**
     * The SchemasListRequest model constructor.
     * @property {module:model/SchemasListRequest}
     */
    SchemasListRequest,

    /**
     * The SchemasReadRequest model constructor.
     * @property {module:model/SchemasReadRequest}
     */
    SchemasReadRequest,

    /**
     * The SchemasWriteRequest model constructor.
     * @property {module:model/SchemasWriteRequest}
     */
    SchemasWriteRequest,

    /**
     * The Select model constructor.
     * @property {module:model/Select}
     */
    Select,

    /**
     * The SourceInfo model constructor.
     * @property {module:model/SourceInfo}
     */
    SourceInfo,

    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status,

    /**
     * The StreamResultOfPermissionLookupEntityStreamResponse model constructor.
     * @property {module:model/StreamResultOfPermissionLookupEntityStreamResponse}
     */
    StreamResultOfPermissionLookupEntityStreamResponse,

    /**
     * The StreamResultOfWatchResponse model constructor.
     * @property {module:model/StreamResultOfWatchResponse}
     */
    StreamResultOfWatchResponse,

    /**
     * The Subject model constructor.
     * @property {module:model/Subject}
     */
    Subject,

    /**
     * The SubjectFilter model constructor.
     * @property {module:model/SubjectFilter}
     */
    SubjectFilter,

    /**
     * The Subjects model constructor.
     * @property {module:model/Subjects}
     */
    Subjects,

    /**
     * The Tenant model constructor.
     * @property {module:model/Tenant}
     */
    Tenant,

    /**
     * The TenantCreateRequest model constructor.
     * @property {module:model/TenantCreateRequest}
     */
    TenantCreateRequest,

    /**
     * The TenantCreateResponse model constructor.
     * @property {module:model/TenantCreateResponse}
     */
    TenantCreateResponse,

    /**
     * The TenantDeleteResponse model constructor.
     * @property {module:model/TenantDeleteResponse}
     */
    TenantDeleteResponse,

    /**
     * The TenantListRequest model constructor.
     * @property {module:model/TenantListRequest}
     */
    TenantListRequest,

    /**
     * The TenantListResponse model constructor.
     * @property {module:model/TenantListResponse}
     */
    TenantListResponse,

    /**
     * The Tuple model constructor.
     * @property {module:model/Tuple}
     */
    Tuple,

    /**
     * The TupleFilter model constructor.
     * @property {module:model/TupleFilter}
     */
    TupleFilter,

    /**
     * The TupleSet model constructor.
     * @property {module:model/TupleSet}
     */
    TupleSet,

    /**
     * The TupleToUserSet model constructor.
     * @property {module:model/TupleToUserSet}
     */
    TupleToUserSet,

    /**
     * The V1Call model constructor.
     * @property {module:model/V1Call}
     */
    V1Call,

    /**
     * The V1Operation model constructor.
     * @property {module:model/V1Operation}
     */
    V1Operation,

    /**
     * The V1alpha1Reference model constructor.
     * @property {module:model/V1alpha1Reference}
     */
    V1alpha1Reference,

    /**
     * The V1alpha1Type model constructor.
     * @property {module:model/V1alpha1Type}
     */
    V1alpha1Type,

    /**
     * The Values model constructor.
     * @property {module:model/Values}
     */
    Values,

    /**
     * The WatchResponse model constructor.
     * @property {module:model/WatchResponse}
     */
    WatchResponse,

    /**
     * The WatchWatchRequest model constructor.
     * @property {module:model/WatchWatchRequest}
     */
    WatchWatchRequest,

    /**
     * The WellKnownType model constructor.
     * @property {module:model/WellKnownType}
     */
    WellKnownType,

    /**
    * The BundleApi service constructor.
    * @property {module:permify/BundleApi}
    */
    BundleApi,

    /**
    * The DataApi service constructor.
    * @property {module:permify/DataApi}
    */
    DataApi,

    /**
    * The PermissionApi service constructor.
    * @property {module:permify/PermissionApi}
    */
    PermissionApi,

    /**
    * The SchemaApi service constructor.
    * @property {module:permify/SchemaApi}
    */
    SchemaApi,

    /**
    * The TenancyApi service constructor.
    * @property {module:permify/TenancyApi}
    */
    TenancyApi,

    /**
    * The WatchApi service constructor.
    * @property {module:permify/WatchApi}
    */
    WatchApi
};
