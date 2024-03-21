# PermifyApi.WatchApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**watchWatch**](WatchApi.md#watchWatch) | **POST** /v1/tenants/{tenant_id}/watch | watch changes



## watchWatch

> StreamResultOfWatchResponse watchWatch(tenantId, body)

watch changes

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.WatchApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
let body = new PermifyApi.WatchWatchRequest(); // WatchWatchRequest | 
apiInstance.watchWatch(tenantId, body, (error, data, response) => {
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
 **body** | [**WatchWatchRequest**](WatchWatchRequest.md)|  | 

### Return type

[**StreamResultOfWatchResponse**](StreamResultOfWatchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

