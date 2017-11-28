//Resource manager adapted from James Long's tutorial at jlongster.com

Resources = {
	resourceCache: {},
	loading: [],
	readyCallbacks: [],
	load: function(urlOrArr) {
		if(urlOrArr instanceof Array) {
            urlOrArr.forEach(function(url) {
                Resources._load(url);
            });
        }
        else {
            Resources._load(urlOrArr);
        }
	},
	_load: function(url) {
		if(Resources.resourceCache[url]) {
            return Resources.resourceCache[url];
        }
        else {
            var img = new Image();
            img.onload = function() {
                Resources.resourceCache[url] = img;

                if(Resources.isReady()) {
                    Resources.readyCallbacks.forEach(function(func) { func(); });
                }
            };
            Resources.resourceCache[url] = false;
            img.src = url;
        }
	},
	get: function(url) {
		return Resources.resourceCache[url];
	},
	isReady: function() {
		var ready = true;
        for(var k in Resources.resourceCache) {
            if(Resources.resourceCache.hasOwnProperty(k) &&
               !Resources.resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
	},
	onReady: function(func) {
		Resources.readyCallbacks.push(func);
	}

};