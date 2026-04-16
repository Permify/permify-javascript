# PermifyClient.Comprehension

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iterVar** | **String** | The name of the first iteration variable. When the iter_range is a list, this variable is the list element. When the iter_range is a map, this variable is the map entry key. | [optional] 
**iterVar2** | **String** | The name of the second iteration variable, empty if not set. When the iter_range is a list, this variable is the integer index. When the iter_range is a map, this variable is the map entry value. This field is only set for comprehension v2 macros. | [optional] 
**iterRange** | [**Expr**](Expr.md) |  | [optional] 
**accuVar** | **String** | The name of the variable used for accumulation of the result. | [optional] 
**accuInit** | [**Expr**](Expr.md) |  | [optional] 
**loopCondition** | [**Expr**](Expr.md) |  | [optional] 
**loopStep** | [**Expr**](Expr.md) |  | [optional] 
**result** | [**Expr**](Expr.md) |  | [optional] 


