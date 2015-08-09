$( document ).ready(function() {
    	console.log('document ready');
	facebookStart();
    trademeStart();
    appStart();
});


function appStart() {
    // Happens on index page
    $('#selectFriendsPageMenu').click(function(){
        load_selectedfriends();
    });
    $('#productMenu').click(function() {
        load_product();
    });
    $('#facebookLogin').click(function() {
        myFacebookLogin();
        load_selectedfriends();
    });
    // Ajaxed content

    $('#content').on('click', '#giftButton', function() {
        var friendId = getOption();
        selectFriend(friendId);
        findGift(friendId);
        load_product();
    })
}

function load_selectedfriends() {
	var url = 'templates/selectfriends.html';
	$.ajax({
		url: url,
		method: 'GET',	
	}).done(function(data) {
        getSelectedFriendsPage(data);
	})
}

function load_product() {
	var url = 'templates/product.html';
	$.ajax({
		url: url,
		method: 'GET'
	}).done(function(data) {
		getProductPage(data);
	})
}

function getProductPage(html) {
    updatePage(html);
    $('#fbName').html(facebookData.selectedFriend.name);
    $('#productName').html(trademeData.currentGift.title);
    $('#price').html(trademeData.currentGift.price);
    var link = '<a href="'+ trademeData.currentGift.url +'">View in TradeMe</a>';
    var imageLink = '<img src="' + trademeData.currentGift.img + '">';
    $('#trademeLink').html(link);
    $('#productImage').html(imageLink);
}

function getSelectedFriendsPage(html){
    updatePage(html);
    $('#fbName').html(facebookData.user);
    getFriendsList();
}
function updatePage(html) {
	$('#content').html(html);
}

function getOption(){
    return($("#chooseFriend").val());
}

function updateListFriends(){
    var mySelect = $("#chooseFriend");
    console.log('friendlist update', facebookData.friendsList);

    for(var i = 0; i<facebookData.friendsList.data.length; i++){
        console.log(facebookData.friendsList.data[i]);
        var friend = facebookData.friendsList.data[i];
        console.log("GGG");
            var html = '<option value="'+friend.id+'">' + friend.name + '</option>';
            mySelect.append(html);
    }
}