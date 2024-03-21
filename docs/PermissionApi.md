# PermifyApi.PermissionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**permissionsCheck**](PermissionApi.md#permissionsCheck) | **POST** /v1/tenants/{tenant_id}/permissions/check | check api
[**permissionsExpand**](PermissionApi.md#permissionsExpand) | **POST** /v1/tenants/{tenant_id}/permissions/expand | expand api
[**permissionsLookupEntity**](PermissionApi.md#permissionsLookupEntity) | **POST** /v1/tenants/{tenant_id}/permissions/lookup-entity | lookup entity
[**permissionsLookupEntityStream**](PermissionApi.md#permissionsLookupEntityStream) | **POST** /v1/tenants/{tenant_id}/permissions/lookup-entity-stream | lookup entity stream
[**permissionsLookupSubject**](PermissionApi.md#permissionsLookupSubject) | **POST** /v1/tenants/{tenant_id}/permissions/lookup-subject | lookup-subject
[**permissionsSubjectPermission**](PermissionApi.md#permissionsSubjectPermission) | **POST** /v1/tenants/{tenant_id}/permissions/subject-permission | subject permission



## permissionsCheck

> PermissionCheckResponse permissionsCheck(tenantId, body)

check api

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.PermissionApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
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
 **tenantId** | **String**| Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant &lt;code&gt;t1&lt;/code&gt; for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes. | 
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

expand api

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.PermissionApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
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
 **tenantId** | **String**| Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant &lt;code&gt;t1&lt;/code&gt; for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes. | 
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

lookup entity

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.PermissionApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
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
 **tenantId** | **String**| Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant &lt;code&gt;t1&lt;/code&gt; for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes. | 
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

lookup entity stream

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.PermissionApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
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
 **tenantId** | **String**| Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant &lt;code&gt;t1&lt;/code&gt; for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes. | 
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

lookup-subject

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.PermissionApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
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
 **tenantId** | **String**| Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant &lt;code&gt;t1&lt;/code&gt; for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes. | 
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

subject permission

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.PermissionApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
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
 **tenantId** | **String**| Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant &lt;code&gt;t1&lt;/code&gt; for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes. | 
 **body** | [**PermissionsSubjectPermissionRequest**](PermissionsSubjectPermissionRequest.md)|  | 

### Return type

[**PermissionSubjectPermissionResponse**](PermissionSubjectPermissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

