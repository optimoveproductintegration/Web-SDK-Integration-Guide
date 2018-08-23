

## Executing Webpage Pop-ups

-   [Introduction](#intro)
-   **[Getting Started](#getting-started)**
    -   [Enabling Webpage Pop-Ups using Optimove Web SDK](#enabling)
    - [What is Webpage Pop-Up: Option 1 (Default)](#opt1)
    - [What is Webpage Pop-Up: Option 2 (Callback)](#opt2)
-   **[Enabling Webpage Pop-Up: Option 1 (Default)](#option1)**
    -   [Webpage Pop-up code examples in Optimove Site](#create-popup-in-site)
    - -  [HTML Script](#html-script)
    - -  [CSS Script](#css-script)
    - -  [From Submission](#form-submission-script)
-   **[Enabling Webpage Pop-Up: Option 2 (Callback)](#option2)**
    - -  [setRealTimeOptions() code snippet](#rt-code-snippet)
    - -  [setRealTimeOptions() Definition](#rt-def)
    - -  [setRealTimeOptions() Response Arguments](#rt-arg)

<br/>
<a id="intro"></a>The Optimove Web SDK provides a website popup functionality, which can be used to show a marketing message to a website user when triggered by conditions defined by the marketer within client’s Optimove site.

When triggered, the HTML template selected by the marketer when creating the campaign will be sent to end-customer/user and Optimove’s embedded code will display the popup.
<hr>

## <a id="getting-started"></a>Getting Started

### <a id="enabling"></a>Enabling Webpage Pop-Ups using Optimove Web SDK

1.  During your Web SDK Integration, request from Optimove Product Integration team to enable one of the Webpage Pop-Ups options below (Default / Callback).
2. Once enabled, there are two options on integrating the Webpage Pop-Up:

	2a.  <a id="opt1"></a>**Option 1 (Default)**: By default, Optimove will automatically handle the execution and displaying of the popup in your website without additional code implementation on your side. See [Webpage Pop-Up: Option 1 (Default)](#option1)
	
	2b.  <a id="opt2"></a>**Option 2 (Callback)**: This will give you the ability to override Optimove's webpage pop-up functionality (#2a) and implement your own. See [Webpage Pop-Up: Option 2 (Callback)](#option2)
4.  Once enabled, log into your Optimove site to create the relevant templates and execute pop-ups. See [Webpage Pop-up code examples in Optimove Site](#create-popup-in-site) and [Execute campaign via Webpage Pop-up](https://docs.optimove.com/track-and-trigger/#Webpage).
<br/>

## <a id="option1"></a>Webpage Pop-Up: Option 1 (Default)
By creating a webpage pop-up campaign in your Optimove site (see [Webpage Pop-up code examples in Optimove Site](#create-popup-in-site) and [Execute campaign via Webpage Pop-up](https://docs.optimove.com/track-and-trigger/#Webpage)), this will automatically allow you to execute and display the relevant pop-up. 
[Optimove Web SDK](https://github.com/optimove-tech/Web-SDK-Integration-Guide) already consists of this functionality and there is no additional code implementation required.

There is however specific metadata (dimmer and watermark) that can be modified for your Optimove's webpage pop-up (see [Webpage Pop-ups Functions and Options](#webpage-pop-ups-function)).

>**Note:** 
> - The Web Pop-Up created via Manage Templates, does support form submission (text fields, drop downs, etc) into Optimove. Please see Form Submission.
> - To enable/disable dimmer or watermark, please contact the Product Integration Team.
> 
### <a id="create-popup-in-site"></a>Webpage Pop-up code examples in Optimove Site 
The below code should be used in Optimove Manage Templates
1.  Go to Manage Templates in your Optimove site
 2. Choose Web Pop-Up
 3. Create a pop-up page
 4. Either create a template or import an HTML file
 5. Use the below code examples for more details


### <a id="html-script"></a>HTML Script

```javascript
//No need to insert `<html>, <head>, <body> ` tags as this is inherited from your parent website. 
//Only insert the HTML tags that will be within the `<body>` tag, such as `<div>, <img>, <table>` and more.
<div id="div-id">
    Lorem ipsum dolor sit amet.
</div>
```
### <a id="css-script"></a>CSS Script
```javascript
//You can style the html tags by using in-line css
//The in-line css below effects inside the pop-up only
//he outter part of the pop-up (size and position) is pre-set by Optimove and does currently does not support adjustments
<div id="div-id" style="background-color:white;height:300px;width:300px">
    Lorem ipsum dolor sit amet.
</div>
```
### <a id="form-submission-script"></a>Form Submission
```javascript
//You can send a form data as a custom event by adding form html tags
<div id="div-id" style="background-color:white;height:300px;width:300px">
    Lorem ipsum dolor sit amet.
    <div><label>first name</label> <input type="text" id="fname" /></div>
    <div><label>last name</label> <input type="text" id="lname" /></div>
    <div><label>email</label> <input type="text" id="email" /></div>
    <button type="button" id="btn" >Register</button>
</div>

//Please note that only one script tag is supported and it must be after the HTML
<script>
   initPopup = function(){
        let btn = document.getElementById("btn");
            
        btn.onclick = function(event){
            let fname = document.getElementById("fname").value;
            let lname = document.getElementById("lname").value;
            let email = document.getElementById("email").value;
            
            //Optional: If you want the pop-up to close automatically upon form submission, use closeRealtimePopup(true) function
            self.optimoveSDK.API.closeRealtimePopup(true);
            //Optional: If you want to show a message after the form submission and allow the user to close the pop-up by clicking the (x), use the following example:
            my_response_message = "Thank you for joining our newsletter";
            document.getElementById("div-id").innerHTML = my_response_message;
            
            //registerUser() function sends both the SDK_ID and one custom event to Optimove
            self.optimoveSDK.API.registerUser(SDK_ID, email, "our_newsletter_event", { "fname" : fname, "lname" : lname})
        }
    }();
</script>
```

>**Note:** 
> - The [registerUser()](https://github.com/optimove-tech/Web-SDK-Integration-Guide#record-user-email) can only be called once within the pop-up with one event
> - In the example above, the "our_newsletter_event" event is a custom event which can then be accessible when creating a relevant Target Group in order to create & trigger campaigns
> - Form submission response message should be included in the script tag

8.   Preview the added HTML
9. Save
<br/>

## <a id="option2"></a>Webpage Pop-Up: Option 2 (Callback)
If you prefer, you can override Optimove's (Option 1: Default) webpage pop-up functionality in order to serve the popup yourself. This means, you will be able to retrieve the marketer's message/HTML coming from Optimove campaign and display it in your website according to your own popup/banner functionality (see [Webpage Pop-ups Callback Functions and Options](#webpage-pop-ups-function)).
<br/>

<a id="rt-code-snippet"></a>**setRealTimeOptions() code snippet:**
```javascript
var  options  = {
	showDimmer :  true,
	showWatermark :  true,
	//Function reportEventCallback overrides Optimove Option 1 Default popup
	//response" is the message/HTML coming from the template created by the marketer in the Optimove site (see "Data" parameter below)
	reportEventCallback :  function(response){
		//insert here your own code to display the popup/banner if necessary
		//This is only an example:
		if(response.Data){
			openAPopUp(response.Data)
		}
	}

}

//This SDK function will know to override Optimove Default pop-up and use this instead
optimoveSDK.API.setRealTimeOptions(options);

//A function the open's your own pop-up
function openAPopUp(optimovePopupData){
	//some code that uses the Optimove data from Manage Templates (optimovePopupData) and opens the popup
}
```

<br>

<a id="rt-def"></a>**setRealTimeOptions() Definition:**

| Options             | Desc                                                                                                                                                                                                                                                                     | Type     | Default            |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|--------------------|
| showDimmer          | Dims the rest of the page around the popup box                                                                                                                                                                                                                            | Boolean  | True               |
| showWatermark       | Shows the Optimove watermark under the popup                                                                                                                                                                                                                             | Boolean  | True               |
| reportEventCallback | Use this option to override the Optimove webpage pop-up in order to display your own code. In this event, the response argument will appear as:  | Function | [response arguments](#response-arg) (optional: your code) |
<br/>

**<a id="rt-arg"></a>setRealTimeOptions() Response Arguments**
```javascript
{
	"IsSuccess": true, //always set to true
	"Data": false  // when no realtime campaign was triggered
}
```
OR
```javascript
{
	"IsSuccess": true, //always set to true
	"Data": <HTML template>  // when a campaign was triggered, you will receive back the message/HTML
}
```
<hr>
