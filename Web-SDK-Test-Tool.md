# Optimove's Web SDK Test Tool Guide
The tool was created in order to help your engireeing person(s) see the data that is being set to Optimove within your website

## Enabling the Web Test Tool
1. Open the Developer Tools in your browser
2. Go to the Console tab
3. Type in `optimoveSDK.API.openWebTestTool();` to display the Optimove SDK Web Test Tool
4. Once the Test Tool is open, you can close the DevTools
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool-1.jpg?raw=true"></p>
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool-2.jpg?raw=true"></p>

## Reading the Test Tool Events & Parameters
- Events are only stored for 1 hour upon opening the Test Tool
- Events are sorted ASC where the first event is at the top and last event is at the bottom
- Each row will consist of: 
    - **Date** in Date + Time format
    - **Event ID** and **Event Name*** as was configured by the Optimove Product Integration Team
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool-3.jpg?raw=true"></p>

- You have the option to "Clear Events" at any time
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool-4.jpg?raw=true"></p>

- All events consist of four additional parameters that Optimove captures:
-- **UserId:** will only be shown if `setUserId()` was called successfully and a session is stored
-- **Event Platform:** your device platform (e.g. windows, mac, etc)
-- **Event Device Type:** your device type (e.g. desktop, mobile, etc)
-- **Event OS:** your device operating system (e.g. Windows 10, MacBook, Android 10, iOS 13, etc)
-- **Event Native Mobile:** whether your users visited from a mobile native app or not (e.g. true / false)
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool5-2.jpg?raw=true"></p>

>- **Note**: The Test Tool currently does not display any errors (e.g. events / param missing, incorrect implementation, etc)

## Validating Optimove Core Events (part of the Basic SDK Implementation)
All core events Event ID range from 1000-1099
1. **set_page_visit** - Created from the `setPageVisit()` SDK function
2. **page_category_event** - Derives from the set_page_visit event
3. **set_user_event** - Created from the `setUserId()` SDK function (as well a `registerUser`)
4. **set_email_event** - Created from the `SetUserEmail()` SDK function  (as well a `registerUser`)
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool-6.jpg?raw=true"></p>

## Validating Custom Events
- All custom events start with Event ID greater than 1100
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool-7.jpg?raw=true"></p>

For any further questions, please contact your Optimove Product Integration Team.