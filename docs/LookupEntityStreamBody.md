# PermifyApi.LookupEntityStreamBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**PermissionLookupEntityRequestMetadata**](PermissionLookupEntityRequestMetadata.md) |  | [optional] 
**entityType** | **String** | Type of the entity to lookup, required, must start with a letter and can include alphanumeric and underscore, max 64 bytes. | [optional] 
**permission** | **String** | Name of the permission to check, required, must start with a letter and can include alphanumeric and underscore, max 64 bytes. | [optional] 
**subject** | [**Subject**](Subject.md) |  | [optional] 
**context** | [**Context**](Context.md) |  | [optional] 


