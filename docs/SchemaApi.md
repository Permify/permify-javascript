# PermifyApi.SchemaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**schemasList**](SchemaApi.md#schemasList) | **POST** /v1/tenants/{tenant_id}/schemas/list | list all authorization models
[**schemasRead**](SchemaApi.md#schemasRead) | **POST** /v1/tenants/{tenant_id}/schemas/read | read your authorization model
[**schemasWrite**](SchemaApi.md#schemasWrite) | **POST** /v1/tenants/{tenant_id}/schemas/write | write your authorization model



## schemasList

> SchemaListResponse schemasList(tenantId, body)

list all authorization models

Models written to Permify using the write schema API can be listed using this API with the timestamps at which the models were created.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.SchemaApi();
let tenantId = "tenantId_example"; // String | tenant_id is a string that identifies the tenant. It must match the pattern \"[a-zA-Z0-9-,]+\", be a maximum of 64 bytes, and must not be empty.
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
 **tenantId** | **String**| tenant_id is a string that identifies the tenant. It must match the pattern \&quot;[a-zA-Z0-9-,]+\&quot;, be a maximum of 64 bytes, and must not be empty. | 
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

read your authorization model

When a model is written to Permify using the write schema API a schema version will be returned by the API. That schema version can be used to inspect the schema.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.SchemaApi();
let tenantId = "tenantId_example"; // String | tenant_id is a string that identifies the tenant. It must match the pattern \"[a-zA-Z0-9-,]+\", be a maximum of 64 bytes, and must not be empty.
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
 **tenantId** | **String**| tenant_id is a string that identifies the tenant. It must match the pattern \&quot;[a-zA-Z0-9-,]+\&quot;, be a maximum of 64 bytes, and must not be empty. | 
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

write your authorization model

Permify provide it&#39;s own authorization language to model common patterns of easily. We called the authorization model Permify Schema and it can be created on our playground as well as in any IDE or text editor.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.SchemaApi();
let tenantId = "tenantId_example"; // String | tenant_id is a string that identifies the tenant. It must match the pattern \"[a-zA-Z0-9-,]+\", be a maximum of 64 bytes, and must not be empty.
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
 **tenantId** | **String**| tenant_id is a string that identifies the tenant. It must match the pattern \&quot;[a-zA-Z0-9-,]+\&quot;, be a maximum of 64 bytes, and must not be empty. | 
 **body** | [**SchemasWriteRequest**](SchemasWriteRequest.md)|  | 

### Return type

[**SchemaWriteResponse**](SchemaWriteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

