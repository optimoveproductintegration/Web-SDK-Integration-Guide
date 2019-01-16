## Webpage Pop-up Tech Guide

-   [Introduction](#intro)
-   **[Getting Started](#getting-started)**
    -   [Enabling Webpage Pop-Ups using Optimove Web SDK](#enabling)
    - [What is Webpage Pop-Up Wrapper option (Served by Optimove)](#opt1)
    - [What is Webpage Pop-Up Callback option (Served by the client)](#opt2)
-   **[Integrating the Wrapper option ](#option1)**
    -   Pop-up content code format & best practice
	    -  [HTML ](#html-script)
	    -  [External Fonts](#ex-fonts)
	    -  [CSS ](#css-script)
	    -  [JavaScript](#js-script)
	    -  [Newsletters and Form Capture](#form-submission-script)
	-   Code snippets
		-   [Promotional popup](https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Webpage%20Pop-ups/wapper-promotional-popup.html)
		-   [Newsletter / form capture popup](https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Webpage%20Pop-ups/wapper-newseltter-popup.html)
	-   Testing your Pop-up
		-   [Optimove Pop-up Preview Tool ](#chrome-extension) (Chrome Extension)
-   **[Integrating the Callback option ](#option2)**
    -  [setRealTimeOptions() code snippet](#rt-code-snippet)
    -  [setRealTimeOptions() Definition](#rt-def)
    -  [setRealTimeOptions() Response Arguments](#rt-arg)
-   **[More Info](#getting-started)**
    -   [Creating a pop-up template in Optimove UI](https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Webpage%20Pop-ups/create-webpage-pop-up-template.md)
    -   [Creating a realtime trigger in Optimove UI](https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Webpage%20Pop-ups/create-trigger-in-Optimove-site.md)
    -   [Executing Webpage Pop-up realtime campaign in Optimove UI](https://docs.optimove.com/track-and-trigger/#Webpage)
    
<br/>
<a id="intro"></a>The Optimove Web SDK provides a website content-based popup that will  show your popup on specified pages. This can be used to either show a marketing message to a website user or have a user sign-up to a newsletter / form that triggered by conditions defined by the marketer within client’s Optimove site. 
<hr>

## <a id="getting-started"></a>Getting Started

### <a id="enabling"></a>Enabling Webpage Pop-Ups using Optimove Web SDK

1.  During your Web SDK Integration, request from Optimove Product Integration team to enable one of the Webpage Pop-ups options below (Wrapper/ Callback).
2. Once enabled, there are two options on integrating the Webpage Pop-up:

	2a.  <a id="opt1"></a>**Wrapper option (Served by Optimove)**: Optimove will automatically handle the execution and displaying / serving of the popup in your website as part of the Web SDK integration.  See [Integrating the Wrapper option](#option1)
	>**Note:** 
	> - The Wrapper option is not a "new window" pop-up, but rather an embedded Optimove code on your website
	> - For Wrapper option position and sizes, please see [Integrating the Wrapper option](#option1)
	
	2b.  <a id="opt2"></a>**Callback option (Served by the client)**: This will give you the ability to override Optimove's webpage pop-up functionality (#2a) and implement your own. See [Integrating the Callback option](#option2)
	
3.  Once implemented, log into your Optimove site to create the [relevant templates](https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Webpage%20Pop-ups/create-webpage-pop-up-template.md), [triggers](https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Webpage%20Pop-ups/create-trigger-in-Optimove-site.md) and  [execute pop-ups](https://docs.optimove.com/track-and-trigger/#Webpage).
<br/>

## <a id="option1"></a>Integrating the Wrapper option

### <a id="pre-req-1"></a>Prerequisite

[Optimove Web SDK](https://github.com/optimove-tech/Web-SDK-Integration-Guide) integrated on your website 

>**Pop-up display notes:** 
> - The position of the pop-up is a fixed position centered in your website
> - The size of the pop-up is adjusted automatically according to you pop-up content
> - The pop-up does have a close (x) button allowing users to close the pop-up
> - The pop-up dimmer (background shadow behind the pop-up) and watermark is disabled by default. If you want to enable any of these, please request from the Product Integration Team.
> - The dimmer has a fixed CSS style opacity of "0.5"
> 
### <a id="create-popup-in-site"></a>Pop-up content code format & best practice 

#### <a id="html-script"></a>HTML
>**Notes:** 
> - The `<html>, <head>, <body>` tags are required within the [Manage Templates](https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Webpage%20Pop-ups/create-webpage-pop-up-template.md)
> 
```html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<style></style>
	<body>              
        <!-- You can add IDs to an HTML element -->
		<!-- You can add either in-style CSS or CSS classes to an HTML element -->
        <div id="optimove-main-div" class="optimove-main-div">
            <div id="optimove-before-submit">
				<h2>Lorem ipsum dolor sit amet.</h2>
				<p>Lorem ipsum dolor sit amet.</p>
				<div>
					<!-- You can add form elements -->
					<input type="email" id="email">
					<button type="button" id="btn">Lorem</button>
				</div>
				<a href="#" id="some-link">Lorem ipsum</a>
			</div>
			<div class="optimove-after-submit" id="optimove-after-submit">
                Lorem ipsum dolor sit amet.
                <a  href="#"  id="close-popup">Lorem ipsum</a>
			</div>
        </div>
    </body>
    <script></script>
</html>
```
#### <a id="ex-fonts"></a>External Fonts
>**Notes:** 
> - You can also add external fonts, such as Google fonts (see example below)
> - The external < link > tag should be added right after the < body > tag start
```html
<link  rel="stylesheet"  href="https://fonts.googleapis.com/css?family=SomeFont">
```

#### <a id="css-script"></a>CSS 
>**Notes:** 
> - You can add either in-style CSS or CSS classes to an HTML element 
> - For external fonts, please see above
> - If using CSS classes to an HTML element, you can either add CSS in within the Manage Template, or pointing it to your website CSS 
> - If you are using CSS classes, please make sure they are only to be used for the pop-up itself and not manipulate/change anything else in the Wrapper or your website 
> 
```html
<style>
.optimove-main-div{
	display: block;
}
h1 {color:red;}
.optimove-after-submit{
	display: block; 
}
</style>
```

#### <a id="js-script"></a>JavaScript
>**Notes:** 
> - You can add script tag after the < body > tag that only correlates to your pop-up html/css 
> - The pop-up supports classic JavaScript code by default, including ECMAScript
> -  If you prefer using jQuery, please make sure to add the library to your website
> 
```javascript
<script>
console.log("add your JS code");	
</script>
```

#### <a id="form-submission-script"></a>Newsletters and Form Capture
>**Notes:** 
> - Form submittion should be used to either have your users join your newsletter or to collect data to be used within Optimove UI 
> - Please see [Javascript support](#js-sript) above for more important notes
> - In the example below uses the "signup" event which is a custom event and must be configured beforehand by the Product Integration Team in order to be accessible 
> - The [registerUser()](https://github.com/optimove-tech/Web-SDK-Integration-Guide#record-user-email) can only be called once within the pop-up with one event
> 
```javascript
<script>	
initPopup = function()
{
	initPopupLog("inside pop-up");
	let btn = document.getElementById("btn");
	btn.onclick = function(event)
	{
		initPopupLog("popup signup btn clicked");
		let $email = document.getElementById("email").value;
		let SDK_ID = email;					
		
		//registerUser() function sends both the SDK_ID and one custom event to Optimove
		self.optimoveSDK.API.registerUser(SDK_ID, email, "signup",
		{
			email: email
		});
                 
                 //Optional: If you want the pop-up to close automatically upon form submission, use closeRealtimePopup(true) function, otherwise do not add this function
                 self.optimoveSDK.API.closeRealtimePopup(true);
                 
                 //Optional: If you want to show a message after the form submission and allow the user to close the pop-up by clicking the (x) instead of  closeRealtimePopup(true), use the following example:
		document.getElementById("optimove-before-submit").style.display = "none";
		document.getElementById("optimove-after-submit").style.display = "block";
	}
	let closeBtn = document.getElementById('close-popup');
	closeBtn.onclick = function(event)
	{
		initPopupLog("closing pop-up");
		self.optimoveSDK.API.closeRealtimePopup(true);
	}
         }();
         //user for integration on-boarding purposes only
         function initPopupLog (message){
             console.log(message);
             //when want to turn this off, just "return" instead
             //return;
         } 
</script>
```
<br/>

## <a id="chrome-extension"></a>Testing your Pop-up

During your pop-up development and QA, you may want to preview the pop-up's code (HTML, CSS and JavaScript). You can do so by installing [Optimove's Pop-up Preview Tool](https://chrome.google.com/webstore/detail/optimove-pop-up-preview-t/hkmibimnfjlpdllheganlbiinhlehago) in your Chrome browser. 

<br/>

## <a id="option2"></a>Integrating the Callback option
If you prefer, you can override Optimove's Wrapper option in order to serve the popup yourself. This means, you will be able to retrieve the marketer's message/HTML coming from Optimove campaign and display it in your website according to your own popup/banner functionality (see [setRealTimeOptions() Definitions](#rt-def)).
>**Notes:** 
> Optimove currently supports either Wrapper option or Callback option and not both

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
| reportEventCallback | Use this option to override the Optimove webpage pop-up in order to display your own code. In this event, the response argument will appear as:  | Function | [setRealTimeOptions() Response Arguments](#rt-arg) (optional: your code) |
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


