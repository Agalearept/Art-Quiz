import images from "./images.js";

var cards_record_art = document.querySelectorAll('.card__record__art');
var artists_record_imgs = document.querySelectorAll('.artists__record__img');
var infos_score = document.querySelectorAll('.info__score');
var texts_name = document.querySelectorAll('.text__name');
var texts_author = document.querySelectorAll('.text__author');
var texts_year = document.querySelectorAll('.text__year');
var new_array_images;
var step = 0;


var changeImages = function(idel){
    var newImages = [];
    var j = 0;
    for(var i = idel-10;i<idel;i++){
        newImages[j] = images[i];
        j++;
    }
    return newImages;
} 

// Функция кнопок score
btns_score.forEach((btn_score) => {
    btn_score.addEventListener('click', function(){
        for(var i = idScoreBtn - 10; i <= idScoreBtn; i++){
            new_array_images = changeImages(idScoreBtn);
            artists_record_imgs[step].style.backgroundImage = "url('assets/images/full/"+new_array_images[i]['imageNum']+"full.jpg')";
            texts_name[step].textContent = new_array_images[i]['name'];
            texts_author[step].textContent = new_array_images[i]['author'];
            texts_year[step].textContent = new_array_images[i]['year'];
            step++
        }
    });
})


cards_record_art.forEach((card_record_art) => {
    card_record_art.addEventListener('click', function(){
        infos_score[card_record_art.id-1].classList.toggle('info__score__show');
    });
})