# PermifyApi.BundleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundleDelete**](BundleApi.md#bundleDelete) | **POST** /v1/tenants/{tenant_id}/bundle/delete | delete bundle
[**bundleRead**](BundleApi.md#bundleRead) | **POST** /v1/tenants/{tenant_id}/bundle/read | read bundle
[**bundleWrite**](BundleApi.md#bundleWrite) | **POST** /v1/tenants/{tenant_id}/bundle/write | write bundle



## bundleDelete

> BundleDeleteResponse bundleDelete(tenantId, body)

delete bundle

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.BundleApi();
let tenantId = "tenantId_example"; // String | 
let body = new PermifyApi.BundleDeleteRequest(); // BundleDeleteRequest | 
apiInstance.bundleDelete(tenantId, body, (error, data, response) => {
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
 **tenantId** | **String**|  | 
 **body** | [**BundleDeleteRequest**](BundleDeleteRequest.md)|  | 

### Return type

[**BundleDeleteResponse**](BundleDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bundleRead

> BundleReadResponse bundleRead(tenantId, body)

read bundle

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.BundleApi();
let tenantId = "tenantId_example"; // String | 
let body = new PermifyApi.BundleReadRequest(); // BundleReadRequest | 
apiInstance.bundleRead(tenantId, body, (error, data, response) => {
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
 **tenantId** | **String**|  | 
 **body** | [**BundleReadRequest**](BundleReadRequest.md)|  | 

### Return type

[**BundleReadResponse**](BundleReadResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bundleWrite

> BundleWriteResponse bundleWrite(tenantId, body)

write bundle

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.BundleApi();
let tenantId = "tenantId_example"; // String | 
let body = new PermifyApi.BundleWriteRequest(); // BundleWriteRequest | 
apiInstance.bundleWrite(tenantId, body, (error, data, response) => {
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
 **tenantId** | **String**|  | 
 **body** | [**BundleWriteRequest**](BundleWriteRequest.md)|  | 

### Return type

[**BundleWriteResponse**](BundleWriteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

