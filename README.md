# Gamification Framework

This framework have provides the main visual components about the Gamification Technique

## Getting Started

This is a simple framework, just reference it in your front end page to use this components. It's necessary to reference the CSS file and JS min file.

### Prerequisites

There is no other frameworks viculated to it (just the Fontawesome framework but there's already imported in the CSS main file.). So, to use it, just import the CSS and JS, like:

```
<link rel="stylesheet" href="gamification-framework/css/style.css">

<script src="gamification-framework/js/gamification.min.js"></script>

```

## Components

the components that are part of these framework are listed below:

### Progressbar

The progressbar component is conditioned about a group of checkboxes and contain a javascript's function option to deal with this component when it's finished

There's a way to customize it, using the LESS file about this component and the main config LESS file. Don't forget do recompile the CSS in case of customization.

The options about this component are:

	* field (required): The id of progressbar element in the front-end;
	* reference (required): The checkbox group (probably a div that contains the inputs);
	* oncomplete: the callback function triggered when the progressbar reachs 100%

```
var progressbarTads = new Progressbar({
	field: "progress",
	reference: ".checkbox-div",
	oncomplete: function(){
		console.log("Progressbar completed!")
	}
});
```

### Notifications

The notification component is just renderized when the show function is called. When the gamification framework is used, it create a notification-area div, responsible to place notifications when they're showed. To use this component, is necessary to configure this properties:

	* icon: fontawesome class icon;
	* title (required);
	* description (required);
	* color: means a significance about this notification;
	* time (in seconds) (required): the time of this notification will be displayed;
	* handler: a function triggered when the notification are showed.


```
var notification = new Notification({
	title: "Lorem ipsum dolor!",
	text: "Your notification's description goes here",
	icon: "fa fa-check",
	color: "#ff0000",
	time: "8",
	handler: function()
	{
		alert("Notification showed!");
	}
});
```
### Medals

The medals component renderizes a customizable medal in your front-end. To make this medal, is necessary that your element have a class "game-medal", and gets the attributes:

	* icon: Fontawesome icon class;
	* number: If there're no icon referenced, it's possible to set a number (but if icon is setted, the icon will have priority)
	* reference (required): The element referenced (just if you are declaring it with JS);
	* color: Hex color (it will give icon a 40% darken color). There are three colors pre-existed in this component (gold, silver and bronze) and if you want this colors, just set those names in class attribute;

Its possible to make medals in three sizes, using the small, large with the game-medal class, or just game-medal class alone to make it regular.

There are two ways to build this component: via Javascript or just html (but is necessary the JS file). In HTML:

```
<div class="game-medal" data-icon="fa fa-star" data-color="#ffd700"></div>	

```

In Javascript:
```
var medal = new Medal({
	icon: "fa fa-trophy",
	reference: "#medal-example",
	color: "#ffd700",
});
```

### Badge

Badges are the simplest component of this framework, it's just used to make a title of users (with some different background color). It's possible to make a badge just putting the class "game-badge" to a element. In spite of the simplicity, it's possible to instance a Javacript object to itm just to make a simple way to change the badge text if its necessary.

```
var badge = new Badge({
	reference (required): "#game-badge",
	text (required): "Example"
});

badge.setText("Example 2");
```

### Level

The level component is a logical way to determinate the tangible goal to the users, to doing it is necessary determinate a step that will be multiplicated to make the goal points to the next level. The level attributes are be stored in the local storage of the browser and can be getted easily.
To build this component, is necessary to determinate the following attributes:
	
	* nivel: The current level of the user;
	* step: The multiply base to calculate the goal;
	* xp: The current points of the user in this level;
	* field: The referenced element to show current level;

To make the level advances, it's necessary call the function "setXp", passing the points gained by the user. There's a function called "onlevelup", that can be customized to make some action when the user reaches a goal.

```
var level = new Nivel({
	nivel: 1,
	step: 10,
	xp: 10,
	field: "#level-example",
	onlevelup: function(){
		alert("Level up! Your current level is: " + this.nivel);
	}
});
```

## Customizing

It's possible to customize any of these components. There're a config.less file, with all the fonts and colors available to set. If customize is necessary, you need to recompile the style.less file to apply the new settings to the application.

## Built With

* [LESS](http://lesscss.org/) - The pre-compiler CSS framework
* [FontAwesome](https://fontawesome.com/) - Icons management
* [Prepros](https://prepros.io/) - Less cross-platform compiler
* Javascript - Functionality Programming Language


## Author

* **João Aranda** - Brazillian technologist programmer, focused in WEB development with JS Frameworks and PHP. 
