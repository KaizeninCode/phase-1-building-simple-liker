// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let like = document.getElementsByClassName('like-glyph')
like.addEventListener('click', () => {
 mimicServerCall()
 .then(() => {
    like.innerHTML = FULL_HEART
    like.classList.add('activated-heart')
 })
 .catch((error) => {
    console.error('Error:', error);
 });  
 if(like.innerHTML = FULL_HEART){
  like.innerHTML = EMPTY_HEART
  like.classList.remove('activated-heart')
 }
})

setTimeout(() => {
 document.querySelector('#modal').classList.remove('hidden')
 document.querySelector('#modal-message').textContent = 'Random server error. Try again.'
}, 3000)

setTimeout(() => {
 document.querySelector('#modal').classList.add('hidden')
}, 6000)




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
