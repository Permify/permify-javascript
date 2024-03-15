# PermifyApi.DataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundleRun**](DataApi.md#bundleRun) | **POST** /v1/tenants/{tenant_id}/data/run-bundle | run bundle
[**dataAttributesRead**](DataApi.md#dataAttributesRead) | **POST** /v1/tenants/{tenant_id}/data/attributes/read | read attribute(s)
[**dataDelete**](DataApi.md#dataDelete) | **POST** /v1/tenants/{tenant_id}/data/delete | delete data
[**dataRelationshipsRead**](DataApi.md#dataRelationshipsRead) | **POST** /v1/tenants/{tenant_id}/data/relationships/read | read relation tuple(s)
[**dataWrite**](DataApi.md#dataWrite) | **POST** /v1/tenants/{tenant_id}/data/write | create data
[**relationshipsDelete**](DataApi.md#relationshipsDelete) | **POST** /v1/tenants/{tenant_id}/relationships/delete | delete relationships
[**relationshipsWrite**](DataApi.md#relationshipsWrite) | **POST** /v1/tenants/{tenant_id}/relationships/write | create new relationships



## bundleRun

> BundleRunResponse bundleRun(tenantId, body)

run bundle

The \&quot;Run Bundle\&quot; API provides a straightforward way to execute predefined bundles within your application&#39;s tenant environment. By sending a POST request to this endpoint, you can activate specific functionalities or processes encapsulated in a bundle.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.DataApi();
let tenantId = "tenantId_example"; // String | 
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
 **tenantId** | **String**|  | 
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

read attribute(s)

Read API allows for directly querying the stored graph data to display and filter stored attributes.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.DataApi();
let tenantId = "tenantId_example"; // String | tenant_id represents the unique identifier of the tenant from which the attributes are being read.
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
 **tenantId** | **String**| tenant_id represents the unique identifier of the tenant from which the attributes are being read. | 
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

You can delete any stored relation tuples or attributes with following API.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.DataApi();
let tenantId = "tenantId_example"; // String | tenant_id represents the unique identifier of the tenant from which the data will be deleted.
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
 **tenantId** | **String**| tenant_id represents the unique identifier of the tenant from which the data will be deleted. | 
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

read relation tuple(s)

Read API allows for directly querying the stored graph data to display and filter stored relational tuples.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.DataApi();
let tenantId = "tenantId_example"; // String | tenant_id represents the unique identifier of the tenant for which relationships are read.
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
 **tenantId** | **String**| tenant_id represents the unique identifier of the tenant for which relationships are read. | 
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

create data

In Permify, attributes and relations between your entities, objects and users represents your authorization data. These data stored as tuples in a preferred database.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.DataApi();
let tenantId = "tenantId_example"; // String | tenant_id represents the unique identifier of the tenant for which data is written.
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
 **tenantId** | **String**| tenant_id represents the unique identifier of the tenant for which data is written. | 
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
let tenantId = "tenantId_example"; // String | 
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
 **tenantId** | **String**|  | 
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

create new relationships

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.DataApi();
let tenantId = "tenantId_example"; // String | Unique identifier for the tenant with specific constraints.
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
 **tenantId** | **String**| Unique identifier for the tenant with specific constraints. | 
 **body** | [**RelationshipsWriteRequest**](RelationshipsWriteRequest.md)|  | 

### Return type

[**RelationshipWriteResponse**](RelationshipWriteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

