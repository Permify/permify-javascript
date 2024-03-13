# PermifyApi.Expr

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Required. An id assigned to this node by the parser which is unique in a given expression tree. This is used to associate type information and other attributes to a node in the parse tree. | [optional] 
**constExpr** | [**Constant**](Constant.md) |  | [optional] 
**identExpr** | [**Ident**](Ident.md) |  | [optional] 
**selectExpr** | [**Select**](Select.md) |  | [optional] 
**callExpr** | [**ExprCall**](ExprCall.md) |  | [optional] 
**listExpr** | [**CreateList**](CreateList.md) |  | [optional] 
**structExpr** | [**CreateStruct**](CreateStruct.md) |  | [optional] 
**comprehensionExpr** | [**Comprehension**](Comprehension.md) |  | [optional] 


