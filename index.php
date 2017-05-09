<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

<!--
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">
	<link href="./css/slider.css" rel="stylesheet">

<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
</script>

-->

	<title>Vehicle Trade Consultant</title>

</head>

  <body role="document">

    <!-- container -->
	
    <div id="mainbox" class="container" role="main">
		<div id="LDR" class="content">
			Application is loading...
		</div>
	</div>

	<!-- /container -->

    <!-- core.js -->
    <script src="./js/core.js"></script>

	<script>  
	
	// ldr config
	// LDR.config.lng = "de";
	// LDR.config.style = "audi";
	// LDR.config.template = "default1";
	
	// console.log("starting LDR now");
	if(typeof(LDR)=="object")
		LDR.init("#LDR");  
	else
		document.onload = function () { LDR.init("#LDR"); }
	</script>
	
</body>
</html>