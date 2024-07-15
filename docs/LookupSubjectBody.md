# PermifyApi.LookupSubjectBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**PermissionLookupSubjectRequestMetadata**](PermissionLookupSubjectRequestMetadata.md) |  | [optional] 
**entity** | [**Entity**](Entity.md) |  | [optional] 
**permission** | **String** | Permission to be checked, can be a permission or relation. Required, and must match the pattern \&quot;^([a-zA-Z][a-zA-Z0-9_]{1,62}[a-zA-Z0-9])$\&quot;, max 64 bytes. | [optional] 
**subjectReference** | [**RelationReference**](RelationReference.md) |  | [optional] 
**context** | [**Context**](Context.md) |  | [optional] 


