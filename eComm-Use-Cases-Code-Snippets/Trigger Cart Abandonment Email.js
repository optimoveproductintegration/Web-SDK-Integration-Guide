/**
 * *********************************README**********************************
 * Description: This will be triggered/fired various events associated to the cart abandonment use case.
 * You will need to implement all of the events and functions below.
    * Make sure to add the <script> tag
 */


 /**********************************items_in_cart************************ */

//Trigger: When a website user adds an item to cart, send ALL the items in the cart to Optimove. This will start the cart abandonment timer.
//Note: The below was created under the assumption that you hold the cart items in an array "yourCartItemsArray".
//Note: The items_total_price should derive from your code based on the total prices of all the items x quantity in the cart.

var i;
var itemsObject = {};

for (i = 1; i < yourCartItemsArray.length; i++) { 
   
   itemsObject['item_sku_'+i] = yourCartItemsArray[i].item_sku;
   itemsObject['item_name_'+i] = yourCartItemsArray[i].item_name;
   itemsObject['item_quantity_'+i] = yourCartItemsArray[i].item_quantity;
   itemsObject['item_imagepath_'+i] = yourCartItemsArray[i].item_imagepath;
   itemsObject['item_producturl_'+i] = yourCartItemsArray[i].item_producturl;
    
}
itemsObject['items_total_price'] = items_total_price;

//push the json object "itemsObject" into the reportEvent()
optimoveSDK.API.reportEvent('items_in_cart', itemsObject);


 /**********************************cart_is_empty************************ */

//Trigger: When a website user's cart is empty, send cart_is_empty event to Optimove notifing Optimove that the site is empty which will stop the cart abandonment timer
optimoveSDK.API.reportEvent('cart_is_empty', {});


 /**********************************placed_order************************ */

//Trigger: When a website user places an order, send ALL the items that were purchased to Optimove. This will stop the cart abandonment timer.
//Note: This is the same concenpt/flow as in items_cart_above

//push the json object "itemsObject" into the reportEvent()
optimoveSDK.API.reportEvent('placed_order', itemsObject);

/************************************************************************
