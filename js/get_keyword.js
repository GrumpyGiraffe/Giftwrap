var categoryWhitelist = {
"Actor/Director":1103,
"Movie":1105,
"Producer":1108,
"Writer":1109,
"Studio":1110,
"Movie Theater":1111,
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
"Software":2211,
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
"Retail and Consumer Merchandise":2239,
"Automobiles and Parts":2240,
"Food/Beverages":2252,
"Computers/Technology":2255,
"Internet/Software":2256,
"Travel/Leisure":2258,
"Church/Religious Organization":2264,
"Games/Toys":"2300",
"App":2301,
"Landmark":2503,
"Sports Venue":2507,
"Arts/Entertainment/Nightlife":2508,
"Automotive":2509,
"Spas/Beauty/Personal Care":2510,
"Food/Grocery":2513,
"Home Improvement":2515,
"Shopping/Retail":2521,
"Public Places":2522,
"Attractions/Things to Do":2523,
"Sports/Recreation/Activities":2524,
"Tours/Sightseeing":2525,
"Museum/Art Gallery":2528,
}

var jsonLikesList = {
  "data": [
    {
      "id": "116301708405331",
      "name": "Whittaker's Chocolate Lovers",
      "category": "Food/Beverages"
    },
    {
      "id": "30382852317",
      "name": "成龍 Jackie Chan",
      "category": "Actor/Director"
    },
    {
      "id": "212505698805486",
      "name": "Oliver Sacks",
      "category": "Author"
    },
    {
      "id": "1400298830219237",
      "name": "What We Do in the Shadows",
      "category": "Movie"
    },
    {
      "id": "149264868600",
      "name": "Ian McKellen",
      "category": "Actor/Director"
    },
    {
      "id": "128529000519949",
      "name": "Emily de Molly",
      "category": "Health/Beauty"
    },
    {
      "id": "121255121263267",
      "name": "James Gurney",
      "category": "Artist"
    },
    {
      "id": "133606026741381",
      "name": "Max Factor New Zealand",
      "category": "Health/Beauty"
    },
    {
      "id": "57642309048",
      "name": "Wellington Batucada",
      "category": "Musician/Band"
    },
    {
      "id": "203985835428",
      "name": "Extra Ordinary Comics",
      "category": "Artist"
    },
    {
      "id": "201412066560080",
      "name": "Nadia Lim",
      "category": "Public Figure"
    },
    {
      "id": "1385371715035391",
      "name": "Assassin's Creed",
      "category": "Games/Toys"
    },
    {
      "id": "274970656197",
      "name": "Hong Kong Subtitles",
      "category": "Entertainment Website"
    }]
}
function get_keyword(friendId) {
  var listOfLikes =  filterCategories(jsonLikesList.data);
  console.log(listOfLikes);
  var randomNumber = Math.round(Math.random() * (listOfLikes.length - 1));
  console.log(listOfLikes[randomNumber]);
  return listOfLikes[randomNumber].name;
}

function filterCategories(data) {
  var filteredData = [];
  for (var i = 0; i < data.length; i++) {
    var categoryOfObject = data[i].category;
    console.log(categoryOfObject);
    console.log(categoryWhitelist[categoryOfObject]);
    if (typeof categoryWhitelist[categoryOfObject] !== "undefined") {
      filteredData.push(data[i])
    }
  }
  return filteredData;
}