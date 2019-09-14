# Optimovegit Web SDK Test Tool Guide
The tool was created in order to help your engireeing person(s) see the data that is being set to Optimove within your website

## Enabling the Test Tool
1. Open the Developer Tools in your browser
2. Go to the Console tab
3. Type in `optimoveSDK.API.openSideBar();` to display the Optimove SDK Web Test Tool
4. Once the Test Tool is open, you can close the DevTools
TODO: PHOTO 1

## Reading the Test Tool Events & Parameters
- Events are only stored for 1 hour upon opening the Test Tool
- Events are sorted ASC where the first event is at the top and last event is at the bottom
- Each row will consist of: 
    - **Date** in Date + Time format
    - **Event ID** and "Event Name" as was configured by the Optimove Product Integration Team
- All events consist of four additional parameters that Optimove captures:
    - **UserId** - will only be shown if `setUserId()` was called successfully and a session is stored
    - **Event Platform** - your device platform (e.g. windows, mac, etc)
    - **Event Device Type** - your device type (e.g. desktop, mobile, etc)
    - **Event OS** - your device operating system (e.g. Windows 10, MacBook, Android 10, iOS 13, etc)
    - **Event Native Mobile** - whether your users visited from a mobile native app or not (e.g. true / false)
- You have the option to "Clear Events" at any time

>- Note*: The Test Tool currently does not display any errors (e.g. events / param missing, incorrect implementation, etc)

## Validating Optimove Core Events (part of the Basic SDK Implementation)
All core events Event ID range from 1000-1099
1. **set_page_visit** - Created from the `setPageVisit()` SDK function
TODO: PHOTO 2
2. **page_category_event** - Derives from the set_page_visit event
TODO: PHOTO 3
3. **set_user_id** - Created from the `setUserId()` SDK function (as well a `registerUser`)
TODO: PHOTO 4
4. **set_user_email** - Created from the `SetUserEmail()` SDK function  (as well a `registerUser`)
TODO: PHOTO 5

## Validating Custom Events
- All custom events start with Event ID greater than 1100
TODO: photo 6
