$( document ).ready(function() {
    	console.log('document ready');
	$('#selectFriendsPageMenu').click(function(){
		load_selectedfriends();
	});
	$('#productMenu').click(function() {
		load_product();
	})
});

function load_selectedfriends() {
	var url = 'templates/selectfriends.html';
	$.ajax({
		url: url,
		method: 'GET',	
	}).done(function(data) {
		updatePage(data);
	})
}

function load_product() {
	var url = 'templates/product.html';
	$.ajax({
		url: url,
		method: 'GET',
	}).done(function(data) {
		updatePage(data);
	})
}

function updatePage(html) {
	$('#content').html(html);
}

console.log('App.js');