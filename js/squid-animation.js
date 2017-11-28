/*=======================================================================================/
 @file squid-animation.js
=========================================================================================/   
    @desc Basic animation class, stores info for animated sprites
    @project SQUID
    @auth rob@robdoesweb.com
 
    loc: /C/Users/Rob/Dropbox/templates/pages/canvas/js/squid-animation.js
========================================================================================*/

SQUID.Animation = function(resourceURL, sx, sy, w, h, numFrames, speed) {
	this.resourceURL = resourceURL;
	this.sx = sx;
	this.sy = sy;
	this.w = w;
	this.h = h;
	this.flipx = false;
	this.flipy = false;
	this.framesPerLine = numFrames;
	this.origin = 'topleft';
	this.offsetX = 0;
	this.offsetY = 0;
	this.loop = true;
	this.numFrames = numFrames;
	this.speed = speed || 0.033;
	this.frame = 0;
	this.elapsed = 0;
}

SQUID.Animation.prototype.update = function(dt) {
	if (this.elapsed < this.speed) {
		this.elapsed += dt;
	} else if (this.frame < this.numFrames - 1) {
		this.frame += 1;
		this.elapsed = 0;
	} else if (this.loop) {
		this.frame = 0;
		this.elapsed = 0;
	}

	// should put this somewhere else
	if (this.origin == 'topleft') {
		this.offsetX = 0;
		this.offsetY = 0;
	} else if (this.origin == 'center') {
		this.offsetX = Math.floor(this.w / 2);
		this.offsetY = Math.floor(this.h / 2);
	} else if (this.origin =- 'bottom') {
		this.offsetX = Math.floor(this.w / 2);
		this.offsetY = this.h;
	}

}

SQUID.Animation.prototype.render = function(ctx) {
	var w = this.w * 2;
	var h = this.h * 2;
	if (this.flipx) {
		w *= -1;
		ctx.scale(-1, 1);
	}
	if (this.flipy) {
		h *= -1;
		ctx.scale(1, -1);
	}

	ctx.drawImage(Resources.get(this.resourceURL), this.sx + (this.w * this.frame), this.sy, this.w, this.h, this.offsetX, this.offsetY, w, h);
}