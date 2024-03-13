# PermifyApi.EntityDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the entity, which follows a specific string pattern and has a maximum byte size. | [optional] 
**relations** | [**{String: RelationDefinition}**](RelationDefinition.md) | Map of relation definitions within this entity. The key is the relation name, and the value is the RelationDefinition. | [optional] 
**permissions** | [**{String: PermissionDefinition}**](PermissionDefinition.md) | Map of permission definitions within this entity. The key is the permission name, and the value is the PermissionDefinition. | [optional] 
**attributes** | [**{String: AttributeDefinition}**](AttributeDefinition.md) | Map of attribute definitions within this entity. The key is the attribute name, and the value is the AttributeDefinition. | [optional] 
**references** | [**{String: EntityDefinitionReference}**](EntityDefinitionReference.md) | Map of references indicating whether a string pertains to a relation, permission, or attribute. | [optional] 


