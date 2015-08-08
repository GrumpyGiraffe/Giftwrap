/**
 * Created by Sheldon on 9/08/15.
 */
    var facebookData = {
    user: "",
    userID: 0,
    friendsList: [],
    selectedFriend: {},
    likes: [],
    selectedLike: "",
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


function myFacebookLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            FB.api(
                "/{friend-list-id}/members",
                function (response) {
                    console.log(response);
                    if (response && !response.error) {
                        /* handle the result */
                    }
                }
            );
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
                facebookData.user = response.name;
                console.log('response', response);
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
