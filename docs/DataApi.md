# PermifyApi.DataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundleRun**](DataApi.md#bundleRun) | **POST** /v1/tenants/{tenant_id}/data/run-bundle | run bundle
[**dataAttributesRead**](DataApi.md#dataAttributesRead) | **POST** /v1/tenants/{tenant_id}/data/attributes/read | read attributes
[**dataDelete**](DataApi.md#dataDelete) | **POST** /v1/tenants/{tenant_id}/data/delete | delete data
[**dataRelationshipsRead**](DataApi.md#dataRelationshipsRead) | **POST** /v1/tenants/{tenant_id}/data/relationships/read | read relationships
[**dataWrite**](DataApi.md#dataWrite) | **POST** /v1/tenants/{tenant_id}/data/write | write data
[**relationshipsDelete**](DataApi.md#relationshipsDelete) | **POST** /v1/tenants/{tenant_id}/relationships/delete | delete relationships
[**relationshipsWrite**](DataApi.md#relationshipsWrite) | **POST** /v1/tenants/{tenant_id}/relationships/write | write relationships



## bundleRun

> BundleRunResponse bundleRun(tenantId, body)

run bundle

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.DataApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
let body = new PermifyApi.BundleRunRequest(); // BundleRunRequest | 
apiInstance.bundleRun(tenantId, body, (error, data, response) => {
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
 **body** | [**BundleRunRequest**](BundleRunRequest.md)|  | 

### Return type

[**BundleRunResponse**](BundleRunResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dataAttributesRead

> AttributeReadResponse dataAttributesRead(tenantId, body)

read attributes

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.DataApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
let body = new PermifyApi.DataAttributesReadRequest(); // DataAttributesReadRequest | 
apiInstance.dataAttributesRead(tenantId, body, (error, data, response) => {
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
 **body** | [**DataAttributesReadRequest**](DataAttributesReadRequest.md)|  | 

### Return type

[**AttributeReadResponse**](AttributeReadResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dataDelete

> DataDeleteResponse dataDelete(tenantId, body)

delete data

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.DataApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
let body = new PermifyApi.DataDeleteRequest(); // DataDeleteRequest | 
apiInstance.dataDelete(tenantId, body, (error, data, response) => {
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
 **body** | [**DataDeleteRequest**](DataDeleteRequest.md)|  | 

### Return type

[**DataDeleteResponse**](DataDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dataRelationshipsRead

> RelationshipReadResponse dataRelationshipsRead(tenantId, body)

read relationships

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.DataApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
let body = new PermifyApi.DataRelationshipsReadRequest(); // DataRelationshipsReadRequest | 
apiInstance.dataRelationshipsRead(tenantId, body, (error, data, response) => {
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
 **body** | [**DataRelationshipsReadRequest**](DataRelationshipsReadRequest.md)|  | 

### Return type

[**RelationshipReadResponse**](RelationshipReadResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dataWrite

> DataWriteResponse dataWrite(tenantId, body)

write data

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.DataApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
let body = new PermifyApi.DataWriteRequest(); // DataWriteRequest | 
apiInstance.dataWrite(tenantId, body, (error, data, response) => {
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
 **body** | [**DataWriteRequest**](DataWriteRequest.md)|  | 

### Return type

[**DataWriteResponse**](DataWriteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## relationshipsDelete

> RelationshipDeleteResponse relationshipsDelete(tenantId, body)

delete relationships

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.DataApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
let body = new PermifyApi.RelationshipDeleteRequest(); // RelationshipDeleteRequest | 
apiInstance.relationshipsDelete(tenantId, body, (error, data, response) => {
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
 **body** | [**RelationshipDeleteRequest**](RelationshipDeleteRequest.md)|  | 

### Return type

[**RelationshipDeleteResponse**](RelationshipDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## relationshipsWrite

> RelationshipWriteResponse relationshipsWrite(tenantId, body)

write relationships

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.DataApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
let body = new PermifyApi.RelationshipsWriteRequest(); // RelationshipsWriteRequest | 
apiInstance.relationshipsWrite(tenantId, body, (error, data, response) => {
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
 **body** | [**RelationshipsWriteRequest**](RelationshipsWriteRequest.md)|  | 

### Return type

[**RelationshipWriteResponse**](RelationshipWriteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

