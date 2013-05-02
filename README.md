textTyper
=========

TextTyper is a jQuery plugin to animate you text like typewriter. TextTyper is use to attract the clients to show the points you want. You can use TextTyper in any element on Html and it will work easily with you own css. TextTyper don't need any extra css. TextTyper is also work with the child elements. TextTyper is tested on FF, Chrome, IE7 - IE10, Safari and Opera.

Tested with jQuery versions 1.4+

Documentation and Demos are here: http://labs.pathikgandhi.info/textTyper/

## What need

1. You need jQuery 1.4+ 
2. You need textTyper plugin file textTyper.js or textTyper-min.js

## Example
### Simple Block
```html
<div class="simpleDiv">TextTyper is a jQuery plugin to animate you text like typewriter.</div>
```
```javascript
$('div.simpleDiv').textTyper();
```
The above code will animate the text which is in simpleDiv(div) tag.

### Simple Block with child Element
```html
<div class="simpleDiv">
	<h2>Simple Block Text With Child Elements</h2>
	<div>TextTyper is a jQuery plugin to animate you text like typewriter.</div>
</div>
```
```javascript
$('div.simpleDiv').textTyper({speed:20});
```
The above code will animate the text of (h2) tag and then (div) tag fastly.

There is more options in textTyper plugin.
## Options
```
$(selector).textTyper({{
	typingClass : 'typing', //Additional Class when the typing animation is running
	beforeAnimation : function(){}, //Callback before the animation starts
	afterAnimation : function(){}, //Callback after the animation ends
	speed : 70, //Speed of typing text
	nextLineDelay : 400, //Wait for some time after one line is typed.
	startsFrom : 0, //Start form the X characters
	cursorHtml : '<span class="typing">|</span>' //Html of cursor
}
```

## History

### 1.0.0
* Initial release.
