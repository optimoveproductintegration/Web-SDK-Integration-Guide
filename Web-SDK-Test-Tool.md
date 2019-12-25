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
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/openWebTestToolNew-2.png?raw=true"></p>

- You can expand an event to see the event data sent to Optimove, including the different parameters sent within the event:
    - **User ID** (only shown if setUserId(); was called successfully and a session is stored)
    Parameters for example:
   - **Page URL**
   - **Page Title**
   - **Page Category**
    

<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/openWebTestToolNew-3.png?raw=true"></p>

>- **Note**: 
		> Click Clear Events at any time to clear the list of reported events.
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/openWebTestToolNew-4.png?raw=true"></p>

## Reviewing Optimove Core Events
The four most common core events are:
1. **set_page_visit** - Created by calling the `setPageVisit()` SDK function
2. **page_category_event** - Derives from the set_page_visit event
3. **set_user_event** - Created by calling  the `setUserId()` or `registerUser` SDK functions
4. **set_email_event** - Created by calling  the `SetUserEmail()` or `registerUser` SDK functions
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/openWebTestToolNew-5.png?raw=true"></p>

>- **Note**: 
>- The IDs for core events – those included as part of the basic Web SDK implementation – are all in the range of 1000-1099.

## Reviewing Custom Events
- The IDs of all custom events are greater than 1100.
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/LeslyOpti-branch1/images/openWebTestToolNew-6.png?raw=true"></p>


## Error Types
 - If any of the core events/custom events that you are trying to send through Optimove's web SDK has an issue, you encounter one of the following error types

	1. **"Event Name is Unavailable.  Please check the configuration file and try again"** 
			You will receive this error if an event was not pre-configured within your 			Optimove instance.  Please contact your product integration manager to add this event.
			
	2.   **"X parameter name is unavailable.  Please check the configuration file and try again**
		You will receive this error if an event's parameter was not pre-configured within your 			Optimove instance.  Please contact your product integration manager to add this parameter within the event you were trying to send.
		
	3. **"ERROR- Required paramMetadata X is missing "**
		If an event was pre-configured with certain required parameters and if one of these parameters was not sent within the event, you will encounter this error.  Please make sure to send a value for this parameter every time you report this event.   If this parameter is not required within that event, please contact your product integration manager to change the parameter to be defined as "optional". 
		
	4. **ERROR- Parameter X should be of type X (string, boolean or number)**
		If an event's parameter was pre-configured to be of type string, boolean or number and the value that was sent when the event was reported does not match the type it was defined for, you will encounter this error. Please make sure to send the correct data type for that parameter.   If that parameter should be set to be a different data type, please contact your product integration manager.    
