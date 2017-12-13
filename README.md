<!-- This is a static file -->
<!-- served from your routes in server.js -->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <header>
      <h1>
        Image Search Abstraction Layer
      </h1>
    </header>

Example usage:

        https://mulberry-brother.glitch.me/imagesearch/lolcats%20funny?offset=2

        https://mulberry-brother.glitch.me/latest
        
Example output:

        [{
          "url":"https://img.scoop.it/f-tKCNgJWPoGzbrK5LCQhTl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9",
          "snippet":"Lolcats: Ohai hooman - Lolcats - Funny Pictures...",
          "thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKqxoHtHn8b0dYvy4VKUKWZ3obuPs3O2agntOwGzNscV-mJghnsMEQgE",
          "context":"http://www.scoop.it/t/pictures/p/1665736655/lolcats-ohai-hooman-lolcats-funny-pictures-of-cats-i-can-has"
        },{
          "url":"http://i0.kym-cdn.com/photos/images/newsfeed/000/010/014/lolcats-funny-pictures-leroy-jenkins.jpg",
          "snippet":"Image - 10014] | LOLcats | Know Your Meme",
          "thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-vJ6IUBomImDMpUeOIHrBMwbi6f0fbK4KXP6HnFVV8CybuSi-n6Ofyo",
          "context":"http://knowyourmeme.com/photos/10014-lolcats"
        }]

        [{
          "term":"lolcats funny",
          "when":"2017-12-13T22:39:58.962Z"
        },{
          "term":"lolcats funny",
          "when":"2017-12-13T21:36:26.508Z"
        },{
          "term":"lolcats funny",
          "when":"2017-12-13T21:36:05.250Z"
        },{
          "term":"lolcats funny",
          "when":"2017-12-13T21:28:06.461Z"
        },{
          "term":"lolcats funny",
          "when":"2017-12-13T18:06:33.435Z"
        },{
          "term":"lolcats funny",
          "when":"2017-12-13T18:03:04.303Z"
        },{
          "term":"lolcats funny",
          "when":"2017-12-13T17:21:26.519Z"
        },{
          "term":"lolcats funny",
          "when":"2017-12-13T17:04:39.177Z"
        },{
          "term":"lolcats funny",
          "when":"2017-12-13T16:23:59.434Z"
        },{
          "term":"lolcats funny",
          "when":"2017-12-13T13:19:49.828Z"
        }]
  </body>
</html>
