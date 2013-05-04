TextTyper
=========

TextTyper is a jQuery plugin to animate your text just like typewriter. It is used to provide automatic flow to your text-content very smoothly . This powerful plugin can work any HTML tags and you can even apply your own css to make  animation more beautiful.It will  also work with  child elements. This plugin is fully tested on FF, Chrome, IE7 - IE10, Safari and Opera.

Tested with jQuery versions 1.4+

Documentation and Demos are here: http://labs.pathikgandhi.info/jquery/texttyper

## What need and Troubleshooting

1. You need jQuery 1.4+ 
2. You need textTyper plugin file [textTyper.js](https://github.com/gr8pathik/jquery-texttyper/blob/master/js/textTyper.js) or [textTyper-min.js](https://github.com/gr8pathik/jquery-texttyper/blob/master/js/textTyper-min.js)
3. If your html have ```HTML5 tags``` and if its not working on ```IE``` then make sure you have added ```html5shiv``` library.

```html
<!-- Pulled from http://code.google.com/p/html5shiv/ -->

<!--[if lt IE 9]>
<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

## Example
### Simple block
```html
<div class="simpleDiv">TextTyper is a jQuery plugin to animate you text like typewriter.</div>
```
```javascript
$('div.simpleDiv').textTyper();
```
The above code will animate the text which is in simpleDiv```<div>``` tag.

### Simple block with child element
```html
<div class="simpleDiv">
	<h2>Simple Block Text With Child Elements</h2>
	<div>TextTyper is a jQuery plugin to animate you text like typewriter.</div>
</div>
```
```javascript
$('div.simpleDiv').textTyper({speed:20});
```
The above code will animate the text of ```<h2>``` tag and then ```<div>``` tag fastly.

### Simple block with child element animate two times
```html
<div class="simpleDiv">
	<h2>Simple Block Text Animate Two Times</h2>
	<div>TextTyper is a jQuery plugin to animate you text like typewriter.</div>
</div>
```
```javascript
$('div.simpleDiv').textTyper({repeatAnimation:true,repeatTimes:2});
```
The above code will animate the text Two Times.

There is more options in TextTyper plugin.
## Options
```javascript
$(selector).textTyper({
	typingClass : 'typing', //Additional Class when animation is running
	beforeAnimation : function(){}, //Callback before the animation starts
	afterAnimation : function(){}, //Callback after the animation ends
	speed : 70, //Speed of typing text
	nextLineDelay : 400, //Wait for some time after one line is typed.
	startsFrom : 0, //Starting point of animation (Number of Characters)
	repeatAnimation : false, //Repeat the animation
	repeatDelay : 4000, //Delay between Repeat animation
	repeatTimes : 1, //How much time you want to repeat the animation (0 means infinite)
	cursorHtml : '<span class="typing">|</span>' //Html of cursor
})
```

## History

### 1.1.0

#### New Features
* Added `repeatAnimation` option for repeat the animation.
* Added `repeatDelay` option for delaying time between Repeat animation
* Added `repeatTimes` option for how much time you want to repeat the animation(0 means infinite)

#### Bug Fixes
* Hide the cursor after animation is completed each time
* Repeat Issue
* IE issue

### 1.0.0
* Initial release.

## License
The textTyper component is released under the open source MIT.

## Author Info
* Name : [Pathik Gandhi](http://pathikgandhi.info) (http://pathikgandhi.info)
* Twitter : [gr8pathik](http://twitter.com/gr8pathik) (http://twitter.com/gr8pathik)
* Github : [gr8pathik](http://github.com/gr8pathik) (http://github.com/gr8pathik)