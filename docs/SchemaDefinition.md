# PermifyApi.SchemaDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityDefinitions** | [**{String: EntityDefinition}**](EntityDefinition.md) | Map of entity definitions. The key is the entity name, and the value is the corresponding EntityDefinition. | [optional] 
**ruleDefinitions** | [**{String: RuleDefinition}**](RuleDefinition.md) | Map of rule definitions. The key is the rule name, and the value is the corresponding RuleDefinition. | [optional] 
**references** | [**{String: SchemaDefinitionReference}**](SchemaDefinitionReference.md) | Map of references to signify whether a string refers to an entity or a rule. | [optional] 


