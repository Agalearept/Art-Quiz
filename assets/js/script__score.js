import {images} from "./images.js";
import { btns_score, idScoreBtn } from "./script__change__content.js";
import { correct_answers } from "./script__questions__actor.js";

var cards_record_art = document.querySelectorAll('.card__record__art');
export var artists_record_imgs = document.querySelectorAll('.artists__record__img');

//Доп информация в рекордах
var infos_score = document.querySelectorAll('.info__score');
var texts_name = document.querySelectorAll('.text__name');
var texts_author = document.querySelectorAll('.text__author');
var texts_year = document.querySelectorAll('.text__year');

//Доп переменные

var new_array_images;

// Функция кнопок score
btns_score.forEach((btn_score) => {
    btn_score.addEventListener('click', function(){
        var step = 0;
        var i = 0;
        for(i = idScoreBtn - 10; i < idScoreBtn; i++){
            console.log('i = '+i);
            console.log('id picture = '+images[i]['imageNum']);
            if(correct_answers[i] == true){
                artists_record_imgs[step].style.filter = "none";
            }else{
                artists_record_imgs[step].style.filter = "grayscale(100%)";
            }
            artists_record_imgs[step].style.backgroundImage = "url('assets/images/full/"+images[i]['imageNum']+"full.jpg')";
            texts_name[step].textContent = images[i]['name'];
            texts_author[step].textContent = images[i]['author'];
            texts_year[step].textContent = images[i]['year'];
            step++
        }
    });
})


cards_record_art.forEach((card_record_art) => {
    card_record_art.addEventListener('click', function(){
        infos_score[card_record_art.id-1].classList.toggle('info__score__show');
    });
})