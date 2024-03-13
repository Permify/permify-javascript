# PermifyApi.SourceInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**syntaxVersion** | **String** | The syntax version of the source, e.g. &#x60;cel1&#x60;. | [optional] 
**location** | **String** | The location name. All position information attached to an expression is relative to this location.  The location could be a file, UI element, or similar. For example, &#x60;acme/app/AnvilPolicy.cel&#x60;. | [optional] 
**lineOffsets** | **[Number]** | Monotonically increasing list of code point offsets where newlines &#x60;\\n&#x60; appear.  The line number of a given position is the index &#x60;i&#x60; where for a given &#x60;id&#x60; the &#x60;line_offsets[i] &lt; id_positions[id] &lt; line_offsets[i+1]&#x60;. The column may be derivd from &#x60;id_positions[id] - line_offsets[i]&#x60;. | [optional] 
**positions** | **{String: Number}** | A map from the parse node id (e.g. &#x60;Expr.id&#x60;) to the code point offset within the source. | [optional] 
**macroCalls** | [**{String: Expr}**](Expr.md) | A map from the parse node id where a macro replacement was made to the call &#x60;Expr&#x60; that resulted in a macro expansion.  For example, &#x60;has(value.field)&#x60; is a function call that is replaced by a &#x60;test_only&#x60; field selection in the AST. Likewise, the call &#x60;list.exists(e, e &gt; 10)&#x60; translates to a comprehension expression. The key in the map corresponds to the expression id of the expanded macro, and the value is the call &#x60;Expr&#x60; that was replaced. | [optional] 


