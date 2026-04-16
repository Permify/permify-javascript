# PermifyClient.TenancyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantsCreate**](TenancyApi.md#tenantsCreate) | **POST** /v1/tenants/create | create tenant
[**tenantsDelete**](TenancyApi.md#tenantsDelete) | **DELETE** /v1/tenants/{id} | delete tenant
[**tenantsList**](TenancyApi.md#tenantsList) | **POST** /v1/tenants/list | list tenants



## tenantsCreate

> TenantCreateResponse tenantsCreate(body)

create tenant

### Example

```javascript
import PermifyClient from 'permify-javascript';

let apiInstance = new PermifyClient.TenancyApi();
let body = new PermifyClient.TenantCreateRequest(); // TenantCreateRequest | TenantCreateRequest is the message used for the request to create a tenant.
apiInstance.tenantsCreate(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TenantCreateRequest**](TenantCreateRequest.md)| TenantCreateRequest is the message used for the request to create a tenant. | 

### Return type

[**TenantCreateResponse**](TenantCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tenantsDelete

> TenantDeleteResponse tenantsDelete(id)

delete tenant

### Example

```javascript
import PermifyClient from 'permify-javascript';

let apiInstance = new PermifyClient.TenancyApi();
let id = "id_example"; // String | id is the unique identifier of the tenant to be deleted.
apiInstance.tenantsDelete(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id is the unique identifier of the tenant to be deleted. | 

### Return type

[**TenantDeleteResponse**](TenantDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tenantsList

> TenantListResponse tenantsList(body)

list tenants

### Example

```javascript
import PermifyClient from 'permify-javascript';

let apiInstance = new PermifyClient.TenancyApi();
let body = new PermifyClient.TenantListRequest(); // TenantListRequest | TenantListRequest is the message used for the request to list all tenants.
apiInstance.tenantsList(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TenantListRequest**](TenantListRequest.md)| TenantListRequest is the message used for the request to list all tenants. | 

### Return type

[**TenantListResponse**](TenantListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

