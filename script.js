function documentRead() {

}

$(document).ready(documentRead)

function $(window) {

}

let item;
item.css = function (width, _width) {

}

function documentReady()
{
	const MAX_SNOW = 200;

	const MAX_SNOW_SIZE = 7;

	const MAX_SNOW_SPEED = 1;

	snowStart();

	function snowStart() {

		console.log("// Snow animation start");

		createSnows();
	}

	function createSnows() {

		const container = $("#snow-animation-container");

		for (let i = 0; i < MAX_SNOW; i++) {

			const appendItem = getRandomItem(i);
			container.append(appendItem);

			const animateItem = $(".snow" + String(i));
			const randomTime = Math.random() * MAX_SNOW_SPEED;
			goAnimate(animateItem, i, randomTime);
			goAnimate2(animateItem);
		}

		console.log("// Create snows");
	}

	let item;
	item.css = function (marginTop) {

	}

	function goAnimate(item, id, randomTime) {
		let TweenMax;
		let Linear;
		Linear.easeNone = undefined;
		TweenMax.to(item, randomTime, {css:{marginTop:"+=100"}, ease:Linear.easeNone, onComplete:function() {

				const topPosition = item.css("margin-top").replace("px", "");

				if (topPosition > $(window).height()) {
				changePosition(item);
				randomTime = Math.random() * MAX_SNOW_SPEED;
				goAnimate(item, id, randomTime);
			}
			else {
				goAnimate(item, id, randomTime);
			}

		}});
	}

	function goAnimate2(item) {

		const directionTime = 1 + Math.floor(Math.random() * 5);

		const randomDirection = 1 + Math.floor(Math.random() * 4);

		const delayTime = 1 + Math.floor(Math.random() * 3);

		if (randomDirection === 1){

			let TweenMax;
			let Linear;
			TweenMax.to(item, directionTime, {css:{marginLeft:"+=100"}, ease:Linear.easeOut, onComplete:function() {

					let Linear;
					TweenMax.to(item, directionTime, {css:{marginLeft:"-=100"}, delay:delayTime, ease:Linear.easeOut, onComplete:function() {

					goAnimate2(item);

				}});
			}});
		}
		else if(randomDirection === 2)
		{

			let Linear;
			Linear.easeOut = undefined;
			let TweenMax;
			TweenMax.to(item, directionTime, {css:{marginLeft:"-=100"}, ease:Linear.easeOut, onComplete:function() {

				TweenMax.to(item, directionTime, {css:{marginLeft:"+=100"}, delay:delayTime, ease:Linear.easeOut, onComplete:function() {

					goAnimate2(item);

				}});
			}});
		}
		else if(randomDirection === 3)
		{

			let TweenMax;
			let Linear;
			TweenMax.to(item, directionTime, {css:{marginLeft:"+=100"}, ease:Linear.easeOut, onComplete:function() {

				goAnimate2(item);

			}});
		}
		else if(randomDirection === 4)
		{

			let TweenMax;
			let Linear;
			TweenMax.to(item, directionTime, {css:{marginLeft:"-=100"}, ease:Linear.easeOut, onComplete:function() {

				goAnimate2(item);

			}});
		}
	}

	function changePosition(item) {
		const _width = Math.floor(Math.random() * MAX_SNOW_SIZE);
		const _height = _width;
		const _blur = Math.floor(Math.random() * 5 + 2);
		const _left = Math.floor(Math.random() * ($(window).width() - _width));
		const _top = -$(window).height() + Math.floor(Math.random() * ($(window).height() - _height));

		item.css("width", _width);
		item.css("height", _height);
		item.css("margin-left", _left);
		item.css("margin-top", _top);
		item.css("-webkit-filter", "blur(" + String(_blur) + "px)");
		item.css("-moz-filter", "blur(" + String(_blur) + "px)");
		item.css("-o-filter", "blur(" + String(_blur) + "px)");
		item.css("-ms-filter", "blur(" + String(_blur) + "px)");
		item.css("filter", "blur(" + String(_blur) + "px)");
	}

	function getRandomItem(id) {
		const _width = Math.floor(Math.random() * MAX_SNOW_SIZE);
		const _height = _width;
		const _blur = Math.floor(Math.random() * 5 + 2);
		const _left = Math.floor(Math.random() * ($(window).width() - _width));
		const _top = -$(window).height() + Math.floor(Math.random() * ($(window).height() - _height));
		return getSmallSnow(_width, _height, _blur, _left, _top, id);
	}

	function getSmallSnow(width, height, blur, left, top, id) {

		return "<div class='snow" + id + "' style='position:absolute; margin-left: " + left + "px; margin-top: "
			+ top + "px; width: " + width + "px; height: " + height + "px; border-radius: 50%; background-color: white; " +
			"-webkit-filter: blur(" + blur + "px); -moz-filter: blur(" + blur + "px); -o-filter: blur(" + blur + "px); " +
			"-ms-filter: blur(" + blur + "px); filter: blur(" + blur + "px);'></div>";
	}


}
