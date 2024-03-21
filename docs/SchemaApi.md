# PermifyApi.SchemaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**schemasList**](SchemaApi.md#schemasList) | **POST** /v1/tenants/{tenant_id}/schemas/list | list schema
[**schemasRead**](SchemaApi.md#schemasRead) | **POST** /v1/tenants/{tenant_id}/schemas/read | read schema
[**schemasWrite**](SchemaApi.md#schemasWrite) | **POST** /v1/tenants/{tenant_id}/schemas/write | write schema



## schemasList

> SchemaListResponse schemasList(tenantId, body)

list schema

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.SchemaApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
let body = new PermifyApi.SchemasListRequest(); // SchemasListRequest | 
apiInstance.schemasList(tenantId, body, (error, data, response) => {
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
 **body** | [**SchemasListRequest**](SchemasListRequest.md)|  | 

### Return type

[**SchemaListResponse**](SchemaListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## schemasRead

> SchemaReadResponse schemasRead(tenantId, body)

read schema

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.SchemaApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
let body = new PermifyApi.SchemasReadRequest(); // SchemasReadRequest | 
apiInstance.schemasRead(tenantId, body, (error, data, response) => {
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
 **body** | [**SchemasReadRequest**](SchemasReadRequest.md)|  | 

### Return type

[**SchemaReadResponse**](SchemaReadResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## schemasWrite

> SchemaWriteResponse schemasWrite(tenantId, body)

write schema

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.SchemaApi();
let tenantId = "tenantId_example"; // String | Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
let body = new PermifyApi.SchemasWriteRequest(); // SchemasWriteRequest | 
apiInstance.schemasWrite(tenantId, body, (error, data, response) => {
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
 **body** | [**SchemasWriteRequest**](SchemasWriteRequest.md)|  | 

### Return type

[**SchemaWriteResponse**](SchemaWriteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

