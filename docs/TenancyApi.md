# PermifyApi.TenancyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantsCreate**](TenancyApi.md#tenantsCreate) | **POST** /v1/tenants/create | create new tenant
[**tenantsDelete**](TenancyApi.md#tenantsDelete) | **DELETE** /v1/tenants/{id} | delete tenant
[**tenantsList**](TenancyApi.md#tenantsList) | **POST** /v1/tenants/list | list tenants



## tenantsCreate

> TenantCreateResponse tenantsCreate(body)

create new tenant

Permify Multi Tenancy support you can create custom schemas for tenants and manage them in a single place. You can create a tenant with following API.  &lt;Warning&gt;We have a pre-inserted tenant - t1 - by default for the ones that don&#39;t use multi-tenancy.&lt;/Warning&gt;

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.TenancyApi();
let body = new PermifyApi.TenantCreateRequest(); // TenantCreateRequest | TenantCreateRequest is the message used for the request to create a tenant.
apiInstance.tenantsCreate(body, (error, data, response) => {
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

You can delete a tenant with following API.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.TenancyApi();
let id = "id_example"; // String | id is the unique identifier of the tenant to be deleted.
apiInstance.tenantsDelete(id, (error, data, response) => {
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

You can list tenants with following API.

### Example

```javascript
import PermifyApi from 'permify_api';

let apiInstance = new PermifyApi.TenancyApi();
let body = new PermifyApi.TenantListRequest(); // TenantListRequest | TenantListRequest is the message used for the request to list all tenants.
apiInstance.tenantsList(body, (error, data, response) => {
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
 **body** | [**TenantListRequest**](TenantListRequest.md)| TenantListRequest is the message used for the request to list all tenants. | 

### Return type

[**TenantListResponse**](TenantListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

