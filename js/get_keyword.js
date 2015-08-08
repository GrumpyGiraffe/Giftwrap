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
  var listOfLikes =  jsonLikesList.data;
  console.log(listOfLikes);
  var randomNumber = Math.round(Math.random() * (listOfLikes.length - 1));
  console.log(listOfLikes[randomNumber]);
  return listOfLikes[randomNumber].name;
}