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

### Components

the components that are part of these framework are listed below:

### Progressbar

The progressbar component is conditioned about a group of checkboxes and contain a javascript's function option to deal with this component when it's finished

There's a way to customize it, using the LESS file about this component and the main config LESS file. Don't forget do recompile the CSS in case of customization.

The options about this component are:

	* [field (required):] The id of progressbar element in the front-end;
	* [reference (required):] The checkbox group (probably a div that contains the inputs);
	* [oncomplete:] the callback function triggered when the progressbar reachs 100%

```
var progressbarTads = new Progressbar({
	field: "progress",
	reference: ".checkbox-div",
	oncomplete: function(){
		console.log("Progressbar completed!")
	}
});
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
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
