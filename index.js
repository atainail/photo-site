//toggles between + and - in the navbar
$('button').click(function() {
    $(this).find('i').toggleClass('fas fa-plus fas fa-minus');
});
 

$('.navigation-import').load("nav.txt");








//imports and puts all photos from folder into an array 

let weddingPicsArr = [];

function importPictures(totalNumOfPhotos, arrName, folderName, photoType){
    for(let i = 1; i < totalNumOfPhotos + 1; i++){
        arrName[i] = `<img class="reveal" src="${folderName}/${photoType}${i}.jpg">`;
        document.querySelector(".wedding-photos").innerHTML +=  `<img class="reveal" src="${folderName}/${photoType}${i}.jpg">`;   
         
    }
}
importPictures(17, weddingPicsArr, 'wedding-pics', 'wedding');



function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);



  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll + 1 > scroll || scroll - 1 < scroll){
        document.querySelector(".scroll-down").innerHTML = "";
    } 
});


