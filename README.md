
Marketers use the Optimove Relationship Marketing Hub to automate the execution of highly-personalized customer communications. Optimove offers its clients an efficient way to report data from their websites and trigger campaigns accordingly.
This guide will show you how to setup the Web SDK (using JavaScript) in order to:
* Tracking visitor and customer actions and events in realtime
* Triggering realtime personalized campaigns (such as activity-triggered website pop-ups)
* Enable Cookie matching with the Google Display Network
The Web SDK is supported for both desktop and mobile web browsers.


----------


# Basic Setup
You can also watch our [webinar](https://academy.optimove.com/customer-retention/webinar-optimove-web-sdk-basic-setup) for more information on how to integrate the basic setup.
 
Use the Basic Setup (required) in order to:
* Tracking your website’s out-of-the-box events in realtime
* Triggering realtime personalized campaigns (such as activity-triggered website pop-ups)
* Cookie matching with the Google Display Network

**1. Request a Web SDK from Optimove**

Please contact your Optimove Customer Success Manager (CSM) or Optimove point of contact to request your Tenant and Web SDK configuration details in order incorporate into your code. Optimove’s Integration Team will then send you your SDK details which include the Out-Of-The-Box (OOTB) events in order to get started.

**2. Remove any legacy tracking scripts from the website**

During the Web SDK onboarding, if you have been using any previous Optimove scripts (Optitrack/Realtime) for the purposes of tracking events or performing Google cookie matching, please remove them, as the Web SDK and legacy code cannot run simultaneously. If you are uncertain which version you have implemented, please contact Optimove Product Integration team.

**Note**: You should continue sending events in production to legacy Optimove tracking script while implementing this SDK on your staging/testing environment.

**3. Add the Optimove Web SDK script to your website**

The following code snippet must be added to every page in your website, either by adding it into the relevant site template files/code or using a website tag manager (such as Google Tag Manager). This code will load and initialize the SDK.

    <script src="https://sdk-cdn.optimove.net/websdk/sdk-vSDKVersion.js"></script>
    <script type="text/javascript">
       optimoveSDK.initialize("TenantToken", "ConfigVersion", function(){
          // events may be called here
       }, "info");
    </script>

Remember to replace TenantToken, ConfigVersion and SDKVersion with the actual details that you receive from Optimove’s Integration Team.

**4. Reporting Visitor and Customer activity**

You will also need to include the following steps below to complete the basic setup:
* Linking Website Visitors to Registered Customer IDs
* Tracking Page Visits
* Recording/Updating User Email Addresses

# Advanced Setup 

Use the Advanced Setup (optional) in order to:

1. Tracking visitor and customer customized actions and events in realtime

2. Triggering realtime personalized campaigns (such as activity-triggered website pop-ups)

3. Cookie matching with the Google Display Network

As described in Reporting Custom Events, this step requires collaboration between you and Optimove’s Integration Team. Please contact your Optimove Customer Success Manager (CSM) or Optimove point of contact to schedule a meeting with the Product Integration team.

**Note**: You can deploy the basic setup, followed by adding the advanced setup at a later stage. The Basic Setup is a pre-requisite.


----------


# **Track**
### Linking Website Visitors to Registered Customer IDs 

In order for all event reporting and realtime functions to be properly associated with the correct individual customer, the setUserID function must be called:

(a) whenever a customer initially registers (or, alternatively, the registerUser function), and also 

(b) on every page visit for which the visitor is identified as a known customer (either after logging in or after being 
identified by a persistent site cookie).

**Note**: Only call this event if registered / identified customers is not empty, null, unidentified. 

Sample usage:

    var public_customer_ID = '123456';
    If(public_customer_ID) {optimoveSDK.API.setUserID(public_customer_ID);}

This function (or, alternatively, the registerUser function) must also be called to effect Google cookie matching when using Optimove with the [Google Display Network](https://github.com/optimoveintegrationoptitrack/GDN).

**Notes**:
* The Public Customer ID above refers to the unique customer ID used by your website to identify registered customers/users and which are used to identify individual customer records within your Optimove customer database.
* If you will be sending encrypted customerID, please follow the steps in “Reporting encrypted CustomerIDs
* In instances where you need to set both the visitor's user ID and email address simultaneously, you should use the registerUser function instead of setUserId. This applies to all situations in which a single user action requires you to set both the user ID and email address (e.g., registration, newsletter signup).

### **Tracking Page Visits**
You must implement the following OOTB function call on every page of the website to ensure that accurate user counts and session time metrics are collected. 

    optimoveSDK.API.setPageVisit(PageURL, PageTitle, PageCategory);

where:
* **PageURL**: The page URL (string, required)
* **PageTitle**: The page title (string, optional)
* **PageCategory**: The page category (string, optional). 
The page category parameter must always use the exact same text (for example, "Sports-Basketball" should always be specified as "Sports-Basketball" and without using variations, such as "Sport-Basketball" or "Basketball").

Sample usage:

    function updateSDKPageVisit (PageURL, PageTitle, PageCategory) {
        optimoveSDK.API.setPageVisit(PageURL, PageTitle, PageCategory);
    }
    var PageURL = 'https://www.example.com/shop/sport/tennis? user=824734214';
    var PageTitle = 'Tennis - Main Page';
    var PageCategory = 'Sport-Tennis';
    updateSDKPageVisit (PageURL, PageTitle, PageCategory);

**Notes**: 
* Every page view is recorded, including repeated visits to the same page.
* setPageVisit function is optional only if you are using the Google Display Network as a stand-alone add-on (without tracking website events). 

### **Recording/Updating User Email Addresses**
Whenever the website captures a user’s email address, such as when a visitor submits a register or subscribe form, call the setUserEmail function to record the address.
This is best used when you want to capture realtime email event.

    optimoveSDK.API.setUserEmail(email);

where email is the website user’s email address (string, required).
Sample usage:

    function updateSDKUserEmail(email){
       optimoveSDK.API.setUserEmail(email);
    }
    var email = 'joe@gmail.com';
    updateSDKUserEmail (email);

**Note**: 
* In instances where you need to set both the visitor's user ID and email address simultaneously, you should use the registerUser function instead of setUserEmail. This applies to all situations in which a single user action requires you to set both the user ID and email address (e.g., registration, newsletter signup).
* When using setUserEmail(email), no need to also send a custom event for register.

###  **Registering the User ID and User Email at the Same Time**

In all situations where a single user action requires you to set both the customer ID and email address (e.g., registration, newsletter signup) simultaneously, you should use the registerUser function (instead of calling both setUserId and setUserEmail) to ensure the proper registration of the user in Optimove.

    optimoveSDK.API.registerUser(userId, email, eventName, parameters);

where:
* **userId**: The user's Customer ID (Integer/String, required)
* **email** The user's email address (string, required)
* **eventName**: Name of the event* during which the userID and email address were captured (string, optional)
* *	Event names will be pre-registered in Optimove by your CSM. Note that including the optional eventName and parameters values in this function call is equivalent to omitting them here and then calling the reportEvent function.
* **parameters**: An array of details for the specified event name (Integer/String ,optional)

Sample usage 1 - customer ID and email address only:

    var userId = 'JohnDoe';
    var email = 'johndoe@gmail.com';
    optimoveSDK.API.registerUser(userId, email)

`
Sample usage 2 - including event:

    var userId = 'JohnDoe';
    var emailAddress = 'johndoe@gmail.com';
    var eventName = 'Registration';
    var parameters = {
          Newsletter_Signup : true,
          Landing_Page : 'some/landing/page.html'
    }
    optimoveSDK.API.registerUser(userId, email, eventName, parameters);

### ****Reporting Custom Events****
Optimove clients may use the Optimove Web SDK to track specific customer actions and other custom events to Optimove (beyond the OOTB events such as page visits and email addresses). This data is used for tracking visitor and customer behavior, targeting campaigns to specific visitor and/or customer segments and triggering realtime campaigns based on particular visitor and/or customer actions/events.
Each Optimove client has a tailored set of customer actions that may be reported via the SDK. As mentioned above, you will collaborate with the Optimove Integration Team to define the particular set of custom events that your website will be able to report (both for tracking and triggering realtime campaign execution purposes). This approach allows you to define any event and its associated parameters.
Once you and the Optimove Integration Team have together defined the custom events supported by your site, the Integration Team will implement your particular functions within your Optimove site, while you will be responsible for implementing the reporting of the individual events within your website using the appropriate function calls.
To see examples of Custom Events, please visit Defining the Set of Custom Tracking Events that You Will Report for more information.
Note: While you can always add/change the custom events and parameters at a later date (by speaking with the Optimove Integration Team), only the particular custom events that you and the Optimove Integration Team have already defined together will be supported by your Optimove site.

### **How to Report an Custom Event from Within a Webpage**
Your website reports a predefined event to Optimove by using JavaScript to call reportEvent in this format:

    optimoveSDK.API.reportEvent(<event_name>, <parameter JS object>);

For example, a gaming site’s Report Win event might be reported using code like this:

    function ReportWinEvent(ID, game, balance, winAmount) {
       var params = {};
       params['GameID'] = ID;
       params['Game'] = game;
       params['Balance'] = balance;
       params['Win_Amount'] = winAmount;
       optimoveSDK.API.reportEvent ('Win', params);
    }
    ReportWinEvent ('2134123', '777Slots', 450.50, 200.00);

### **How to Report an Custom Event using server-side programming**
At this time, events reported in this way will only be used by the Optimove realtime functionality. 
[Click here](https://github.com/optimoveproductintegration/Reporting-Server-Side-Custom-Events) to see how to report custom events using server side programming.

----------


# **Trigger**

### **Executing Webpage Pop-ups**
The Optimove Web SDK provides a website popup functionality, which can be used to show a marketing message to a website user when triggered by conditions defined by the marketer within client’s Optimove site. 

When triggered, the HTML template selected by the marketer when creating the campaign will be sent to end-customer/user and Optimove’s embedded code will display the popup. If you prefer, you can override this functionality in order to serve the popup yourself, using the reportEventCallback option (see below).

By default, Optimove will automatically handle the execution of displaying popups. However, you may customize some popup settings, or replace the code that displays the popup with your own code, if you prefer. To do this, you need to implement the setRealTimeOptions function once per page lifecycle (immediately after initiating the SDK), with the relevant options as described below.

    var options = {
        showDimmer : true,
        showWatermark : true,
        reportEventCallback : function(response){
          //insert here your own code to show the popup if necessary
        }
    }
    optimoveSDK.API.setRealTimeOptions(options);

Where:
* **showDimmer**: Dims the rest of the page around the popup box (type is Boolean; default is True)
* **showWatermark**: Shows the Optimove watermark under the popup (type is Boolean; default is True)
* **reportEventCallback**: Provides a own callback function that will be called if Optimove determines that a popup should be displayed. You use this option to override the Optimove popup in order to display your own, using your own code. In this event, the response argument will appear as: 

       {
          "IsSuccess": true,
          "Data": false  // when no realtime campaign was triggered
        }

   or

	    {
	      "IsSuccess": true,
	      "Data": <HTML template>  // when a campaign was triggered
	    }

### **Executing via Optimail**
Ability to execute campaigns using Optimove’s Optimail email service provider (ESP) add-on product. With Optimail you will be able to:
* Send HTML email campaigns
* Set personalized tags (first name, last name, and more)
* These Tags are retrieved from both your daily data transfer, as well as the SDK events you are tracking.
* Preview campaign email before sending
* Send realtime marketing campaigns based on your website SDK activity triggering rules

For more information on how to add Optimail to your account, please contact your CSM or your Optimove point of contact.

### **Executing via Optimove APIs**
You can also trigger Optimove realtime campaigns using Optimove’s APIs:
* Register listener to receive realtime campaign notifications, please refer to RegisterEventListener (where eventid = 11)
* To view your realtime API payload, please refer to [Optimove Realtime Execution Channels](https://docs.optimove.com/optimove-realtime-execution-channels/) (see Method 3: Realtime API) 
For more information on how to acquire an API key to use Optimove APIs, please request one from your CSM or your Optimove point of contact.


----------
## **Google Display Network Cookie Matching**
Optimove can be used to automate the targeting of Google AdWords campaigns to specific customers and/or website visitors. AdWords ads are displayed across the [Google Display Network](https://github.com/optimoveintegrationoptitrack/GDN), which includes Google search, Google Finance, Gmail, Blogger and YouTube. Learn more at [Optimove-Google Display Network Integration](https://github.com/optimoveintegrationoptitrack/GDN).
In order to use Optimove to automate AdWords campaigns, you need to link, or "match," Google Customer IDs with Optimove Customer IDs and/or Visitor IDs. This is very easy to do with the Optimove Web SDK: all you need to do is call the setUserId or registerUser functions described above.

**Note**: Cookie matching for website visitors (non-registered users/customers) is only available if you have implemented basic setup of the Web SDK.
