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