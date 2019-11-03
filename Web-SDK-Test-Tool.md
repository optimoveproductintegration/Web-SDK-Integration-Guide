# Optimove Web SDK Test Tool User Guide
The Web SDK Test Tool (WSTT) was created in order to help your developers see the data that is being sent from your website to Optimove, using the Optimove Web SDK. Once launched within a browser window, all events sent to Optimove will appear in the WSTT panel.

## Enabling the Web Test Tool
1. Navigate to a page in your website using the Chrome browser.
2. Open Chrome’s Developer Tools (Ctrl+Shift+I).
3. Go to the Console tab.
4. Type or paste in  `optimoveSDK.API.openWebTestTool();` to display the WSTT.
4. Once the WSTT is open, you can close the Developer Tools.
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool-1.jpg?raw=true"></p>
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool-2.jpg?raw=true"></p>

## Viewing Events & Parameters
- Events are only displayed for one hour from the time the WSTT is opened.
- Events are sorted chronologically, with the first event at the top and last event at the bottom.
- Each row consists of: 
    - **Date** in Date+Time format
    - **Event ID** as configured by the Optimove Product Integration Team
    - **Event Name** as configured by the Optimove Product Integration Team
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool-3.jpg?raw=true"></p>

- You can expand an event to see the event data sent to Optimove:
    - **User ID** (only shown if setUserId(); was called successfully and a session is stored)
    - **Platform** (the device platform, such as Windows, Android)
    - **Device Type** (the device type, such as desktop, mobile)
    - **OS** (the device operating system, such as MacBook, iOS 13)
    - **Native Mobile** (true if the event occurred from a native mobile native app)
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool5-2.jpg?raw=true"></p>

>- **Note**: 
>- The WSTT does not currently display any errors (e.g., missing parameter, incorrect implementation).
>- Click Clear Events at any time to clear the list of reported events.
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool-4.jpg?raw=true"></p>

## Reviewing Optimove Core Events
The four most common core events are:
1. **set_page_visit** - Created by calling the `setPageVisit()` SDK function
2. **page_category_event** - Derives from the set_page_visit event
3. **set_user_event** - Created by calling  the `setUserId()` or `registerUser` SDK functions
4. **set_email_event** - Created by calling  the `SetUserEmail()` or `registerUser` SDK functions
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool-6.jpg?raw=true"></p>

>- **Note**: 
>- The IDs for core events – those included as part of the basic Web SDK implementation – are all in the range of 1000-1099.

## Reviewing Custom Events
- The IDs of all custom events are greater than 1100.
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/maste/images/openWebTestTool-7.jpg?raw=true"></p>

Please address any questions to the Optimove Product Integration Team.