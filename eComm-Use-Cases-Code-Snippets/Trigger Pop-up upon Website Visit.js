/**
 * *********************************README**********************************
 * Description: This will be triggered/fired on every page visit
 * There are various ways to implement this, such as via Tag Manager or directly into the website <head>
    * For both options, make sure to add the <script> tag
 */

/************************************************************************ */

 /**
 * Option 1: Tag Manager (e.g Google Tag Manager)
    * GTM Tag/Event Name: page_loaded
    * GTM Trigger Type: Custom Event -> Custom HTML
    * GTM Trigger: Custom Event
    * GTM Built-In Variables  required: event_name
    * GTM User-Defined Variables required: page_url, page_title, page_category
 */
self.optimoveSDK.API.reportEvent('page_loaded', {"page_url": {{page_url}}, "page_title": {{page_title}}, "page_category": {{page_category}}});

/************************************************************************ */

 /**
 * Option 2: Directly into the website <head>
    * Event Name: page_loaded
 */
optimoveSDK.API.reportEvent('page_loaded', {"page_url": ""+document.location.href+"", "page_title": ""+document.title+"", "page_category": "depends on your wesite structure"});

/************************************************************************ */
