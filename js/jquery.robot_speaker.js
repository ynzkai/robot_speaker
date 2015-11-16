/***********************************************
 * Robot Speaker jQuery plugin
 * Licensed under MIT
 * @author ynzkai
 * @date: 2015/09/06
 * @version 1.0.0
 * http://zkai.me
 ***********************************************/
;(function($) {
	//options
	var container;
	var interval = 500;
	var pausekey;
	var deletekey;
	var loop = true;

	var state;

	jQuery.fn.extend({
		init_robot: function(options) {
			container = options["container"];
			interval = options["interval"];
			pausekey = options["pausekey"];
			deletekey = options["deletekey"];
			loop = options["loop"];
		},
		speak: function(msg) {
			state = true;
			var chs = msg.split('');
			var i = 0;

			//为了setTimeout正常工作，putc定义为全局函数。
			window.putc = function() {
				if(!state) return;
				if(i < chs.length) {
					if(i == 0) container.html('');
					if(chs[i] == pausekey) {
						//chs.shift();
						i++;
						setTimeout("putc();", interval*2);
					} else if(chs[i] == deletekey) {
						i++;
						container.html('');
						setTimeout("putc();", 0);
					} else {
						container.html(container.html() + chs[i++]);
						setTimeout("putc();", interval);
					}

				} else {
					i = 0;
					setTimeout("putc();", interval*3);
				}
			}

			window.putc();

			return $(this);
		},
		nospeak: function() {
			state = false;
			return $(this);
		}

	});
})(jQuery);

