
## Executing Webpage Pop-ups

-   [Introduction](#intro)
-   **[Getting Started](#getting-started)**
    -   [Enabling Webpage Pop-Ups using Optimove Web SDK](#enabling)
    - [Webpage Pop-Up: Option 1 (Default)](#option1)
    - [Webpage Pop-Up: Option 2 (Callback)](#option2)
    - [Webpage Pop-ups Functions and Options](#webpage-pop-ups-function)
-   **[Creating Webpage Pop-up campaign in Optimove Site](#create-popup-in-site)**
    -   [Create a Pop-up template](#templates)
    - [Create Realtime Triggers](#triggers)
    - [Create Target Group & Enable Campaign](#campaign)

<a id="intro"></a>The Optimove Web SDK provides a website popup functionality, which can be used to show a marketing message to a website user when triggered by conditions defined by the marketer within client’s Optimove site.

When triggered, the HTML template selected by the marketer when creating the campaign will be sent to end-customer/user and Optimove’s embedded code will display the popup.
<hr>

## <a id="getting-started"></a>Getting Started

### <a id="enabling"></a>Enabling Webpage Pop-Ups using Optimove Web SDK

1.  During your Web SDK Integration, request from Optimove Product Integration team to enable one of the Webpage Pop-Ups options below (Default / Callback).
2. Once enabled, there are two options on integrating the Webpage Pop-Up:

	2a.  **Option 1 (Default)**: By default, Optimove will automatically handle the execution and displaying of the popup in your website without additional code implementation on your side. See [Webpage Pop-Up: Option 1 (Default)](#option1)
	
	2b.  **Option 2 (Callback)**: This will give you the ability to override Optimove's webpage pop-up functionality (#2a) and implement your own. See [Webpage Pop-Up: Option 2 (Callback)](#option2)
4.  Once enabled, log into your Optimove site to create the relevant templates and execute pop-ups. See [Creating Webpage Pop-up campaign in Optimove Site](#create-popup-in-site).
<br/>

### <a id="option1"></a>Webpage Pop-Up: Option 1 (Default)
By creating a webpage pop-up campaign in your Optimove site (see [Creating Webpage Pop-up campaign in Optimove Site](#create-popup-in-site)), this will automatically allow you to execute and display the relevant pop-up. [Optimove Web SDK](https://github.com/optimove-tech/Web-SDK-Integration-Guide) already consists of this functionality and there is no additional code implementation required.

There is however specific metadata (dimmer and watermark) that can be modified for your Optimove's webpage pop-up (see [Webpage Pop-ups Functions and Options](#webpage-pop-ups-function)) that is done by Optimove's Product Integration Manager. Please ask the Product Integration Manager to update the metadata as required.
<br/>
### <a id="option2"></a>Webpage Pop-Up: Option 2 (Callback)
If you prefer, you can override Optimove's webpage pop-up functionality in order to serve the popup yourself. This means, by calling the  `reportEventCallback` function (see [Webpage Pop-ups Functions and Options](#webpage-pop-ups-function)), you will be able to retrieve the marketer's message/HTML coming from Optimove campaign and display it in your website according to your own popup/banner functionality.
<br/>
### <a id="webpage-pop-ups-function"></a>Webpage Pop-ups Functions and Options

**Options & Function code snippet**
```
var options = {
	    showDimmer : true,
	    showWatermark : true,
	    reportEventCallback : function(response){
		    
		    //where "response" is the message/HTML coming from the template created by the marketer in the Optimove site (see "Data" parameter below)
			
			//insert here your own code to display the popup/banner if necessary
			
	    }
}
optimoveSDK.API.setRealTimeOptions(options);

```
<br>

**Definitions**

| Options             | Desc                                                                                                                                                                                                                                                                     | Type     | Default            |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|--------------------|
| showDimmer          | Dims the rest of the page around the popup box                                                                                                                                                                                                                            | Boolean  | True               |
| showWatermark       | Shows the Optimove watermark under the popup                                                                                                                                                                                                                             | Boolean  | True               |
| reportEventCallback | Use this option to override the Optimove webpage pop-up in order to display your own. using your own code. In this event, the response argument will appear as:  | Function | [response arguments](#response-arg) (your code is optional) |
<br/>

**<a id="response-arg"></a>Response Arguments**

	{
		"IsSuccess": true, //always set to true
		"Data": false  // when no realtime campaign was triggered
	}
OR

    {
    	"IsSuccess": true, //always set to true
    	"Data": <HTML template>  // when a campaign was triggered
    }

<hr>

## Creating Webpage Pop-up campaign in Optimove Site 

### <a id="templates"></a>Create a Pop-up template

1.  Go to Manage Templates in your Optimove site
2. Choose Web Pop-Up
3. Create a pop-up page
4. Import your popup HTML file
	5. **HTML Note:** No need to insert `<html>, <head>, <body> ` tags as this is inherited from your parent website. Only insert the HTML tags that will be within the `<body>` tag, such as `<div>, <img>, <table>` and more.
	6. **JavaScript Note**: You can insert Optimove Web SDK JavaScript calls, such as `reportEvent()`, `setUserEmail()`, and more.
7. Preview the added HTML
8. Save

### <a id="triggers"></a>Create Realtime Triggers

 1. Go to Manage Realtime Triggers in your Optimove site
 2. Create new trigger 
 3. Add relevant events & params that was created with the Web SDK integration

### <a id="campaign"></a>Create Target Group & Enable Campaign

 1. Go to # Manage Target Groups in your Optimove site
 2. Choose the template you have created for this webpage pop-up
 3. Click on Criteria tab and select the Target Group
	 4. **Note**: In order to test in within your staging front-end website, the public_customer_id must be the identical as in your production website, otherwise you will not be able to trigger the webpage pop-up on your staging website
5. Click on Realtime Campaigns tab
6. Add realtime campaigns trigger and campaign details
7. After creating the template, triggers and campaign, go to your website and create the journey that will trigger the realtime campaign you have created 
