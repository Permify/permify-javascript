# PermifyApi.PermissionsCheckRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**PermissionCheckRequestMetadata**](PermissionCheckRequestMetadata.md) |  | [optional] 
**entity** | [**Entity**](Entity.md) |  | [optional] 
**permission** | **String** | Name of the permission or relation, required, must start with a letter and can include alphanumeric and underscore, max 64 bytes. | [optional] 
**subject** | [**Subject**](Subject.md) |  | [optional] 
**context** | [**Context**](Context.md) |  | [optional] 
**_arguments** | [**[Argument]**](Argument.md) | Additional arguments associated with this request. | [optional] 


