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
	* title;
	* description;
	* color: means a significance about this notification;
	* time (in seconds): the time of this notification will be displayed;
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

	*icon: Fontawesome icon class;
	*number: If there're no icon referenced, it's possible to set a number (but if icon is setted, the icon will have priority)
	*reference: The element referenced (just if you are declaring it with JS);
	*color: Hex color (it will give icon a 40% darken color). There are three colors pre-existed in this component (gold, silver and bronze) and if you want this colors, just set those names in class attribute;

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


### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
