


var imgsList = document.getElementsByClassName("img-fluid");
var imgArray= [];
var lightboxContainer = document.querySelector("#lightbox-Container");
var lightboxItem =document.querySelector("#lightbox-item");
var nextBtn =document.getElementById("next");
var prevBtn =document.getElementById("prev");
var closeBtn =document.getElementById("close");


var currentSlideIndex = 0;

for (var i=0 ; i<imgsList.length ; i++)
{
imgArray.push(imgsList[i]);

imgArray[i].addEventListener("click", function(eventInfo)
{
   lightboxContainer.style.display = "flex";
   var imgSrc =eventInfo.target.getAttribute("src");
   lightboxItem.style.backgroundImage= "url("+imgSrc+")";
   currentSlideIndex =imgArray.indexOf(eventInfo.target);

})
}

function nextSlide ()
{
  currentSlideIndex ++;
  if( currentSlideIndex == imgArray.length)
  {
    currentSlideIndex = 0 ;
  }

  lightboxItem.style.backgroundImage=
  `url(`+imgArray[currentSlideIndex].getAttribute("src")+`)`;

}
nextBtn .addEventListener("click",nextSlide);

function prevSlide()
{
  currentSlideIndex-- ;

  if( currentSlideIndex < 0)
  {
    currentSlideIndex = imgArray.length -1 ;
  }


  lightboxItem.style.backgroundImage=
  `url(`+imgArray[currentSlideIndex].getAttribute("src")+`)`;

}
prevBtn .addEventListener("click",prevSlide);

function closeSlide ()
{
  lightboxContainer.style.display = "none";
}
closeBtn .addEventListener("click",closeSlide);


// another method to close slide
// lightboxContainer.addEventListener("click",function(eventInfo)
// {
//   if(eventInfo.target != lightboxItem )
//   {
//     lightboxContainer.style.display = "none";
//   }
// })

// keycode

document.body.addEventListener("keydown",function(eventInfo)
{
  if(eventInfo.keyCode == 39)
  {
    nextSlide(); // call the nextSlide function
  }
}
)

document.body.addEventListener("keydown",function(eventInfo)
{
  if(eventInfo.keyCode == 37)
  {
    prevSlide(); // call the prevSlide function
  }
}
)

document.body.addEventListener("keydown",function(eventInfo)
{
  if(eventInfo.keyCode == 27)
  {
    closeSlide(); // call the closeSlide function
  }
}
)