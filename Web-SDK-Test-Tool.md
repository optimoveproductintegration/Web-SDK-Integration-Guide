
# Optimove Web SDK Test Tool User Guide
The Web SDK Test Tool (WSTT) was created in order to help your developers see the data that is being sent from your website to Optimove, using the Optimove Web SDK. Once launched within a browser window, all events sent to Optimove will appear in the WSTT panel.

## Enabling the Web Test Tool
1. Navigate to a page in your website using the Chrome browser.
2. Open Chrome’s Developer Tools (Ctrl+Shift+I).
3. Go to the Console tab.
4. Type or paste in  `optimoveSDK.API.openWebTestTool();` to display the WSTT.
4. Once the WSTT is open, you can close the Developer Tools.
<p align="left"><img src="https://raw.githubusercontent.com/optimove-tech/Web-SDK-Integration-Guide/master/images/openWebTestTool-1.jpg?raw=true"></p>
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/openWebTestToolNew-1.png?raw=true"></p>


## Viewing Events & Parameters
- Events are only displayed for one hour from the time the WSTT is opened.
- Events are sorted chronologically, with the first event at the top and last event at the bottom.
- Each row consists of: 
    - **Date** in Date+Time format
    - **Event ID** as configured by the Optimove Product Integration Team
    - **Event Name** as configured by the Optimove Product Integration Team
    - **Content** – the event's parameters and values
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/openWebTestToolNew-2.png?raw=true"></p>

- You can expand an event to see the event data sent to Optimove, including the various parameters sent within the event:
    

<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/openWebTestToolNew-4.png?raw=true"></p>

**Notes**: 
 - User ID is only shown if setUserId(); was called successfully and a session is stored.
 - Click Clear Events at any time to clear the list of reported events.
		
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/openWebTestToolNew-3.png?raw=true"></p>

## Reviewing Optimove Core Events
The four most common core events are:
1. **set_page_visit** - Created by calling the `setPageVisit()` SDK function
2. **page_category_event** - Derives from the set_page_visit event
3. **set_user_event** - Created by calling  the `setUserId()` or `registerUser` SDK functions
4. **set_email_event** - Created by calling  the `SetUserEmail()` or `registerUser` SDK functions
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/openWebTestToolNew-5.png?raw=true"></p>

**Note that the IDs for core events – those included as part of the basic Web SDK implementation – are all in the range of 1000-1099.**


## Reviewing Custom Events
- The IDs of all custom events are greater than 1100.
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/openWebTestToolNew-6.png?raw=true"></p>



## Errors
- The Optimove Web SDK will report one of the following errors if there is a problem with how an event is reported to the SDK:


	1. **Event Name undefined**
	
		Only pre-configured event names may be reported. To add a new event, contact your Optimove product integration manager
		
		<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/WebSDKToolError-1.png?raw=true"></p>
			
	2. **Parameter name undefined**
	
		Only pre-configured parameter names may be reported. To add a new parameter to a particular event, contact your Optimove product integration manager.
		<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/WebSDKToolError-2.png?raw=true"></p>
		
	3. **Required parameter data missing**
	
		If an event was pre-configured to require a certain parameter value and that parameter or value was not sent with the event, the SDK will not accept the reported event. If you want to make this parameter not required with the event, contact your Optimove product integration manager to change the parameter to be optional.
		<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/WebSDKToolError-3.png?raw=true"></p>
		
	4. **Incorrect parameter data type**
	
		If an event's parameter was pre-configured to be of a particular type (e.g., string, numeric, Boolean) and the parameter value sent with the event was of a different type, the SDK will not accept the reported event. If you want to change the data type for a parameter, contact your Optimove product integration manager.
		<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/WebSDKToolError-4.png?raw=true"></p>
