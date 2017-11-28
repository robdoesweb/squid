$(document).ready(function(){

	sqd = new Squid(document.getElementById('squid'), window.screen.width, window.screen.height);
	gui = sqd.newLayer('gui');
	cons = new SQUID.Entity(10, 15, 800, 600);
	cons.update = function(dt) {
			if (sqd.elapsedTime / 1000 > 60) {
				cons.msg = 'Elapsed time: ' + (sqd.elapsedTime / 60).toFixed(3) + ' minutes';
			} else {
				cons.msg = 'Elapsed time: ' + (sqd.elapsedTime).toFixed(2) + ' seconds';
			}
		};
	cons.render = function(ctx){
			ctx.font = '16px monospace';
			ctx.fillStyle = '#0F0';
			ctx.fillText(cons.msg, cons.x, cons.y);
			//console.log('drawing');
		};

	scott = new SQUID.Entity(100, 100, 108, 140);
	scott.update = function(dt) {
		if (this.direction == "left") {
			this.animation.flipx = true;
		} else {
			this.animation.flipx = false;
		}
		if (Input.keys["ArrowLeft"]) {
			this.x -= 500 * dt;
			this.direction = "left";
		} else if (Input.keys["ArrowRight"]) {
			this.x += 500 * dt;
			this.direction = "right";
		}
	}
	scott.animation = new SQUID.Animation("img/scottpilgrim_multiple.png", 0, 0, 108, 140, 8);
	// scott.animation.loop = false;
	sqd.resources = ['img/scottpilgrim_multiple.png'];
	sqd.layers.gui.add(scott);
	sqd.ctx.imageSmoothingEnabled = false;
	ranger = new SQUID.Entity(100, 100, 32, 32);
	ranger.idle = new SQUID.Animation("img/warrior.png", 0, 0, 32, 32, 10);
	ranger.walk = new SQUID.Animation("img/warrior.png", 0, 64, 32, 32, 10);
	ranger.attack = new SQUID.Animation("img/warrior.png", 0, 96, 32, 32, 10);
	//ranger.attack.loop = false;
	ranger.animation = ranger.idle;
	ranger.update = function(dt) {
		if (this.direction == "left") {
			this.animation.flipx = true;
		} else {
			this.animation.flipx = false;
		}
		if (Input.keys["ArrowRight"]) {
			this.animation = ranger.walk;
			this.x += 100 * dt;
			this.direction = "right";
		} else if (Input.keys["ArrowLeft"]) {
			this.animation = ranger.walk;
			this.x -= 100 * dt;
			this.direction = "left";
		} else {
			this.animation = ranger.idle;
		}
		if (Input.keys[" "]) {
			this.animation = ranger.attack;
		}

	}

	sqd.resources = ['img/ranger.png', 'img/warrior.png'];
	sqd.layers.gui.add(ranger);

	label = new SQUID.Entity(0, 0, 1, 1);
	label.lifespan = 0.75;
	label.lifetime = 0;
	label.update = function(dt) {
		if (label.active) {
			if (this.lifetime > this.lifespan) {
				this.active = false;
				this.lifetime = 0;
				this.y = 0;
			} else {
				this.lifetime += dt;
				this.y -= 50 * dt;
			}
		}
	};

	label.render = function(ctx) {
		if (label.active) {
			ctx.font = "16px monospace";
			ctx.fillStyle = '#0F0';
			var alpha = 1 - (this.lifetime / this.lifespan);
			ctx.globalAlpha = (this.lifetime / this.lifespan > 1) ? 0 : alpha;
			ctx.fillText("x: " + Input.mouse.x + ", y: " + Input.mouse.y, Input.mouse.x - 50, Input.mouse.y - 10);
		}
	};

	sqd.layers.gui.add(label);

	Input.onClick(function(){
		label.active = true;
		console.log("CLICK! " + Input.mouse.x + ", " + Input.mouse.y);
	});

	sqd.background = '#000';

	sqd.layers.gui.add(cons);
	sqd.start();


});