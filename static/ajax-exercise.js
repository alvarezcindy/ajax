"use strict";


// PART 1: SHOW A FORTUNE

function replaceFortune(fortune) {
	$('#fortune-text').html(fortune);	
}

function showFortune(evt) {
	$.get('/fortune', replaceFortune);
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function replaceWeather(weather) {
	$('#weather-info').html(weather['forecast']);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, replaceWeather);
}

$("#weather-form").on('submit', showWeather);



// PART 3: ORDER MELONS

function orderStatus(order) {
	if (order['code'] === 'ERROR') {
		$('#order-status').addClass("order-error");
	} 
	else {
		$('#order-status').removeClass("order-error");
	}
	$('#order-status').html(order['msg']);
}

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

    let formData = {"qty": $("#qty-field").val(),
					"melon_type": $("#melon-type-field").val()};

    $.post('/order-melons.json', formData, orderStatus);
}

$("#order-form").on('submit', orderMelons);


