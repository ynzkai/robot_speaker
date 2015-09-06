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

	var state;

	jQuery.fn.extend({
		init_robot: function(options) {
			container = options["container"];
			interval = options["interval"];
			pausekey = options["pausekey"];
			deletekey = options["deletekey"];
		},
		speak: function(msg) {
			state = true;
			var chs = msg.split('');

			//为了setTimeout正常工作，putc定义为全局函数。
			window.putc = function() {
				if(state && 0 < chs.length) {
					if(chs[0] == pausekey) {
						chs.shift();
						setTimeout("putc();", interval*2);
					} else if(chs[0] == deletekey) {
						chs.shift();
						container.html('');
						setTimeout("putc();", 0);
					} else {
						container.html(container.html() + chs.shift());
						setTimeout("putc();", interval);
					}

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

