# PermifyApi.ReadRelationshipsBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**RelationshipReadRequestMetadata**](RelationshipReadRequestMetadata.md) |  | [optional] 
**filter** | [**TupleFilter**](TupleFilter.md) |  | [optional] 
**pageSize** | **Number** | page_size specifies the number of results to return in a single page. If more results are available, a continuous_token is included in the response. | [optional] 
**continuousToken** | **String** | continuous_token is used in case of paginated reads to get the next page of results. | [optional] 


