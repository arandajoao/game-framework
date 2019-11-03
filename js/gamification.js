(function(){
	this.Nivel = function(){
		this.nivel   = null;
		this.step    = null;
		this.xp      = null;
		this.max_xp  = 500;
		this.goal    = null;
		this.storage = window.localStorage;
		this.saves = ['nivel', 'step', 'xp', 'goal'];

		var defaults = {
			nivel: null,
			step: null,
			xp: null,
			field: null,
			onlevelup: function(el) {},
			handler: function(el) {},
		}

		if (arguments[0] && typeof arguments[0] === "object")
		{
			this.options = extendDefaults(defaults, arguments[0]);
		}
		else
		{
			this.options = defaults;
		}

		if(this.options.nivel == null)
		{
			var nivel = this.storage.getItem("nivel");

			if(nivel == null)
			{
				nivel = 1;
				
				this.storage.setItem("nivel", nivel);

			}
			this.options.nivel = nivel;
		}

		this.nivel = this.options.nivel;

		if(this.options.field != null)
		{
			var field = document.querySelector(this.options.field);

			if(!field) throw "Element not found.";

			this.field = field;
			
			this.field.innerHTML = this.options.nivel;
		}		

		if(this.options.step == null)
		{
			var step = this.storage.getItem("storage");

			if(step == null)
			{
				step = 10;

				this.storage.setItem("step", step);
			}

			this.options.step = step;
		}

		this.step = this.options.step;


		if(this.options.xp == null)
		{
			var xp = this.storage.getItem("xp");

			if(xp == null)
			{
				xp = 0;

				this.storage.setItem("xp", 0);
			}

			this.options.xp = xp;
		}

		this.xp = parseInt(this.options.xp);

		this.onlevelup = this.options.onlevelup;

		calculate_goal.call(this);

		save_attributes.call(this);

		this.setXp = function(value)
		{
			this.xp += parseInt(value);

			while(this.xp >= this.goal)
			{
				this.nivel++;

				var xp = this.xp-this.goal;

				this.xp = xp;

				if(this.field)
				{
					this.field.innerHTML = this.nivel;
				}

				calculate_goal.call(this);

				if(this.onlevelup)
				{
					this.onlevelup.call(this);
				}

			}

			save_attributes.call(this);
		}

		function save_attributes()
		{

			for (var i = 0; i < this.saves.length; i++) {
				this.storage.setItem(this.saves[i], this[this.saves[i]]);
			}
		}

		function calculate_goal(){
			var goal = 0;

			for (var i = 0; i < this.nivel; i++) {
				goal += this.step;
			}

			this.goal = parseInt(goal > this.max_xp ? this.max_xp : goal);
		}

		function extendDefaults(source, properties)
		{
			var property;

			for (property in properties)
			{
				if (properties.hasOwnProperty(property))
				{
					source[property] = properties[property];
				}
			}

			return source;
		}

		function get_stats() {
			console.log(this.nivel);
			console.log(this.step);
			console.log(this.xp);
		}
	}

	this.Notification = function(){
		this.options = null;
		this.element = null;

		var defaults = {
			title: null,
			text: null,
			icon: null,
			color: null,
			time: null,
			handler: function(el) {}
		}

		if (arguments[0] && typeof arguments[0] === "object")
		{
			this.options = extendDefaults(defaults, arguments[0]);
		}

		if(!this.options.title || !this.options.text)
		{
			throw "Title or text is not defined. Please, set this values before show message.";
		}

		if(!this.options.time) throw "Time not defined.";

		this.time = this.options.time;

		var notification = document.createElement("div");
			notification.className = "notification";

		var title = document.createElement("h3");
			title.innerHTML = this.options.title;

		if(this.options.icon)
		{
			var icon = document.createElement("i");
				icon.className = this.options.icon;
			
			notification.append(icon);
		}

		var text = document.createElement("p");
			text.innerHTML = this.options.text;

		var significance = document.createElement("div");
			significance.className = "significance";

		if(this.options.color)
		{
			significance.style.backgroundColor = this.options.color;
		}

		notification.append(title);
		notification.append(text);
		notification.append(significance);

		this.notification = notification;

		var init_notification = function(){
			this.element = null;

			this.element = this.notification;

			var handler = this.options.handler;

			if(handler)
			{
				handler(this);
			}	

			var notification_area = document.querySelector(".notification_area");

			notification_area.append(this.element);
		}

		function extendDefaults(source, properties)
		{
			var property;

			for (property in properties)
			{
				if (properties.hasOwnProperty(property))
				{
					source[property] = properties[property];
				}
			}

			return source;
		}


		this.show = function()
		{
			init_notification.call(this);
			var el = this.element;
				el.style.animationDuration =  this.time + "s";
				el.classList.add("active");
			

			setTimeout(function(){
				el.classList.remove("active");
				el.remove();
			}, this.time * 1000);

		}
	}

	this.Progressbar = function() {

		this.field = null;
		this.reference = null;
		this.inputs = null;
		this.input = null;


		this.onchange = function(){
			var options = this.options;
			var handler = options.handler;
			var input = this.input;
			var field = this.field;
			var reference = this.reference;

			if(input)
			{
				input.addEventListener("change", function(e){
					if(handler)
					{
						handler(this);
					}	

					calculate_percentage(reference, field, options);

				}, true);				
			}
		}

		var defaults = {
			field: '',
			reference: '',
			oncomplete: function(el){},
			handler: function(el) {},

		}

		if (arguments[0] && typeof arguments[0] === "object")
		{
			this.options = extendDefaults(defaults, arguments[0]);
		}

		if(this.options.oncomplete != undefined)
		{
			if(typeof this.options.oncomplete !== "function") throw "Option oncomplete is not a function.";

			this.oncomplete = this.options.oncomplete;
		}

		if(!this.options)
		{
			throw "No element referenced.";
		}

		this.field = document.getElementById(this.options.field);

		if(!this.field) throw "Element not found.";

		this.reference = document.querySelector(this.options.reference);

		if(!this.reference) throw "Reference not found.";

		this.inputs = this.reference.querySelectorAll("input[type='checkbox']");

		if(this.inputs)
		{
			for (var i = 0; i < this.inputs.length; i++) {
				this.input = this.inputs[i];

				this.onchange.call(this);
			}
		}

		calculate_percentage(this.reference, this.field, this.options);


		function extendDefaults(source, properties)
		{
			var property;

			for (property in properties)
			{
				if (properties.hasOwnProperty(property))
				{
					source[property] = properties[property];
				}
			}

			return source;
		}

		function setProgress(percentage)
		{
			var field = this.field;

			if(!field) throw "No progress bar found.";

			field.style.width = percentage + "%";

			field.innerHTML = percentage + "%";

			if(percentage == 100)
			{
				field.parentNode.className += " complete"; 
			}
			else
			{
				field.parentNode.classList.remove("complete");
			}
		}
		
		function calculate_percentage(list, progress, options)
		{
			var field = progress.firstElementChild;

			var oncomplete = options.oncomplete;
			
			var inputs = list.querySelectorAll("input[type=checkbox]");
			
			var count = 0;

			for (var i = 0; i < inputs.length; i++) {

				if(inputs[i].checked) count++;
			}
	
			var percentage = Math.round((count/inputs.length) * 100);

			field.style.width = percentage + "%";

			field.innerHTML = percentage + "%";

			if(percentage == 100)
			{
				field.parentNode.className += " complete"; 

				if(oncomplete)
				{
					oncomplete.call(this);
				}
				

			}
			else
			{
				field.parentNode.classList.remove("complete");
			}
		}		
	}

	this.Badge = function() {
		
		this.reference = null;
		this.text = null;
		
		var defaults = {
			reference: '',
			text: '',
		}

		this.build = function()
		{
			if(this.reference) 	this.reference.innerHTML = this.text;

		}	

		if (arguments[0] && typeof arguments[0] === "object")
		{
			this.options = extendDefaults(defaults, arguments[0]);
		}

		this.reference = document.querySelector(this.options.reference);

		if(!this.reference) throw "Reference not found.";

		this.text = this.options.text;

		if(!this.text) throw "Text not found.";
		
		this.build.call(this);

		this.setText = function(newText){
			this.text = newText;

			this.build.call(this);
		}

		function extendDefaults(source, properties)
		{
			var property;

			for (property in properties)
			{
				if (properties.hasOwnProperty(property))
				{
					source[property] = properties[property];
				}
			}

			return source;
		}
	}


	this.Medal = function() {
		this.color = null;
		this.icon = null;
		this.number = null;
		this.reference = null;
		this.content = '';

		var defaults = {
			reference: null,
			color: null,
			icon: null,
			number: null,
		}

		if (arguments[0] && typeof arguments[0] === "object")
		{
			this.options = extendDefaults(defaults, arguments[0]);
		}

		if(!this.options.reference) throw "No reference found";

		this.reference = document.querySelector(this.options.reference);

		if(!this.reference) throw "No reference found";


		if(this.options.number)
		{
			this.number = this.options.number;

			this.content = document.createElement('span');

			this.content.innerHTML = this.options.number;
		}

		if(this.options.icon)
		{
			this.icon = this.options.icon;

			this.content = document.createElement('i');

			this.content.className = this.options.icon;
		}

		if(this.options.color)
		{
			var color = LightenDarkenColor(this.options.color, -50);

			this.reference.style.backgroundColor = this.options.color;

			this.content.style.color = color;

		}

		this.reference.append(this.content);


		function extendDefaults(source, properties)
		{
			var property;

			for (property in properties)
			{
				if (properties.hasOwnProperty(property))
				{
					source[property] = properties[property];
				}
			}

			return source;
		}

		function LightenDarkenColor(col, amt)
		{
		  
		    var usePound = false;
		  
		    if (col[0] == "#") {
		        col = col.slice(1);
		        usePound = true;
		    }
		 
		    var num = parseInt(col,16);
		 
		    var r = (num >> 16) + amt;
		 
		    if (r > 255) r = 255;
		    else if  (r < 0) r = 0;
		 
		    var b = ((num >> 8) & 0x00FF) + amt;
		 
		    if (b > 255) b = 255;
		    else if  (b < 0) b = 0;
		 
		    var g = (num & 0x0000FF) + amt;
		 
		    if (g > 255) g = 255;
		    else if (g < 0) g = 0;
		 
		    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
		}
	}

	function initGamification()
	{
		document.querySelectorAll(".game-progress").forEach(function(progressbar){
			var percentage = progressbar.dataset.progress;

			var span = document.createElement("span");
			
			progressbar.append(span);
		});

		var medalcount = 0;

		document.querySelectorAll(".game-medal").forEach(function(medal){
			var data = medal.dataset;
			var number = null;
			var icon = null;
			var color = null;

			if(!medal.id) medal.id = "medal-"+medalcount;
			
			medalcount++;

			new Medal({
				number: data.number,
				icon: data.icon,
				color: data.color,
				reference: "#"+medal.id,
			});
		});
		

		var notification_area = document.createElement("div");

		notification_area.className = "notification_area";

		document.body.append(notification_area);
	}


	initGamification();
}());
