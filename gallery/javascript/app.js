/**
 * Created by coderslab on 03.12.15.
 */

document.addEventListener("DOMContentLoaded", function(){
   var listWithPictures = document.querySelectorAll("#gallery li");
   var nextButton = document.querySelector("#nextPicture");
   var prevButton = document.querySelector("#prevPicture");
   var visiblePicture = 0;

   listWithPictures[visiblePicture].classList.toggle("invisible");

   nextButton.addEventListener("click", function(event){
      listWithPictures[visiblePicture].classList.toggle("invisible");
      visiblePicture++;
      if(visiblePicture >= listWithPictures.length){
         visiblePicture = 0;
      }
      listWithPictures[visiblePicture].classList.toggle("invisible");
   });

   prevButton.addEventListener("click", function(event){
      listWithPictures[visiblePicture].classList.toggle("invisible");
      visiblePicture--;
      if(visiblePicture < 0){
         visiblePicture = (listWithPictures.length - 1);
      }
      listWithPictures[visiblePicture].classList.toggle("invisible");
   });
});