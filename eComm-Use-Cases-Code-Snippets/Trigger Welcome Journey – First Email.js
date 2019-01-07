/**
 * *********************************README**********************************
 * Description: This will be triggered/fired on signup form submission
 * There are various ways to implement this, such as via Tag Manager or directly into the website <head>
    * For both options, make sure to add the <script> tag
 */

/**********************************newsletter_registration************************ */

//Trigger: When a website user fills out the signup/newsletter form in a webpage pop-up or any form in your website, clicks on the "submit button", send ALL the form data to Optimove.
//Note: The below was created under the assumption that you already have an html input fields in your website.
//Note: The below only represents the values fetched from the html input elements in your website


let $first_name = document.getElementById("first_name").value;
let $last_name = document.getElementById("last_name").value;
let $email = document.getElementById("email").value;
let $SDK_ID = email;
let $opt_in = document.getElementById("opt_in").checked;

optimoveSDK.API.registerUser(SDK_ID, email, "newsletter_registration", {
      first_name: first_name,
      last_name: last_name,
      email: email,
      opt_in: opt_in
   });
               
