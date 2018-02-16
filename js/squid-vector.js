/*=======================================================================================/
 @file squid-vector.js
=========================================================================================/   
    @desc Vector class for squid framework
    @project squid
    @auth rob@robdoesweb.com
 
    loc: /C/Users/Rob/Dropbox/templates/pages/canvas/js/squid-vector.js
========================================================================================*/

SQUID.Vector = function(x, y) {
	this.x = x;
	this.y = y;
}

SQUID.Vector.prototype = {
	add: function(v) {
		if (v instanceof SQUID.Vector) {
			this.x += v.x;
			this.y += v.y;
		} else {
			this.x += v;
			this.y += v;
		}
	},

	sub: function(v) {
		if (v instanceof SQUID.Vector) {
			this.x -= v.x;
			this.y -= v.y;
		} else {
			this.x -= v;
			this.y -= v;
		}
	},

	mult: function(v) {
		if (v instanceof SQUID.Vector) {
			this.x *= v.x;
			this.y *= v.y;
		} else {
			this.x *= v;
			this.y *= v;
		}
	},

	div: function(v) {
		if (v instanceof SQUID.Vector) {
			this.x /= v.x;
			this.y /= v.y;
		} else {
			this.x /= v;
			this.y /= v;
		}
	},

	magnitude: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},

	normalize: function() {
		if (this.magnitude() > 0) {
			this.div(this.magnitude());
		}
	}
}