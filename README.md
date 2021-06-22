# Web SDK Setup Guide
 - **Basic Setup**
	 - [Intro](#basic-setup) 
	 - [Add Web SDK script to your website / tag manager](#add-code) 
	- **Implementation for Visitors (unidentified users)**
		 - [Tracking Page Visits for Visitors](#track-visits-visitors) 
		 - [Reporting/Updating User Email Addresses](#record-email) 
	- **Implementation for Customers (identified users)**
	  	- [Stitching Website Visitors to Registered Customer IDs ](#link-visit-customer) 
	  	- [Registering the User ID and User Email at the Same Time](#record-user-email) 
		- [Tracking Page Visits for Customers](#track-visits-customers) 

  - **Advanced Setup**
	 - [Intro](#advanced-setup)
 	- [Reporting Custom Events](#custom-events) 
 
  - **Testing**
	 - [Web SDK Test Tool](https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Web-SDK-Test-Tool.md)
  
  - **Addtional Tech Info**
	 - [Optimove Webpage Pop-Up Tech Guide](https://github.com/optimove-tech/Web-SDK-Integration-Guide/tree/master/Webpage%20Pop-ups)
	- [Technical Web SDK Integration Flows](https://github.com/optimove-tech/Web-SDK-Integration-Guide/tree/master/Web%20SDK%20Tech%20Flows)
 	- [General SDK Code Snippets](https://github.com/optimove-tech/Web-SDK-Integration-Guide/tree/master/Web-SDK-Code-Snippets) 
 	- [eCommerce Use Cases Code Snippets](https://github.com/optimove-tech/Web-SDK-Integration-Guide/tree/master/eComm-Use-Cases-Code-Snippets) 
----------

## <a id="basic-setup"></a>Basic Setup
Use the basic setup of the Web SDK in order to:

-   Implement [Track & Trigger](https://docs.optimove.com/track-and-trigger/)
-   Implement [Google Display Network](https://github.com/optimove-tech/GDN) execution channel


### <a id="add-code"> </a> Add the Optimove Web SDK script to your website

The following code snippet must be added to every page in your website, either by adding it into the relevant site template files/code or using a website tag manager (such as [Google Tag Manager code snippet](https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Web-SDK-Basic-Code-Setup/readme.md)). This code will load and initialize the SDK.
```javascript
<script>
// ---------------------------------------
//These will be your dynamic variables to use for the Optimove SDK
//optimoveSDKToken = the sdk token provided by Product Integration team
//optimoveSDKVersion = the sdk version provided by Product Integration team (which also changes upon sdk upgrades)
//optimoveSDKconfigVersion = the event configuration file version provided by Product Integration team (which also changes upon event modifications)
// ---------------------------------------
var optimoveSDKToken = 'your-sdk-token-here'; 
var optimoveSDKVersion = 'your-sdk-version-here'; 
var optimoveSDKconfigVersion = 'your-config-version-here'; 

// ---------------------------------------
// Function: createOptimoveSDK
// Args: resourceURL, callback
// creates JS script that is async
// ---------------------------------------
function createOptimoveSDK(resourceURL, callback) {
  
  console.log('In createOptimoveSDK() '+resourceURL); 

  if (resourceURL != null) {
    var d = document;
    var g = d.createElement('script');
    var s = d.getElementsByTagName('script')[0];

    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = resourceURL;
    g.onload = callback;

    s.parentNode.insertBefore(g, s);
  }
}

// ---------------------------------------
// Function: initializeOptimoveSDK
// Args: --
// initializes optimove SDK with sdk details provided to you by Product Integration team
// ---------------------------------------
function initializeOptimoveSDK() {
  
  console.log('In initializeOptimoveSDK()');

  optimoveSDK.initialize(optimoveSDKToken, optimoveSDKconfigVersion, loadOptimoveSDKFunctions, 'info');
}

// ---------------------------------------
// Function: loadOptimoveSDKFunctions
// Args: status
// Use this function to trigger GTM tags that will run Optimove SDK functions
// ---------------------------------------
function loadOptimoveSDKFunctions(status) {

  console.log('In loadOptimoveSDKFunctions()  = ' + status);
}

createOptimoveSDK('https://sdk-cdn.optimove.net/websdk/sdk-v'+optimoveSDKVersion+'.js', initializeOptimoveSDK);
</script>
```
>**Note:** 
> Remember to replace **optimoveSDKToken**, **optimoveSDKToken** and **optimoveSDKconfigVersion** with the actual details that you receive from Optimove’s Integration Team.

### <a id="visitors"></a>Implementation for Visitors (unidentified users)

### <a id="track-visits-visitors"></a>Tracking Page Visits for Visitors

In order to track page visits, call the setPageVisit() function on every page of the website to ensure that accurate user counts and session time metrics are collected. 
```javascript
// PageURL: The page URL (string, required)
// PageTitle: The page title (string, required)
// PageCategory: The page category (string, required)
optimoveSDK.API.setPageVisit(PageURL, PageTitle, PageCategory);
```

Example usage:
```javascript
// general shared function to captures page visits
function updateSDKPageVisit (PageURL, PageTitle, PageCategory) {
	// SDK function
	optimoveSDK.API.setPageVisit(PageURL, PageTitle, PageCategory);
}

// variables indicating the page info
var PageURL = 'https://www.myshop.com/clothes/unisex/shirts?item=123456';
var PageTitle = 'Some Shirt Name';
var PageCategory = 'Clothes Unisex Shirts';

// calling the shared function with the relavant variables
updateSDKPageVisit (PageURL, PageTitle, PageCategory);
```
>**Note:** 
> - Every page view is recorded, including repeated visits to the same page.
>-   The Optimove SDK setPageVisit() function does not support callback functions
>-   "customURL", and "pageTitle" are mandatory parameters.

### <a id="record-email"></a>Reporting / Updating User Email Addresses

Whenever the website captures a user’s/visitor’s email address, such as when a visitor submits a register or subscribe form, call the **setUserEmail()** function to record the address.
The setUserEmail() function attaches an email address to a visitor or a customer entity in real time. After using this function, a visitor / customer may be targeted by an email execution channel.

```javascript
// email: user’s email address (string, required)
optimoveSDK.API.setUserEmail(email);
```
**Example usage 1:** setUserEmail() without a callback function
```javascript
// general shared function to captures email address from various forms
function updateSDKUserEmail(email){
	// Optimove function
	optimoveSDK.API.setUserEmail(email);
}

// example email variable
var email = 'joe@gmail.com';

// calling the shared function with the relavant variable
updateSDKUserEmail (email);
```
**Example usage 2:** setUserEmail() with a callback function
```javascript
// general shared function to capture an email address from various forms 
function updateSDKUserEmail(email,callback){ 
// Optimove function 
optimoveSDK.API.setUserEmail(email,callback); 
} 

// example email variable 
var email = 'joe@gmail.com'; 

//example callback 
var callback = function() { 
optimoveSDK.API.reportEvent('opt_in_status_change', {opt_in: true}); 
}; 

// calling the shared function with the relavant variable 
updateSDKUserEmail (email,callback);
```

>**Note:** 
>- The "email" is a required variable and must be a "string" format. <br/>

### <a id="customers"></a>Implementation for Customers (identified users)<br/>
### <a id="link-visit-customer"></a>Stitching Website Visitors to Registered Customer IDs
Optimove distinguishes between unknown website visitors, website visitors that have converted today, and customers.
Unknown website visitors are entities that are allocated a temporary ID by Optimove's SDK.
Customers are entities that are allocated a customer ID by a system external to Optimove. The bulk of the information related to these customers is received through the daily ETL process.
Visitors that have converted today are entities that are in transition between the two states above. Information on these entities has not yet been received through the daily ETL, however, a customer ID has been allocated.
The **setUserId()** function notifies the Optimove system that a visitor has been converted into a customer. These customers can be targeted with a Triggered Campaign that is set on the “Converted Today” Target Group on the day of conversion, or any Customer Target Group in the following days.
In order for all event reporting and realtime functions to be properly associated with the correct individual customer, the **setUserId**(SDK_ID) function must be called whenever a customer initially registers (or, alternatively, the [registerUser](https://github.com/optimove-tech/Web-SDK-Integration-Guide#record-user-email)() function) or logs into the website. 

**Example usage 1:** SDK_ID without callback function
```javascript
// The SDK_ID refers to the unique/primary customer ID used by your website to identify registered customers/users. 
var SDK_ID = '123456';

// Only call the setUserID() if registered / identified customers **is not** empty, null, unidentified. 
// SDK_ID: (string, required)
If(SDK_ID !== undefined && SDK_ID !== null && SDK_ID !== "") {
	optimoveSDK.API.setUserId(SDK_ID);
}
```
**Example usage 2:** SDK_ID with callback function
```javascript
// The SDK_ID refers to the unique/primary customer ID used by your website to identify registered customers/users. 
var SDK_ID = '123456'; 

//example callback 
var callback = function() { 
optimoveSDK.API.reportEvent('login',{});  

// Only call the setUserID() if registered / identified customers **is not** empty, null, unidentified. 
// SDK_ID: (string, required) 
If(SDK_ID !== undefined && SDK_ID !== null && SDK_ID !== "") { 
optimoveSDK.API.setUserId(SDK_ID,callback); 
}
```

>**Note:** 
> - The **SDK_ID** must match your Customer ID (CID) your are sending Optimove on a daily basis  and is is also used to identify individual customer records within your Optimove customer database.
> - Any **SDK_ID** that does not correspond to your Optimove unique identifier (Customer ID) due to faulty / unrecognized SDK_IDs will now be excluded from your customer tracked activity. Therefore please make sure that the SDK_ID sent via the SDK is a recognizable ID.
> - The **SDK_ID** is a required variable and must be a "string" format.
> - For  extra security purposes, you can also send the SDK_ID encrypted. Please follow the steps in “[Reporting encrypted CustomerIDs](https://github.com/optimove-tech/Reporting-Encrypted-CustomerID)".
> - **In order to ensure the correct order of arrival, you can utilize the Optimove SDK callback functions.**
### <a id="record-user-email"></a>Registering the User ID and User Email at the Same Time
A common scenario in which you may want to reach out to your visitors immediately is upon their registration to receive email communications.

In all situations where a single user action requires you to set both the customer ID and email address (e.g., registration, newsletter signup) simultaneously, you should use the **registerUser()** function (instead of calling both [setUserId()](https://github.com/optimove-tech/Web-SDK-Integration-Guide#link-visit-customer) and [setUserEmail()](https://github.com/optimove-tech/Web-SDK-Integration-Guide#record-email)) to ensure the proper registration of the user in Optimove.

```javascript
// SDK_ID: the unique/primary customer ID used by your website to identify registered customers/users - (string, required) 
// email: user’s email address (string, required) 
// event_name: name of the event during which the SDK_ID and email address were captured (string, optional) 
// parameters: an array of details for the specified event name (integer/string ,optional) 
// callback: an additional function that will be executed 
optimoveSDK.API.registerUser(SDK_ID, email, event_name, parameters, callback);
```
**Example usage 1:** SDK_ID and email address without events:
```javascript
// example variables
var SDK_ID = 'JohnDoe';
var email = 'johndoe@gmail.com';

// passing the variables to the SDK function
optimoveSDK.API.registerUser(SDK_ID, email)
```

**Example usage 2:** SDK_ID and email address with a custom event:
```javascript
// example variables
var SDK_ID = 'JohnDoe';
var email = 'johndoe@gmail.com';
var event_name = 'sign-up';
var parameters = {
      newsletter_signup : true,
      landing_page : 'some/landing/page.html'
}

// passing the variables to the SDK function
optimoveSDK.API.registerUser(SDK_ID , email, event_name, parameters);
```
**Example usage 3:** Example: SDK_ID and email address with custom events and callback function:

```javascript
// example variables
var SDK_ID = 'JohnDoe';
var email = 'johndoe@gmail.com';
var event_name = 'sign-up';
var parameters = {
      newsletter_signup : true,
      landing_page : 'some/landing/page.html'
};
var callback = function() {
optimoveSDK.API.reportEvent('opt_in_status_change', {opt_in: true});
};

// passing the variables to the SDK function
optimoveSDK.API.registerUser(SDK_ID , email, event_name, parameters, callback);

```
>**Notes:**
>- Event names and parameters must first be configured within the Optimove instance using the [Events Configuration Screen](https://academy.optimove.com/en/article/configuring-events-in-optimove)
>-   Event and parameter names are case sensitive.
>-   Events and parameters use lowercase and snake_case as a naming convention. Separate each word with one underscore character (_) and no spaces. (e.g., checkout_completed)
>-   The parameter types available for use in event-reporting functions are:
	> **String** – A series of alphanumeric characters of up to 255 characters in length, using any encoding
    >**Number** – Any numeric value, whether an integer or a value containing a decimal point
    >**Boolean** – Is either "true" or "false" values, not a string
>-   All monetary values must be reported in the same currency defined in your Optimove instance (e.g., if your instance is based on US dollars, all monetary event values must be reported in dollars). Optimove will not perform currency conversions.
>-   If your Optimove instance supports multiple languages, all event parameters must use a single default language. This is required in order to maintain a unified set of events.
>- **In order to ensure the correct order of arrival, utilize the Optimove SDK callback functions.**




### <a id="track-visits-customers"></a>Tracking Page Visits for Customers

In order to track page visits for customers, call the setPageVisit() function as a callback to setUserId() function on every page of the website to ensure that accurate user counts and session time metrics are collected. 
```javascript
// PageURL: The page URL (string, required)
// PageTitle: The page title (string, required)
// PageCategory: The page category (string, required)
optimoveSDK.API.setPageVisit(PageURL, PageTitle, PageCategory);
```

Example usage of setPageVisit() as a callback function to setUserId():
```javascript
// The SDK_ID refers to the unique/primary customer ID used by your website to identify registered customers/users. 
var SDK_ID = '123456'; 

//variables indicating the page info
var PageURL = 'https://www.myshop.com/clothes/unisex/shirts?item=123456';
var PageTitle = 'Some Shirt Name';
var PageCategory = 'Clothes Unisex Shirts';

//example callback 
var callback = function() { 
optimoveSDK.API.setPageVisit(PageURL, PageTitle, PageCategory);

// Only call the setUserID() if registered / identified customers **is not** empty, null, unidentified. 
// SDK_ID: (string, required) 
If(SDK_ID !== undefined && SDK_ID !== null && SDK_ID !== "") { 
optimoveSDK.API.setUserId(SDK_ID,callback); 
}
```
>**Note:** 
> - Every page view is recorded, including repeated visits to the same page.
>-   "customURL", and "pageTitle" are mandatory parameters.
> -  Call this function upon every page load/visit when you recognize the logged in user <br />



## <a id="advanced-setup"></a>Advanced Setup

The **Advanced Setup** includes everything in the [Basic Setup](https://github.com/optimove-tech/Web-SDK-Integration-Guide#basic-setup) as well as reporting custom events. 

Following your Basic Setup SDK deployment, Optimove's Product Integration Manager will setup a call to help you create and implement the custom events.

>**Note:** 
> The Basic Setup is a pre-requisite to the Advanced one.

### <a id="custom-events"></a>Reporting Custom Events

Your website reports a predefined event to Optimove by using JavaScript to call **reportEvent()** in this format:
```javascript
optimoveSDK.API.reportEvent(<event_name>, <parameter JS object>);
```

**Example usage 1:** reportEvent() without callback function
```javascript
// an function for adding a product to a specific wish list
function addToWishList(list_name, pid, pname, price) {
   var params = {};
	   params['list_name'] = list_name;
	   params['pid'] = pid;
	   params['name'] = pname;
	   params['price'] = price;
   optimoveSDK.API.reportEvent ('add_to_wishlist', params);
}

// calling the add to wish list function with the relavant data
addToWishList('my wish list 1', 123456, 'product name', 1.99);
```

**Example usage 2:** reportEvent() with callback function
```javascript
// a function for adding a product to a specific wish list 
//and updating the current size of the wish list 
function addToWishList(list_name, pid, pname, price) { 
	var params = {}; 
		params['list_name'] = list_name; 
		params['pid'] = pid; 
		params['name'] = pname; 
		params['price'] = price; 
		
	var callback = function() { 
	optimoveSDK.API.reportEvent('wishlist_size_change', {wishlist_size: 5}); 
	}; 

optimoveSDK.API.reportEvent ('add_to_wishlist', params, callback); 
} 

// calling the add to wish list function with the relavant data 
addToWishList('my wish list 1', 123456, 'product name', 1.99);
```
>**Note:**
>  - Event and parameter names are case sensitive.
>  - Events and parameters use lowercase and snake_case as a naming convention. Separate each word with one underscore character (_) and no spaces. (e.g., checkout_completed)
>  - The parameter types available for use in event-reporting functions are:<br/>
> **String**  – A series of alphanumeric characters of up to 255 characters in length, using any encoding<br/>
> **Number**  – Any numeric value, whether an integer or a value containing a decimal point<br/>
>  **Boolean**  – Is either "true" or "false" values, not a string<br/>
>  - All monetary values must be reported in the same currency defined in your Optimove instance (e.g., if your instance is based on US dollars, all monetary event values must be reported in dollars). Optimove will not perform currency conversions.
>  - If your Optimove instance supports multiple languages, all event parameters must use a single default language. This is required in order to maintain a unified set of events.
>  
