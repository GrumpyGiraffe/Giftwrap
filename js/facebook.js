/**
 * Created by Sheldon on 9/08/15.
 */
    var facebookData = {
    user: "",
    userID: 0,
    friendsList: [],
    selectedFriend: {},
    likes: [],
    selectedLike: ""
};


var friendsLikes =
{
    "likes": {
        "data": [
            {
                "name": "Drone",
                "id": "853199368081686",
                "created_time": "2015-06-14T02:07:54+0000"
            },
            {
                "name": "Mortal Kombat",
                "id": "280916412057434",
                "created_time": "2015-05-27T14:54:23+0000"
            },
            {
                "name": "BMW",
                "id": "208627045823173",
                "created_time": "2015-01-09T11:20:01+0000"
            },
            {
                "name": "PS3",
                "id": "625550504175443",
                "created_time": "2014-11-26T23:26:46+000"
            }
        ]
    }
};

var friendsList =
{"data": [
    {
        "name": "Tuğba Coşkun",
        "id": "584223463345"
    },
    {
        "name": "Vijay Prema",
        "id": "689076168"
    },
    {
        "name": "Lisa Maddock",
        "id": "68953213384"
    },
    {
        "name": "Robbie Bruck",
        "id": "101524742248854151241"
    }
],
    "summary": {
        "total_count": 466
    }};

console.log(friendsList);




window.fbAsyncInit = function() {
    FB.init({
        appId      : '1459057421065180',
        xfbml      : true,
        version    : 'v2.4'
    });
};


(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}

    js = d.createElement(s); js.id = id;
    console.log("js" ,js);
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    console.log("fjs",fjs)
}(document, 'script', 'facebook-jssdk'));


function getFriendsList(){
    FB.api(
        "/me/friends",
        function (response) {
            console.log(response);
            if (response) {
                var data = friendsList;
                facebookData.friendsList = friendsList;


            }
        }
    );
}

function get_keyword(friendId) {
    var listOfLikes =  facebookData.likes;
    console.log(listOfLikes);
    var randomNumber = Math.round(Math.random() * (listOfLikes.length - 1));
    console.log(listOfLikes[randomNumber]);
    return listOfLikes[randomNumber].name;
}

function getFriendsLikes(id){
    FB.api('/'+id+'/likes', function(response) {
        console.log('friends likes',response);
        if(response) {
            var pages = response.data;
            var data = friendsLikes;
            facebookData.likes = data;
            //Call function to get Random Likes
            facebookData.selectedLike = get_keyword(facebookData.selectedFriend.id);

        }

    })
}

function selectFriend(id){
    for(var i = 0; i<facebookData.friendsList.length; i++){
        if(facebookData.friendsList[i].id == id){
            console.log('id of selected friend', facebookData.friendsList[i].id);
            facebookData.selectedFriend = facebookData.friendsList[i]
        }
    }
}

function myFacebookLogin() {
    FB.login(function (response) {
        if (response.authResponse) {

            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
                facebookData.user = response.name;
                facebookData.userID = response.id;
                getFriendsList();
                console.log('Good to see you, ' + response.name + '.');
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {scope: 'email,user_friends,read_custom_friendlists'});
}

function sendRequestViaMultiFriendSelector() {
    FB.ui({
        method: 'apprequests',
        message: "This message is displayed in invitation"
    },send_wall_invitation);

}

function send_wall_invitation(response) {
    // alert(response.to);
    var send_invitation_url=base_url+'send_invitation';
    jQuery.ajax({
        url:send_invitation_url,
        data:{
            to:response.to
        },
        dataType:"json",
        type: 'POST',
        success: function(data){
//            alert("");
        }

    })
}

function FBInvite(){
    FB.ui({
        method: 'send',
        link: 'http://grumpygiraffe.github.io/Giftwrap/facebook.html',
    });
}
getFriendsList();
selectFriend(689076168);
console.log(facebookData);