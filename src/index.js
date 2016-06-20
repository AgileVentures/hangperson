var React = require("react");
var ReactDOM = require('react-dom');
import Slider from './slider.jsx';
var $ = require("jquery");

$().ready(function(){
	if($('#app')){
		ReactDOM.render(
  			React.createElement(Slider, null),
   			document.getElementById('app')
   			);
	}
});
