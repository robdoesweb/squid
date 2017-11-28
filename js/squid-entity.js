/*=======================================================================================/
 @file squid-entity.js
=========================================================================================/   
    @desc SQUID.Entity class for squid canvas framework
    @project squid
    @auth rob@robdoesweb.com
 
    loc: /C/Users/Rob/Dropbox/templates/pages/canvas/js/squid-entity.js
========================================================================================*/

SQUID.Entity = function(x, y, w, h, imgURL){
	this.x = x || 0;
	this.y = y || 0;
	this.w = w || 0;
	this.h = h || 0;
	this.imgURL = imgURL;
	this.rot = 0;
	this.scale = 1;
	this.animation = null;
};

SQUID.Entity.prototype._update = function(dt) { 
	if (this.hasOwnProperty("update") && typeof this.update === "function") {
		this.update(dt);
	}
	if (this.animation) {
		this.animation.update(dt);
	}
};

SQUID.Entity.prototype._render = function(ctx) {
	ctx.save();
	ctx.translate(this.x, this.y);
	ctx.rotate(this.rot);
	if (this.animation) {
		this.animation.render(ctx);
	}
	else if (this.imgURL) {
		ctx.drawImage(Resources.get(this.imgURL), 0, 0, this.w * this.scale, this.h * this.scale);
	} else if (this.hasOwnProperty("render") && typeof this.render === "function") {
		this.render(ctx);
	}
	ctx.restore();
};