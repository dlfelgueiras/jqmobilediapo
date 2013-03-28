/*

            _/    _/_/      _/     _/            _/       _/  _/               _/_/_/     _/                              
               _/    _/    _/_/ _/_/    _/_/    _/           _/      _/_/_/   _/    _/       _/_/_/     _/_/_/      _/_/  
          _/  _/  _/_/    _/  _/ _/  _/    _/  _/_/_/   _/  _/     _/_/_/_/  _/     _/  _/        _/   _/    _/  _/    _/ 
         _/  _/    _/    _/     _/  _/    _/  _/   _/  _/  _/     _/        _/    _/   _/  _/_/_/_/   _/    _/  _/    _/  
        _/    _/_/  _/  _/     _/    _/_/    _/_/_/   _/  _/_/_/   _/_/_/  _/_/_/     _/   _/_/_/_/  _/_/_/      _/_/     
       _/                                                                                           _/                    
    _/                                                                                             _/                     

    jQMobileDiapo v0.9.0
    © Copyright, David Felgueiras
    http://code.google.com/p/jqmobilediapo

*/

(function ($) {
	$.fn.jQMobileDiapo = function (options) {
		var defaults = {
			prevId		: 'prevBtn',
			prevText	: '<<',
			nextId		: 'nextBtn',
			nextText	: '>>',
			backId		: 'backBtn',
			backText	: 'Back',
			backLink	: '#',
			controlsShow: true,
			speed		: 250,
			btnTime		: 2000,
			imgReplace	: 'images/no-image.jpg',
			images		: []
		};

		options = $.extend(defaults, options);

		this.each(function () {
			var obj = $(this),
				domObj = $(this).get(0),
				aImg = options.images,
				nbImg = aImg.length,
				agent = navigator.userAgent.toLowerCase(),
				is_iphone = (agent.indexOf('iphone') != -1),
				lPages = 0,
				tPage = 1,
				iHeight = $(window).height(),
				iWidth = $(window).width(),
				t;

			obj.empty();
			obj.css({'overflow': 'hidden', 'position': 'absolute'});

			var elBack = document.createElement("a");
			elBack.setAttribute("href", options.backLink);
			elBack.appendChild(document.createTextNode(options.backText));

			var elBackContainer = document.createElement('div');
			elBackContainer.setAttribute("class", "btn");
			elBackContainer.appendChild(elBack);

			domObj.appendChild(elBackContainer);

			if ((typeof aImg == 'object') && nbImg) {
				var imgContainer = document.createElement("ul");
				imgContainer.setAttribute("id", "imgContainer");

				var elLi = document.createElement("li"),
					elImg = document.createElement('img');
				elImg.setAttribute("onerror", "this.src='" + options.imgReplace + "';");
				elLi.appendChild(elImg);

				for (var i=0; i<nbImg; i++) {
					aImg[i] = {added: false, url: aImg[i]};
					imgContainer.appendChild(elLi.cloneNode(true));
				}

				var btnContainer = document.createElement("div");
				btnContainer.setAttribute("id", "btnNav");
				btnContainer.setAttribute("class", "btn");

				var elPrev = document.createElement('div');
				elPrev.setAttribute("id", options.prevId);
				elPrev.setAttribute("style", "float:left;display:none;");

				var aPrev = document.createElement("a");
				aPrev.setAttribute("href", "javascript:void(0);");
				aPrev.appendChild(document.createTextNode(options.prevText));

				var elNext = document.createElement('div');
				elNext.setAttribute("id", options.nextId);
				elNext.setAttribute("style", "float:right;width:100%;");

				var aNext = document.createElement("a");
				aNext.setAttribute("href", "javascript:void(0);");
				aNext.appendChild(document.createTextNode(options.nextText));

				domObj.appendChild(imgContainer);
				elPrev.appendChild(aPrev);
				btnContainer.appendChild(elPrev);
				elNext.appendChild(aNext);
				btnContainer.appendChild(elNext);
				domObj.appendChild(btnContainer);
			}

			setTimeout(function () {
				if (is_iphone) {
					iHeight = window.innerHeight;
					iWidth = window.innerWidth;
				}
				obj.css({"height": iHeight + "px", "width": iWidth + "px"});
				obj.find('li').each(function () {
					lPages++;
					$(this).css({"height": iHeight + "px", "width": iWidth + "px"});
				});
				obj.find('ul').css({"height": iHeight + "px", "width": (iWidth * lPages) + "px"});
				obj.find('img').css({"max-height": iHeight + "px", "max-width": iWidth + "px"});
				$('#btnNav').css({"top": (iHeight - $('#btnNav').outerHeight()) + "px"});
				$(obj.find('img')[tPage - 1]).load(function () {
					var top = Math.ceil((iHeight - $(this).height()) / 2);
					$(this).css({"margin-top": top + "px"});
				});
			}, 100);

			if (options.controlsShow) {
				setTimeout(function () { $(".btn").hide(); }, options.btnTime);
			} else {
				$(".btn").hide();
			}

			function preparNextImg(index) {
				if (!aImg[index].added) {
					var url = aImg[index].url,
						li = obj.find('ul li').get(index);
					$(li).find('img').attr('src', url);
					aImg[index].added = true;
				}
			}

			function showHideBtn() {
				if (options.controlsShow) {
					clearTimeout(t);
					$(".btn").show();
					t = setTimeout(function () { $(".btn").hide(); }, options.btnTime);
				}
			}

			function swipeLeft() {
				showHideBtn();
				if (tPage < lPages) {
					tPage++;
					obj.find('ul').animate({left: "-=" + iWidth}, options.speed);
					$(obj.find('img')[tPage - 1]).each(function () {
						var top = Math.ceil((iHeight - $(this).height()) / 2);
						$(this).css({"margin-top": top + "px"});
					});
					if (tPage < aImg.length) {
						preparNextImg(tPage);
					}
					if (tPage > 1) {
						$("#" + options.nextId).css({"width": "50%"}).show();
						$("#" + options.prevId).css({"width": "50%"}).show();
					}
				}
				if (tPage == lPages) {
					$("#" + options.nextId).hide();
					$("#" + options.prevId).css({"width": "100%"}).show();
				}
			}

			function swipeRight() {
				showHideBtn();
				if (tPage > 1) {
					tPage--;
					obj.find('ul').animate({left: "+=" + iWidth}, options.speed);
					$(obj.find('img')[tPage - 1]).each(function () {
						var top = Math.ceil((iHeight - $(this).height()) / 2);
						$(this).css({"margin-top": top + "px"});
					});
					if (tPage < lPages) {
						$("#" + options.nextId).css({"width": "50%"}).show();
						$("#" + options.prevId).css({"width": "50%"}).show();
					}
				}
				if (tPage == 1) {
					$("#" + options.prevId).hide();
					$("#" + options.nextId).css({"width": "100%"}).show();
				}
			}

			function centerImg() {
				window.scrollTo(0, 1);
				iHeight = $(window).height();
				iWidth = $(window).width();
				if (is_iphone) {
					iHeight = window.innerHeight;
					iWidth = window.innerWidth;
				}
				var elUl = obj.find('ul'),
					elImg = obj.find('img');
				obj.css({"height": iHeight + "px", "width": iWidth + "px"});
				obj.find('li').css({"height": iHeight + "px", "width": iWidth + "px"});
				elUl.css({"height": iHeight + "px", "width": (iWidth * lPages) + "px"});
				elImg.css({"max-height": iHeight + "px", "max-width": iWidth + "px"});
				elUl.css({ 'left': "-" + ((tPage - 1) * iWidth) + "px"});
				$('#btnNav').css({"top": (iHeight - $('#btnNav').outerHeight()) + "px"});
				$(elImg[tPage - 1]).each(function () {
					var top = Math.ceil((iHeight - $(this).height()) / 2);
					$(this).css({"margin-top": top + "px"});
				});
			}

			$(window).bind('orientationchange', function (event) {
				setTimeout(function () {
					centerImg();
				}, 100);
			});

			$(window).resize(function () {
				setTimeout(function () {
					centerImg();
				}, 100);
			});

			$("#" + options.prevId).click(function () {
				swipeRight();
			});

			$("#" + options.nextId).click(function () {
				swipeLeft();
			});

			obj.bind('swipeleft', function (event) {
				event.stopImmediatePropagation();
				swipeLeft();
			});

			obj.bind('swiperight', function (event) {
				event.stopImmediatePropagation();
				swipeRight();
			});

			$(window).bind('vclick', function (event) {
				showHideBtn();
			});

			preparNextImg(0);
			preparNextImg(1);

			setTimeout(function () {
				centerImg();
			},100);
		});
	};
})(jQuery);