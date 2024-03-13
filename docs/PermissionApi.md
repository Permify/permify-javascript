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

