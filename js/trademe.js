var trademeData = {
  keyword : "",
  resultList: [],
  currentGift: {
    title: "",
    img: "",
    price: "",
  },
  currentGiftIndex: 0,
};

$(document).ready(function () {

    var consumerKey = 'D878095ABE608E6AA6E5C47EBAFAC669';
    var consumerSecret = '8745D63A410A399375192C6960298D49%26';

    $('#searchNow').click(function () {
        var searchTerm = $('#searchTerm').val();
        $('#listings').html('');
        $('#listings').html('searching');

        //for testing
        trademeData.keyword = searchTerm;
        //
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
              trademeSearchData = data;
              console.log(data);
              
              updateTrademeData(data);
          })
          .fail(function () {
              console.log('Request failed');
          });
    };

    function updateTrademeData (data) {
     alert('in update trademe data method');
      trademeData.resultList = data.List;
      console.log(trademeData.resultList);
      //initializs the global object with the first object in the returned list
      updateCurrentGift(0);
    };

    function updateCurrentGift(index){
      console.log('in update gift method');
      console.log(index);
      trademeData.currentGift = {
        title: trademeData.resultList[index].title,
        img: trademeData.resultList[index].PictureHref,
        price: trademeData.resultList[index].PriceDisplay,
      };

      trademeData.currentGiftIndex = index;
      console.log(trademeData.currentGift);
      updatePage();
    };

    function updatePage() { 

        console.log('Update page called');
        console.log(trademeData.currentGift);
        $('#listings').html(''); // clear html
        var html = "<li class='looking-good'>" + trademeData.currentGift.title + " - " + trademeData.currentGift.price + "<br><img src='" + trademeData.currentGift.img + "'/></li>";
        $('#listings').append(html);

    };

    var isValidIndex = function(index){
      if(index < trademeData.resultList.length && index >= 0)
        return true;
      return false;
    };

    $('#next').click(function(){
      var index = trademeData.currentGiftIndex;
      alert(trademeData.currentGiftIndex);
      var newIndex = index + 1;
      alert(newIndex);
      if(isValidIndex(newIndex)){
         updateCurrentGift(newIndex);
       }
    });

    $('#prev').click(function(){
      var index = trademeData.currentGiftIndex;
      alert(trademeData.currentGiftIndex);
      var newIndex = index - 1;
      alert(newIndex);
      if(isValidIndex(newIndex)){
         updateCurrentGift(newIndex);
       }
    });



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