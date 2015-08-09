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

function getOption(){
    console.log($("#chooseFriend").val());
    return($("#chooseFriend").val());
}

function listFriends(){
    for(var i = 0; i<facebookData.friendsList.length; i++){
        console.log("GGG");
        var mySelect = $("#chooseFriend");
        $.each(facebookData.friendsList.data.name, function(val, text) {
            mySelect.append(
                $('<option></option>').val(val).html(text)
            );
        });
    }
}