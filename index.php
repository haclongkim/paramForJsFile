<!DOCTYPE html>
<html>
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
            <script src="paser.params.js" type="text/javascript">
            </script>
            <script attr-param1="<?=$SERVER['REQUEST_TIME']?>" src="test1.js?param1=param-test1">
            </script>
            <script attr-param2="attr-test2" src="test2.js?param2=<?=$SERVER['REQUEST_TIME']?>">
            </script>
        </meta>
    </head>
    <body>
    	<h2>Import JS test</h2>
		<p>&lt;script src="paser.params.js"&gt;&lt;/script&gt;</p>
		<p>&lt;script attr-param1="<?=$SERVER['REQUEST_TIME']?>" src="test1.js?param1=param-test1"&gt;&lt;/script&gt;</p>
		<p>&lt;script attr-param2="attr-test2" src="test2.js?param2=<?=$SERVER['REQUEST_TIME']?>"&gt;&lt;/script&gt;</p>
    </body>
</html>