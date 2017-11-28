/*=======================================================================================/
 @file squid-layer.js
=========================================================================================/   
    @desc entity layer manager for squid canvas framework
    @project squid
    @auth rob@robdoesweb.com
 
    loc: /C/Users/Rob/Dropbox/templates/pages/canvas/js/squid-layer.js
========================================================================================*/

SQUID.Layer = function(){
	this.entities = [];
	this.active = true;
};

SQUID.Layer.prototype.update = function(dt) {
	if (this.active) {
		this.entities.forEach(function(ent){
			ent._update(dt);
		});
	}
};

SQUID.Layer.prototype.render = function(ctx) {
	if (this.active) {
		this.entities.forEach(function(ent){
			ent._render(ctx);
		});
	}
};

SQUID.Layer.prototype.add = function(ent) {
	this.entities.push(ent);
};

SQUID.Layer.prototype.test = function() {
	console.log(this);
};

SQUID.Layer.prototype.clear = function() {
	this.entities.splice(0, this.entities.length);
};

SQUID.Layer.prototype.remove = function(index, length) {
	if (length) {
		this.entities.splice(index, length);
	} else {
		this.entities.splice(index, 1);
	}
};