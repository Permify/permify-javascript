# PermifyApi.PermissionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**permissionsCheck**](PermissionApi.md#permissionsCheck) | **POST** /v1/tenants/{tenant_id}/permissions/check | This method returns a decision about whether user can perform an permission on a certain resource.
[**permissionsExpand**](PermissionApi.md#permissionsExpand) | **POST** /v1/tenants/{tenant_id}/permissions/expand | expand relationships according to schema
[**permissionsLookupEntity**](PermissionApi.md#permissionsLookupEntity) | **POST** /v1/tenants/{tenant_id}/permissions/lookup-entity | Retrieve an entity by its identifier.
[**permissionsLookupEntityStream**](PermissionApi.md#permissionsLookupEntityStream) | **POST** /v1/tenants/{tenant_id}/permissions/lookup-entity-stream | Stream entities by their identifiers.
[**permissionsLookupSubject**](PermissionApi.md#permissionsLookupSubject) | **POST** /v1/tenants/{tenant_id}/permissions/lookup-subject | Retrieve a subject by its identifier.
[**permissionsSubjectPermission**](PermissionApi.md#permissionsSubjectPermission) | **POST** /v1/tenants/{tenant_id}/permissions/subject-permission | Retrieve permissions related to a specific subject.



## permissionsCheck

> PermissionCheckResponse permissionsCheck(tenantId, body)

This method returns a decision about whether user can perform an permission on a certain resource.

In Permify, you can perform two different types access checks,   resource based authorization checks, in form of Can user U perform action Y in resource Z? subject based authorization checks,   in form of Which resources can user U edit? In this section we&#39;ll look at the resource based check request of Permify. You can find subject based access checks in Entity (Data) Filtering section.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.PermissionApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, required, and must match the pattern \"[a-zA-Z0-9-,]+\", max 64 bytes.
let body = new PermifyApi.PermissionsCheckRequest(); // PermissionsCheckRequest | 
apiInstance.permissionsCheck(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| Identifier of the tenant, required, and must match the pattern \&quot;[a-zA-Z0-9-,]+\&quot;, max 64 bytes. | 
 **body** | [**PermissionsCheckRequest**](PermissionsCheckRequest.md)|  | 

### Return type

[**PermissionCheckResponse**](PermissionCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permissionsExpand

> PermissionExpandResponse permissionsExpand(tenantId, body)

expand relationships according to schema

Retrieve all subjects (users and user sets) that have a relationship or attribute with given entity and permission. Expand API response is represented by a user set tree, whose leaf nodes are user IDs or user sets pointing to other ⟨object#relation⟩ pairs.  &lt;Tip&gt;WHEN TO USE ? Expand is designed for reasoning the complete set of users that have access to their objects, which allows our users to build efficient search indices for access-controlled content.  It is not designed to use as a check access. Expand request has a high latency which can cause a performance issues when its used as access check.&lt;/Tip&gt;

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.PermissionApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, required, and must match the pattern \"[a-zA-Z0-9-,]+\", max 64 bytes.
let body = new PermifyApi.PermissionsExpandRequest(); // PermissionsExpandRequest | 
apiInstance.permissionsExpand(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| Identifier of the tenant, required, and must match the pattern \&quot;[a-zA-Z0-9-,]+\&quot;, max 64 bytes. | 
 **body** | [**PermissionsExpandRequest**](PermissionsExpandRequest.md)|  | 

### Return type

[**PermissionExpandResponse**](PermissionExpandResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permissionsLookupEntity

> PermissionLookupEntityResponse permissionsLookupEntity(tenantId, body)

Retrieve an entity by its identifier.

Lookup Entity endpoint lets you ask questions in form of “Which resources can user:X do action Y?”. As a response of this you’ll get a entity results in a format of string array.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.PermissionApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, required, and must match the pattern \"[a-zA-Z0-9-,]+\", max 64 bytes.
let body = new PermifyApi.PermissionsLookupEntityRequest(); // PermissionsLookupEntityRequest | 
apiInstance.permissionsLookupEntity(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| Identifier of the tenant, required, and must match the pattern \&quot;[a-zA-Z0-9-,]+\&quot;, max 64 bytes. | 
 **body** | [**PermissionsLookupEntityRequest**](PermissionsLookupEntityRequest.md)|  | 

### Return type

[**PermissionLookupEntityResponse**](PermissionLookupEntityResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permissionsLookupEntityStream

> StreamResultOfPermissionLookupEntityStreamResponse permissionsLookupEntityStream(tenantId, body)

Stream entities by their identifiers.

Lookup Entity endpoint lets you ask questions in form of “Which resources can user:X do action Y?”. As a response of this you’ll get a entity results in a format of as a streaming response.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.PermissionApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, required, and must match the pattern \"[a-zA-Z0-9-,]+\", max 64 bytes.
let body = new PermifyApi.PermissionsLookupEntityRequest(); // PermissionsLookupEntityRequest | 
apiInstance.permissionsLookupEntityStream(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| Identifier of the tenant, required, and must match the pattern \&quot;[a-zA-Z0-9-,]+\&quot;, max 64 bytes. | 
 **body** | [**PermissionsLookupEntityRequest**](PermissionsLookupEntityRequest.md)|  | 

### Return type

[**StreamResultOfPermissionLookupEntityStreamResponse**](StreamResultOfPermissionLookupEntityStreamResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permissionsLookupSubject

> PermissionLookupSubjectResponse permissionsLookupSubject(tenantId, body)

Retrieve a subject by its identifier.

Lookup Subject endpoint lets you ask questions in form of “Which subjects can do action Y on entity:X?”. As a response of this you’ll get a subject results in a format of string array.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.PermissionApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, required, and must match the pattern \"[a-zA-Z0-9-,]+\", max 64 bytes.
let body = new PermifyApi.PermissionsLookupSubjectRequest(); // PermissionsLookupSubjectRequest | 
apiInstance.permissionsLookupSubject(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| Identifier of the tenant, required, and must match the pattern \&quot;[a-zA-Z0-9-,]+\&quot;, max 64 bytes. | 
 **body** | [**PermissionsLookupSubjectRequest**](PermissionsLookupSubjectRequest.md)|  | 

### Return type

[**PermissionLookupSubjectResponse**](PermissionLookupSubjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permissionsSubjectPermission

> PermissionSubjectPermissionResponse permissionsSubjectPermission(tenantId, body)

Retrieve permissions related to a specific subject.

The Subject Permission List endpoint allows you to inquire in the form of “Which permissions user:x can perform on entity:y?”. In response, you&#39;ll receive a list of permissions specific to the user for the given entity, returned in the format of a map.    In this endpoint, you&#39;ll receive a map of permissions and their statuses directly. The structure is map[string]CheckResult, such as \&quot;sample-permission\&quot; -&gt; \&quot;ALLOWED\&quot;. This represents the permissions and their associated states in a key-value pair format.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.PermissionApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, required, and must match the pattern \"[a-zA-Z0-9-,]+\", max 64 bytes.
let body = new PermifyApi.PermissionsSubjectPermissionRequest(); // PermissionsSubjectPermissionRequest | 
apiInstance.permissionsSubjectPermission(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**| Identifier of the tenant, required, and must match the pattern \&quot;[a-zA-Z0-9-,]+\&quot;, max 64 bytes. | 
 **body** | [**PermissionsSubjectPermissionRequest**](PermissionsSubjectPermissionRequest.md)|  | 

### Return type

[**PermissionSubjectPermissionResponse**](PermissionSubjectPermissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

