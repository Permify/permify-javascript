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

The \&quot;Delete Bundle\&quot; API is designed for removing specific data bundles within a multi-tenant application environment. This API facilitates the deletion of a bundle, identified by its unique name, from a designated tenant&#39;s environment.

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

The \&quot;Read Bundle\&quot; API is a crucial tool for retrieving details of specific data bundles in a multi-tenant application setup. It is designed to access information about a bundle, uniquely identified by its name, within the specified tenant&#39;s environment.

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

The \&quot;Write Bundle\&quot; API is designed for handling data in a multi-tenant application environment. Its primary function is to write and delete data according to predefined structures. This API allows users to define or update data bundles, each distinguished by a unique name.

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

