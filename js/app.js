
$( document ).ready(function() {

    facebookStart();



    function getOption(){
        console.log($("#chooseFriend").val());
        return($("#chooseFriend").val());
    }

    function listFriends(){
        for(var i = 0; i<facebookData.friendsList.length; i++){
            console.log("working");
            var mySelect = $("#chooseFriend");
            $.each(facebookData.friendsList.data.name, function(val, text) {
                var html = '<option value="'+val+'">' + text + '</option>';
                mySelect.append(html);
            });
        }
    }



}