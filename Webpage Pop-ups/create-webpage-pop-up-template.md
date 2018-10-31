### How to create a Webpage Pop-up template:

1.	In your Optimove UI, go to the "Manage Templates" section
 <p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Webpage%20Pop-ups/images/m1.png?raw=true"></p> 
3.	Under “CHANNEL” choose “Webpage Pop-up”
 <p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Webpage%20Pop-ups/images/f1.png?raw=true"></p> 

4.	Create a folder by clicking on “Add Folder”
5.	Within your chosen folder, add a “New Template”
<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Webpage%20Pop-ups/images/f2.png?raw=true"><br/>The above is an example only</p>
 
6.	By default, the template opens in WYSIWYG view. If you want to add your own HTML/CSS/JavaScript code into the template, you will need to do the following:<br/>
	a.	Switch to “source” view instead.
	<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Webpage%20Pop-ups/images/f3.png?raw=true"><br/>The above is an example only</p>
 
	b.	Since our webpage pop-up comes with default HTML code, remove everything within the <bod></body> tags and replace it with your code instead.
	```html
	<!DOCTYPE html>
	<html>
	<head>
			<title></title>
		</head>
		<body style="margin:0 auto !important;width:600px;">
			Place your code in here
		</body>
	</html>
	```

	c.	Validate your code before saving by clicking on the “Validate” followed by “Save”:
	<p align="left"><img src="https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Webpage%20Pop-ups/images/f4.png?raw=true"><br/>The above is an example only</p>
 
	d.	In order to preview this template, you can click on “Preview”.
	>**Notes:**
	>  - Preview will only work if the HTML, CSS and JavaScript code is located within the template itself 
	>  - When using your front-end website’s CSS located on your front-end website itself, you will not be able to use the “Preview”, as your CSS styles are located on your front-end website and not within the Optimove site. In this case, in order to view your template, you will need to [execute a realtime Webpage Pop-up campaign](https://docs.optimove.com/track-and-trigger/#Webpage). 
	>  	


### Additional Reads

 - [How to create a realtime trigger](https://github.com/optimove-tech/Web-SDK-Integration-Guide/blob/master/Webpage%20Pop-ups/create-trigger-in-Optimove-site.md)
 - [How to execute a Webpage Pop-up realtime campaign](https://docs.optimove.com/track-and-trigger/#Webpage)
 - [Enabling Webpage Pop-up](https://github.com/optimove-tech/Web-SDK-Integration-Guide/tree/master/Webpage%20Pop-ups)

 
