
## Using Realtime Event Data Tags to Show/Hide Content Blocks in Optimail Templates

You can use realtime event data tags to conditionally show sections of a template for Optimail campaigns. This can be used with Track & Trigger events, such as: abandoned_cart, abandoned_wishlist and more.

To do so, add the HTML attribute data-if-exists with the value of a realtime event data tag to any HTML tags such as: ``` <table>, <div>, <tr>, <span>, <img>, <a> ``` . 

If the realtime event data tag returns a value, the HTML element will be shown. If the realtime event data tag does not return a value, the HTML element will not appear.

### Example

To create a template that includes a table populated with a list of products that the customer abandoned in a shopping cart, you will need to conditionally show/hide a number of rows corresponding to the number of products in the abandoned cart. To do this, each table row <tr> tag will include the data-if-exists HTML attribute set to the realtime event data tag for that numbered product (because you don’t know in advance how many items must be displayed).

In this example, up to three products will be shown. If the customer abandoned a cart containing only one or two products, the additional table rows will be hidden because the value of the realtime event data tags for those products will be empty.
```javascript
<table>
	<tr data-if-exists="EVENT:items_in_cart:item_name_1">
		<td>[%EVENT:items_in_cart:item_name_1%]</td>
		<td><img src="[%EVENT:items_in_cart:item_image_1%]"></td>
	</tr>
	<tr data-if-exists="EVENT:items_in_cart:item_name_2">
		<td>[%EVENT:items_in_cart:item_name_2%]</td>
		<td><img src="[%EVENT:items_in_cart:item_image_2%]"></td>
	</tr>
	<tr data-if-exists="EVENT:items_in_cart:item_name_3">
		<td>[%EVENT:items_in_cart:item_name_3%]</td>
		<td><img src="[%EVENT:items_in_cart:item_image_3%]"></td>
	</tr>
</table>
```
