<script type="text/javascript">
function loadOptimoveSDK(resourceURL, callback) {
  if (resourceURL != null) {
    var d = document;
    var g = d.createElement('script');
    var s = d.getElementsByTagName('script')[0];

    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = resourceURL;
    g.onload = callback;

    s.parentNode.insertBefore(g, s);
  }
}

function onOptimoveSDKInitialized(status) {
  console.log('testing my call back status = ' + status);

  var public_customer_ID = '{{cdl - Client ID}}';

  if (public_customer_ID != 'undefined') {
    optimoveSDK.API.setUserId(public_customer_ID);
  }

  optimoveSDK.API.setPageVisit('{{Page URL}}', '{{js - document title}}', '');
}

function onLoadOptimoveSDK() {
  console.log('onSDKLoad is called');

  var token = 'your-token-code'; //get from Product Integration
  var configVersion = '1.0.0-stg'; //get from Product Integration

  optimoveSDK.initialize(token, configVersion, onOptimoveSDKInitialized, 'info');
}

loadOptimoveSDK('https://sdk-cdn.optimove.net/websdk/sdk-v1.0.4.js', onLoadOptimoveSDK); 
</script>