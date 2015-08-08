$(document).ready(function () {

    var consumerKey = 'D878095ABE608E6AA6E5C47EBAFAC669';
    var consumerSecret = '8745D63A410A399375192C6960298D49%26';

    $('#searchNow').click(function () {
        var searchTerm = $('#searchTerm').val();
        $('#listings').html('');
        $('#listings').html('searching');
        search(searchTerm);
    });

    var search = function (searchTerm) {

        var queryString = 'search_string=' + searchTerm;

        var url = 'https://api.trademe.co.nz/v1/Search/General.json?oauth_consumer_key=' + consumerKey + '&oauth_signature_method=PLAINTEXT&oauth_signature=' + consumerSecret + '&' + queryString + '&photo_size=FullSize';

        $.ajax({
            url: url,
            method: "GET"
        })
          .done(function (data) {
              console.log(data);
              updatePage(data);
          })
          .fail(function () {
              console.log('Request failed');
          });
    };

    var keyword = get_keyword(731197676989916);
    console.log(keyword);
    search(keyword);


    var updatePage = function (keyword) {
        var listings = keyword.List;
        console.log(listings);
        $('#listings').html(''); // clear html
        for (var i = 0; i < listings.length; i++) {
            var obj = listings[i];
            console.log(obj);
            var html = "<li class='looking-good'>" + obj.Title + " - " + obj.PriceDisplay + "<br><img src='" + obj.PictureHref + "'/></li>";
            $('#listings').append(html);
        }
    };

    /*
    var updatePage = function (data) {
        var listings = data.List;
        console.log(listings);
        $('#listings').html(''); // clear html
        for (var i = 0; i < listings.length; i++) {
            var obj = listings[i];
            console.log(obj);
            var html = "<li class='looking-good'>" + obj.Title + " - " + obj.PriceDisplay + "<br><img src='" + obj.PictureHref + "'/></li>";
            $('#listings').append(html);
        }
    };
    */
});