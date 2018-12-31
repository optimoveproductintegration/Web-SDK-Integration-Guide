Below you will find the Web SDK technical flows to help you technically understand the integration steps within the setup in order to assist you in your project/dev planning.

- [BASIC setup technical flow](#basic-flow) 
- [ADVANCED setup technical flow](#advanced-flow) 

<br/>

## <a id="basic-flow"></a>BASIC setup technical flow

<p align="center"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/raw/master/Web%20SDK%20Tech%20Flows/web-sdk-tech-flow-basic.jpg?raw=true"></p>


### SDK Configuration
> - Optimove Product Integration team creates the SDK token and web configuration (aka, webconfig) file
> - Optimove Product Integration team sends SDK details to client

<br/>

### Implementation
> - Client adds the following SDK details to their website or tag manager (e.g. GTM):
	> -- [SDK code snippet](https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Web-SDK-Code-Snippets/GTM-CustomHTML-Code-Snippet.html) – copy / paste into your website/tag manager
		> -- Includes: SDK initialization code
		> -- Includes: SDK basic functions ([setPageVisit()](https://github.com/optimove-tech/Web-SDK-Integration-Guide#track-visits), [setUserId()](https://github.com/optimove-tech/Web-SDK-Integration-Guide#link-visit-customer) and/or [registerUser()](https://github.com/optimove-tech/Web-SDK-Integration-Guide#record-user-email))
> - Client points the webconfig to the SDK staging environment `yourconfigname.1.0.x-stg`
> - Client provides Optimove Product Integration team with staging/testing environment web URL where the SDK was implemented in

<br/>

### Testing
> - Optimove Product Integration teams tests:
	> -- SDK was implemented correctly and in the right places
	> -- Tracking data events and parameters into Optimove tracking database (e.g. page visits, SDK ID, etc)
> - Should any of these tests fail, it will require the client to update the code accordingly
> - Optimove signs-off implementation and schedule deployment between Optimove and client

<br/>

### Deployment
> - Client points the SDK webconfig by changing the webconfig version from “yourconfigname.1.0.x-stg” to `yourconfigname.1.0.x`, by **removing** the `-stg` so that the code points to your Optimove production environment
> - Client publishes the SDK code / tag into production and notifies Optimove Product Integration team
> - Optimove Product Integration team will monitor for a few days and confirm the SDK data is flowing into production tracking database in order to start using the SDK in Optimove UI

<br/><br/>

## <a id="advanced-flow"></a>ADVANCED (custom events) setup technical flow

FLOW GOES HERE


### Use Case(s) Review
> - Prerequisite: Web SDK Basic Setup running in production
> - Optimove Product Integration team will set a kick-off call with the client's Marketing/CRM/Product team and present supported use cases
	> - see [eCommerce sample use cases](https://docs.optimove.com/track-and-trigger-use-cases/)
	> - Gaming sample uses cases will be added soon - please inquire with Product Integration team 
> - Client will require to review and confirm/approve use cases
> - After confirming use cases, the client will need to prioritize which use cases they want to get started with from 1 to x (where x is the last use case)
	>  - This will pave the integration flow for the next steps in this setup

### Event(s) Configuration
> - Optimove Product Integration team configures the new use case event(s) according to client's priority
> - Optimove Product Integration team creates a new web configuration (aka, webconfig) version
> - Optimove Product Integration team sends new webconfig version to client
> -- **Note**: Each new/modified use case(s), you will require to update the webconfig. We incrementally increase the version of the webconfig in order to support backward compatibility

### Implementation
> - Client adds the following SDK event(s) to their website or tag manager (e.g. GTM) using the following SDK functions:
> -- [reportEvent()](https://github.com/optimove-tech/Web-SDK-Integration-Guide#custom-events) and/or [registerUser()](https://github.com/optimove-tech/Web-SDK-Integration-Guide#record-user-email)
> -- see [eCommerce use case code snippets](https://github.com/optimove-tech/Web-SDK-Integration-Guide/tree/master/eComm-Use-Cases-Code-Snippets)
> - Client points the webconfig to the SDK staging environment `yourconfigname.1.0.x-stg`
> - Client provides Optimove Product Integration team with staging/testing environment web URL where the event(s) was implemented in

### Testing
> - Optimove Product Integration teams will test event(s) data is flowing into Optimove tracking database (e.g. items_in_cart, page_loaded, deposit_success, and more)
> - Should any of these tests fail, it will require the client to update the code accordingly
> - Optimove signs-off implementation and contact client to publish / deploy tag

<br/>

### Deployment
> - Client points the SDK webconfig by changing the webconfig version from “yourconfigname.1.0.x-stg” to `yourconfigname.1.0.x`, by **removing** the `-stg` so that the code points to your Optimove production environment
> Client publishes the SDK code / tag into production and notifies Optimove Product Integration team
> Optimove Product Integration team will confirm the event(s) data is flowing into production tracking database in order to start using the event(s) in Optimove UI to create relevant campaigns
