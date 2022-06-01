import {images} from "./images.js";
import { btns_score, idScoreBtn } from "./script__change__content.js";
import { correctAnswers, correct_answers } from "./script__questions.js";

//Картинки в рекордах
let cards_record_art = document.querySelectorAll('.card__record__art');
export let artists_record_imgs = document.querySelectorAll('.artists__record__img');

//Доп информация в рекордах
let infos_score = document.querySelectorAll('.info__score');
let texts_name = document.querySelectorAll('.text__name');
let texts_author = document.querySelectorAll('.text__author');
let texts_year = document.querySelectorAll('.text__year');

// Функция кнопок score
btns_score.forEach((btn_score) => {
    btn_score.addEventListener('click', function(){
        let step = 0;
        let i = 0;
        for(i = idScoreBtn - 10; i < idScoreBtn; i++){
            if(correctAnswers[i] == true){
                artists_record_imgs[step].style.filter = "none";
            }else{
                artists_record_imgs[step].style.filter = "grayscale(100%)";
            }
            artists_record_imgs[step].style.backgroundImage = "url('src/images/full/"+images[i]['imageNum']+"full.jpg')";
            texts_name[step].textContent = images[i]['name'];
            texts_author[step].textContent = images[i]['author'];
            texts_year[step].textContent = images[i]['year'];
            step++
        }
    });
})

//Показ доп информации по картинке
cards_record_art.forEach((card_record_art) => {
    card_record_art.addEventListener('click', function(){
        infos_score[card_record_art.id-1].classList.toggle('info__score__show');
    });
})