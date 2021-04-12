
| Function Name | Description | SDK API Request/Response | 
|--|--|--|
| getVersion |  SDK Version in use| `optimoveSDK.API.getVersion;` // "2.0.2"|
|getVisitorId|Visitor ID assigned to user|`optimoveSDK.API.getVisitorId();` // "286ce215f90842d2"|
|getUserId|SDK ID assigned to user|`optimoveSDK.API.getUserId();` // "1234567"|
|setUserId: (userId, callback)|Stitching customer ID|`optimoveSDK.API.setUserId('1234567',function() {optimoveSDK.API.setPageVisit('someURL.com','some page title','some category')});`|
|setUserEmail: (email, callback)|Stitching user's email	|`optimoveSDK.API.setUserEmail('johndoe@test.com',function() {optimoveSDK.API.setPageVisit('someURL.com','some page title','some category')});`|
|registerUser: (userId, email, eventName, parameters, callback)|Stitching customer ID and customer email|`optimoveSDK.API.registerUser('123456','johndoe@test.com','sign-up',{'optin':true}, function() {optimoveSDK.API.setPageVisit('someURL.com','some page title','some category')});`|
|setPageVisit: (customURLIn, pageTitleIn, categoryIn)|Defining page visit event	|`optimoveSDK.API.setPageVisit('www.test.com','test','category test');`|
|openWebTestTool|Open web sdk test tool|`optimoveSDK.API.openWebTestTool();`|
|closeWebTestTool|Close web sdk test tool|`optimoveSDK.API.closeWebTestTool();`|
