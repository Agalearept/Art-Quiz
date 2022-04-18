import images from "./images.js";

var artists_record_imgs = document.querySelectorAll('.artists__record__img');
var texts_name = document.querySelectorAll('.text__name');
var texts_author = document.querySelectorAll('.text__author');
var texts_year = document.querySelectorAll('.text__year');
new_array_images = changeImages(idScoreBtn);

// Функция кнопок score
btns_score.forEach((btn_score)=>{
    btn_score.addEventListener('click', function(){
        for(var i = idScoreBtn - 10; i <= idScoreBtn; i++){
            artists_record_imgs.style.backgroundImage = "url('assets/images/full/"+new_array_images[i]['imageNum']+"full.jpg')";
            texts_name.textContent = new_array_images[i]['name'];
            texts_author.textContent = new_array_images[i]['author'];
            texts_year.textContent = new_array_images[i]['year'];
        }
    });
})