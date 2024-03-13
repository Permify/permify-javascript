# PermifyApi.Select

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operand** | [**Expr**](Expr.md) |  | [optional] 
**field** | **String** | Required. The name of the field to select.  For example, in the select expression &#x60;request.auth&#x60;, the &#x60;auth&#x60; portion of the expression would be the &#x60;field&#x60;. | [optional] 
**testOnly** | **Boolean** | Whether the select is to be interpreted as a field presence test.  This results from the macro &#x60;has(request.auth)&#x60;. | [optional] 


