// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorSection = document.getElementById('modal')
const heartBtn = document.getElementsByClassName('like-glyph')

errorSection.className = ('hidden')

for(const btn of heartBtn){
    btn.addEventListener('click', () => {
        mimicServerCall()

        .then(() => {
          if (btn.innerText === 'EMPTY_HEART'){
            btn.innerText = FULL_HEART;
            btn.className = 'activated-heart';
          }
          else{
            btn.innerText = EMPTY_HEART;
            btn.className = '';
          }
         
        })
        .catch((error) =>  {

          errorSection.className = ''
          errorSection.innerText = error;
          setTimeout(() => errorSection.className = 'hidden', 3000);
        })
    })


}



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
