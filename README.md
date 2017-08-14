# Passing parameters and Attributes to JavaScript files

You can passs params from php (or something) to external javascript file


Example: 
```php
<script attr-param1="<?=$SERVER['REQUEST_TIME']?>" src="test1.js?param1=param-test1"></script>
```
Or
```html
<script attr-param1="attr-test1" src="test1.js?param1=param-test1"></script>
```
### Get all attributes in tag script  
PaserCurrentFileJs.getAllAttributes()
```js
return: {"attr-param1":"attr-test1","src":"test1.js?param1=param-test1"}
```
### Get all parameters in tag script  
PaserCurrentFileJs.getAllParams()
```js
return: {"param1":"param-test1"}
```
### Get value attribute keyName in tag script  
PaserCurrentFileJs.getValueAttribute(keyName)
```js
PaserCurrentFileJs.getValueAttribute("attr-param1")
return: "attr-test1"
```
### Get all attributes in tag script  
PaserCurrentFileJs.getValueParam(keyName)
```js
PaserCurrentFileJs.getValueAttribute("param1")
return: "param-test1"
```


