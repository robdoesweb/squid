/*=======================================================================================/
 @file squid.js
=========================================================================================/   
    @desc animated canvas framework for quick new projects and tests
    @project squid
    @auth rob@robdoesweb.com
 
    loc: /C/Users/Rob/Dropbox/templates/pages/canvas/js/squid.js
========================================================================================*/


function Squid(canvas, w, h){

	this.canvas = canvas || null;

	this.ctx = {};

	this.resources = [];

	this.width = w || window.innerWidth;

	this.height = h || window.innerHeight;

	this.state = 'uninitialized';

	this.layers = {base: new SQUID.Layer()};

	this.af = null;

	this.dt = 0;

	this.background = '#FFFFFF';

	this.elapsedTime = 0;

	this.now = Date.now();

	this.then = this.now;

	console.log("From constructor:");
	console.log(this);

}

Squid.prototype = {

	update: function(dt) {
		this.elapsedTime += this.dt;
		for (var layer in this.layers) {
			if (this.layers.hasOwnProperty(layer)) {
				this.layers[layer].update(dt);
			}
		}
	},

	render: function(ctx) {
		ctx.fillStyle = this.background;
		ctx.fillRect(0, 0, this.width, this.height);
		for (var layer in this.layers) {
			if (this.layers.hasOwnProperty(layer)) {
				this.layers[layer].render(ctx);
			}
		}
	},

	newLayer: function(name) {
		this.layers[name] = new SQUID.Layer();
	},

	setSize: function(w, h) {
		this.width = w;
		this.height = h;
	},

	setCanvas: function(newCanvas) {
		this.canvas = newCanvas;
	},

	start: function() {
		this.state = 'initializing';
		
		if (!this.canvas) {
			this.canvas = document.createElement('canvas');
			document.appendChild(this.canvas);	
		}

		this.canvas.width = this.width;
		this.canvas.height = this.height;

		if (this.canvas.getContext) {
			this.ctx = this.canvas.getContext('2d');
		} else {
			this.state = 'could not get canvas context';
		}

		if (this.resources.length > 0) {
			this.state = 'loading resources';

			Resources.load(this.resources);
			var _self = this;
			Resources.onReady(function(){
				this.state = 'playing';
				_self.step();
			});
		} else {
			this.step();
		}
	},

	step: function() {
		var sqd = this;
		this.now = Date.now();
		this.dt = (this.now - this.then) / 1000;
		this.update(this.dt);
		this.render(this.ctx);
		this.then = this.now;
		window.requestAnimationFrame(this.step.bind(this));
	}

};



