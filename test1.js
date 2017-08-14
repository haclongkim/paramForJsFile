var content_output1 = '<h2> Output In File JS test1 </h2>'
 			+ '<p>getAllParams: ' + JSON.stringify(PaserCurrentFileJs.getAllParams())
 			+ '<p>getAllAttributes: ' + JSON.stringify(PaserCurrentFileJs.getAllAttributes())
 			+ '<p>getValueParam param1: ' + JSON.stringify(PaserCurrentFileJs.getValueParam('param1'))
 			+ '<p>getValueParam param2: ' + JSON.stringify(PaserCurrentFileJs.getValueParam('param2'))
 			+ '<p>getValueAttribute attr-param1: ' + JSON.stringify(PaserCurrentFileJs.getValueAttribute('attr-param1'))
 			+ '<p>getValueAttribute attr-param2: ' + JSON.stringify(PaserCurrentFileJs.getValueAttribute('attr-param2'))
 			+ '<p>-----------------------------------------------------------------------------';
document.write(content_output1);
