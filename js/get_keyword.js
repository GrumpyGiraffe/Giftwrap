var categoryWhitelist = {
"Actor/Director":1103,
"Movie":1105,
"Producer":1108,
"Writer":1109,
"Studio":1110,
//"Movie Theater":1111,
"TV/Movie Award":1112,
"Fictional Character":1113,
"Album":1200,
"Song":1201,
"Musician/Band":1202,
"Musical Instrument":1204,
"Playlist":1206,
"Music Video":1207,
"Concert Tour":1208,
"Concert Venue":1209,
"Record Label":1211,
"Music Award":1212,
"Music Chart":1213,
"Book":1300,
"Author":1301,
"Book Store":1305,
"Magazine":1307,
"TV Show":1400,
"TV Network":1402,
"TV Channel":1404,
"Athlete":1600,
"Artist":1601,
"Public Figure":1602,
"Journalist":1604,
"News Personality":1605,
"Chef":1606,
"Comedian":1610,
"Entertainer":1611,
"Dancer":1614,
"Politician":1700,
"Sports League":1800,
"Professional Sports Team":1801,
"Coach":1802,
"Product/Service":2201,
"Cars":2205,
"Camera/Photo":2208,
"Clothing":2209,
"Computers":2210,
//"Software":2211,
"Electronics":2213,
"Health/Beauty":2214,
"Appliances":2215,
"Home Decor":2218,
"Furniture":2219,
"Household Supplies":2220,
"Kitchen/Cooking":2221,
"Patio/Garden":2222,
"Tools/Equipment":2223,
"Wine/Spirits":2224,
"Jewelry/Watches":2226,
"Movies/Music":2227,
"Pet Supplies":2230,
"Outdoor Gear/Sporting Goods":2231,
"Baby Goods/Kids Goods":2232,
"Media/News/Publishing":2233,
//"Retail and Consumer Merchandise":2239,
"Automobiles and Parts":2240,
"Food/Beverages":2252,
"Computers/Technology":2255,
"Internet/Software":2256,
//"Travel/Leisure":2258,
//"Church/Religious Organization":2264,
"Games/Toys":"2300",
"App":2301,
"Landmark":2503,
"Sports Venue":2507,
"Arts/Entertainment/Nightlife":2508,
"Automotive":2509,
"Spas/Beauty/Personal Care":2510,
"Food/Grocery":2513,
//"Home Improvement":2515,
//"Shopping/Retail":2521,
"Public Places":2522,
"Attractions/Things to Do":2523,
"Sports/Recreation/Activities":2524,
"Tours/Sightseeing":2525,
"Museum/Art Gallery":2528,
}

var jsonLikesList = {
  "data": [
    {
      "name": "SESA - Software Engineering Students Association",
      "category": "Organization",
      "likes": 106,
      "id": "731197676989916"
    },
    {
      "name": "Whittaker's Chocolate Lovers",
      "category": "Food/Beverages",
      "likes": 485560,
      "id": "116301708405331"
    },
    {
      "name": "University Challenge NZ",
      "category": "TV Show",
      "likes": 893,
      "id": "531681433619507"
    },
    {
      "name": "Google at UoA",
      "category": "Education",
      "likes": 1257,
      "id": "104129093050548"
    },
    {
      "name": "Rails Girls Wellington",
      "category": "Community Organization",
      "likes": 348,
      "id": "569105343121749"
    },
    {
      "name": "Bottles & Beauty",
      "category": "Personal Blog",
      "likes": 121,
      "id": "319059351608139"
    },
    {
      "name": "成龍 Jackie Chan",
      "category": "Actor/Director",
      "likes": 64032720,
      "id": "30382852317"
    },
    {
      "name": "Oliver Sacks",
      "category": "Author",
      "likes": 95529,
      "id": "212505698805486"
    },
    {
      "name": "What We Do in the Shadows",
      "category": "Movie",
      "likes": 119558,
      "id": "1400298830219237"
    },
    {
      "name": "Summer of Tech",
      "category": "Community",
      "likes": 1047,
      "id": "116167105064723"
    },
    {
      "name": "Welcome to Night Vale",
      "category": "Radio Station",
      "likes": 227421,
      "id": "248480688605432"
    },
    {
      "name": "Ian McKellen",
      "category": "Actor/Director",
      "likes": 4614433,
      "id": "149264868600"
    },
    {
      "name": "The Ramen Shop",
      "category": "Restaurant/Cafe",
      "likes": 2020,
      "id": "191826274298779"
    },
    {
      "name": "VUW Tuataras",
      "category": "Monarch",
      "likes": 498,
      "id": "159403360903764"
    },
    {
      "name": "Tommy Millions",
      "category": "Local Business",
      "likes": 3141,
      "id": "119441931534072"
    },
    {
      "name": "Embassy Theatre",
      "category": "Movie Theater",
      "likes": 10456,
      "id": "128916600997"
    },
    {
      "name": "St Matthew-in-the-City",
      "category": "Church/Religious Organization",
      "likes": 1757,
      "id": "6502409274"
    },
    {
      "name": "grabaseat",
      "category": "Local/Travel Website",
      "likes": 254604,
      "id": "14621297389"
    },
    {
      "name": "Pizza Pomodoro",
      "category": "Local Business",
      "likes": 1316,
      "id": "132542320123923"
    },
    {
      "name": "The Critter Room",
      "category": "Personal Blog",
      "likes": 38328,
      "id": "206293252750873"
    },
    {
      "name": "Victoria University of Wellington Library",
      "category": "Education",
      "likes": 758,
      "id": "240468359403185"
    },
    {
      "name": "Spiderweb Software",
      "category": "Software",
      "likes": 6149,
      "id": "61765053139"
    },
    {
      "name": "James Gurney",
      "category": "Artist",
      "likes": 13777,
      "id": "121255121263267"
    },
    {
      "name": "The Official Wellington SPCA",
      "category": "Non-Profit Organization",
      "likes": 11278,
      "id": "127018160649520"
    },
    {
      "name": "Absolutely Positively Wellington",
      "category": "Travel/Leisure",
      "likes": 100662,
      "id": "118984448122341"
    },
    {
      "name": "Max Factor New Zealand",
      "category": "Health/Beauty",
      "likes": 4402,
      "id": "133606026741381"
    },
    {
      "name": "Campaign against changes to student allowances",
      "category": "Community",
      "likes": 261,
      "id": "197622310359815"
    },
    {
      "name": "Student Job Search",
      "category": "Non-Profit Organization",
      "likes": 82670,
      "id": "136917079665365"
    },
    {
      "name": "Echo Bazaar",
      "category": "App Page",
      "likes": 27559,
      "id": "135959263100228"
    },
    {
      "name": "Victoria University Press",
      "category": "Local Business",
      "likes": 1329,
      "id": "131580600211498"
    },
    {
      "name": "Aro Video",
      "category": "Entertainment Website",
      "likes": 1341,
      "id": "40384539979"
    },
    {
      "name": "Wellington Batucada",
      "category": "Musician/Band",
      "likes": 855,
      "id": "57642309048"
    },
    {
      "name": "New Zealand Opera",
      "category": "Non-Profit Organization",
      "likes": 4876,
      "id": "157667035655"
    },
    {
      "name": "New Zealand International Film Festival",
      "category": "Non-Profit Organization",
      "likes": 15093,
      "id": "218912961455140"
    },
    {
      "name": "Nadia Lim",
      "category": "Public Figure",
      "likes": 191227,
      "id": "201412066560080"
    },
    {
      "name": "Wellington Film Society",
      "category": "Non-Profit Organization",
      "likes": 1177,
      "id": "172168074533"
    },
    {
      "name": "Assassin's Creed",
      "category": "Games/Toys",
      "likes": 9980586,
      "id": "1385371715035391"
    },
    {
      "name": "The Remarkable Sweet Shop",
      "category": "Shopping/Retail",
      "likes": 2932,
      "id": "323605276025"
    }
  ]
}

function get_keyword(friendId) {
  var listOfLikes =  filterCategories(jsonLikesList.data);
  console.log(listOfLikes);
  var randomNumber = Math.round(Math.random() * (listOfLikes.length - 1));
  console.log(listOfLikes[randomNumber]);
  return listOfLikes[randomNumber].name;
}

function get_keywords() {
  var listOfLikes = jsonLikesList.data;
  console.log(listOfLikes);
  //var randomNumber = Math.round(Math.random() * (listOfLikes.length - 1));
  //console.log(listOfLikes[randomNumber]);
  return listOfLikes;
}

function filterCategories(data) {
  var filteredData = [];
  for (var i = 0; i < data.length; i++) {
    var categoryOfObject = data[i].category;
    if (typeof categoryWhitelist[categoryOfObject] !== "undefined" && data[i].likes > 1000) {
      filteredData.push(data[i])
    }
  }
  return filteredData;
}