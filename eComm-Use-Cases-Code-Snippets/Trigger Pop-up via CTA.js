/**
 * *********************************README**********************************
 * Description: This will be triggered/fired on a Call To Action (CTA)
 * There are various ways to implement this, such as via Tag Manager or directly into the website <head>
    * For both options, make sure to add the <script> tag
 */

 /************************************************************************ */

 /**
 * Option 1: Tag Manager (e.g Google Tag Manager)
    * GTM Tag/Event Name: click_to_open_newsletter_popup
    * GTM Trigger Type: Custom Event -> Custom HTML
    * GTM Trigger: Custom Event
    * GTM Built-In Variables  required: event_name
 */
self.optimoveSDK.API.reportEvent('click_to_open_newsletter_popup', {});

/************************************************************************ */

 /**
 * Option 2: Directly into the website <head>
    * Event Name: page_loaded
 */
optimoveSDK.API.reportEvent('click_to_open_newsletter_popup', {});

/************************************************************************ */
