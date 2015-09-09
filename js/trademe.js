var trademeData = {
  keyword : "",  //the keyword will represent the category, to change the category change the keyword
  resultList: [],
  currentGift: {
    title: "",
    img: "",
    price: "",
      url: "",
  },
  currentGiftIndex: 0,
};

var keywordIndex = 0;


function trademeStart() {

}

function findGift(friendId) {
    //get keywords should return a string
    var keyword = facebookData.selectedLike;
    //console.log(keyword);
    //use the first keyword to search
    search(keyword);
    trademeData.keyword = keyword;
}

    var consumerKey = 'FBCC6994DA5FD0EEE9263438A300564A';
    var consumerSecret = 'E7B0A6F05B8086270FE27FD7A70C22DA%26';

    /*var consumerKey = 'D878095ABE608E6AA6E5C47EBAFAC669';
    var consumerSecret = '8745D63A410A399375192C6960298D49%26';*/
    
    $('#searchNow').click(function () {
        var searchTerm = $('#searchTerm').val();
        $('#listings').html('');
        $('#listings').html('searching');

        //for testing
        trademeData.keyword = searchTerm;
        //
        search(searchTerm);
    });


    //search(searchTerm);

    //var search = function (searchTerm) {
     function search(searchTerm) {
         console.log('SEARCH TERM:', searchTerm);
        var queryString = 'search_string=' + searchTerm;

        var url = 'https://api.trademe.co.nz/v1/Search/General.json?oauth_consumer_key=' + consumerKey + '&oauth_signature_method=PLAINTEXT&oauth_signature=' + consumerSecret + '&' + queryString + '&photo_size=FullSize';

        $.ajax({
            url: url,
            method: "GET"
        })
          .done(function (data) {
                console.log('trademe data:', data);
                updateTrademeData(data);
                load_product();
          })
          .fail(function () {
              console.log('Request failed');
          });
    };

    function updateTrademeData (data) {
     //alert('in update trademe data method');
      trademeData.resultList = data.List;
        var rand = Math.floor(Math.random() * 6) + 1;
        //initializs the global object with the first object in the returned list
      updateCurrentGift(rand);
    };

    function updateCurrentGift(index){
        var url = "http://www.trademe.co.nz" + trademeData.resultList[index].CategoryPath + "/auction-"
            + trademeData.resultList[index].ListingId + ".htm";
      trademeData.currentGift = {
        title: trademeData.resultList[index].Title,
        //if(trademeData.resultList[index].PictureHref = "")
         // img:
        //else
          img: trademeData.resultList[index].PictureHref,
        price: trademeData.resultList[index].PriceDisplay,
          url: url,
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
      //alert(trademeData.currentGiftIndex);
      var newIndex = index + 1;
      //alert(newIndex);
      if(isValidIndex(newIndex)){
         updateCurrentGift(newIndex);
       }
    });

    $('#prev').click(function(){
      var index = trademeData.currentGiftIndex;
      //alert(trademeData.currentGiftIndex);
      var newIndex = index - 1;
      //alert(newIndex);
      if(isValidIndex(newIndex)){
         updateCurrentGift(newIndex);
       }
    });



    $('#nextCat').click(function(){
        keywordIndex++;
        console.log(keywordIndex);
        if(keywordIndex >= 0 && keywordIndex < keywordList.length)
          search(keywordList[keywordIndex]);
    });
