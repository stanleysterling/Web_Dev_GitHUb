
/*
You will create a 'Now Playing' wall for a theatre to show movies they are showing
They will be able to update the now playing list with new movies when they want to

1. You will need arrays to store the movie titles and poster image links
2. Display each movie in the array with it's poster
  - forEach loops are very useful here, but you can still do without it
3. Create a simple input section for new movies
4. New movies should become the first element of the array
5. The last movie in the array should be removed when adding a new movie
6. Once a movie is added, the page should refresh with the new movies showing

GOOD LUCK 🤹‍♂️
*/

var MovieName = ['Interstellar', 'Tenet', 'Ad Astra', 'Enders Game', 'Inception']
var PosterLink = ['https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg', 
                  'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX182_CR0,0,182,268_AL_.jpg', 
                  'https://m.media-amazon.com/images/M/MV5BZTllZTdlOGEtZTBmMi00MGQ5LWFjN2MtOGEyZTliNGY1MzFiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg', 
                  'https://m.media-amazon.com/images/M/MV5BMjAzMzI5OTgzMl5BMl5BanBnXkFtZTgwMTU5MTAwMDE@._V1_UX182_CR0,0,182,268_AL_.jpg', 
                  'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg']

function upload() {
  newName = document.getElementById("name").value
  MovieName.unshift(newName)
  MovieName.pop()
  newLink = document.getElementById("link").value
  PosterLink.unshift(newLink)
  PosterLink.pop()

  document.querySelector(".posters").innerHTML = ""

  MovieName.forEach(function(MovieName, index) {
    document.querySelector(".posters").innerHTML += 
    `<div class="imageholder">
      <img src="${PosterLink[index]}">
      <div class="moviename">${MovieName}</div>
    </div>`
  })
}

MovieName.forEach(function(MovieName, index) {
  document.querySelector(".posters").innerHTML += 
  `<div class="imageholder">
    <img src="${PosterLink[index]}">
    <div class="moviename">${MovieName}</div>
  </div>`
})

// document.querySelector(".div").innerHTML = `<div class="imageholder">
// <img src="${MovieName[0]}">
// <div class="moviename" id="nameone">Interstellar</div>
// </div>`
// document.querySelector(".div").innerHTML = `<div class="imageholder">`

// document.querySelector(".div").innerHTML = `<div class="imageholder">`

// document.querySelector(".div").innerHTML = `<div class="imageholder">`

// document.querySelector(".div").innerHTML = `<div class="imageholder">`

// poserArray.forEach(function(MovieName, index) {
//   document.querySelector(".div").innerHTML =
//     `<div class="imageholder">
//       <img src="${PosterLink}">
//       <div class="moviename" id="nameone">${MovieName[0]}</div>
//     </div>`
// }


// // create arrays for movie names, and poster image links

// // create a function that...
// // 1. get input values
// // 2. store them in array
//   // unshift()
// // 3. remove last items in array
//   // pop()
// // 4. update the HTML with new array
//   // using innerHTML = ''
