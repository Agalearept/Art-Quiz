import {images} from "./images.js";
import {cards_done_pic, idBtn, main_screen, togglehidden} from "./script__change__content.js";
import {cards_score, pagination_items, correct_answers, getRandomInt, getMeRandomElements, showPopup } from "./script__questions__actor.js";
import {popup_button, popup_picture, popup_picture_year, popup_picture_author, popup_picture_name, popup_answer, overlay_popup, popup_inner} from "./script__questions__actor.js";

export let cards_pic = document.getElementsByClassName('card__pic');//Доступные категории с картинами
export let answers_img = document.querySelectorAll('.question__pic__img');
export let question_txt = document.querySelectorAll('.question__txt');

let flag = 0;//Правильный ответ либо нет
export let chosen_card_pic;//Новый массив картинок
export let questions_pic;//Новый массив картинок






//Функция первого появления вопроса
for (let card_done_pic of cards_done_pic) {
    
    card_done_pic.addEventListener('click', function(){
        chosen_card_pic = parseInt(card_done_pic.id);
        for(var i = 0; i<=10;i++)
        {
            pagination_items[i].classList.remove("pagination__item__correct");
            pagination_items[i].classList.remove("pagination__item__incorrect")
            pagination_items[i].classList.add("pagination__item__null")
            
        }
        var res = getMeRandomElements(images, 4);
        questions_pic = parseInt(idBtn)-10;
        var j = 0;//Счетчик ответов
        var i = getRandomInt();//Выбор правильного номера ответа
        question_txt.textContent = "Какую картину написал "+images[questions_pic]['author']+"?";

        answers_img.forEach((answer_img)=>{
            if(i==j){
                answer_img.style.backgroundImage = "url('assets/images/full/"+images[questions_pic]['imageNum']+"full.jpg')";
            }else{
                answer_img.style.backgroundImage = "url('assets/images/full/"+res[j]['imageNum']+"full.jpg')";
            }
            j++
        })
    });
}

answers_img.forEach((answer_pic)=>{
    answer_pic.addEventListener('click', function(){
        if(parseInt(answer_pic.style.backgroundImage.match(/\d+/)) == images[questions_pic]['imageNum']){
            
            flag = true;
            if(correct_answers[images[questions_pic]['imageNum']] != true){
                correct_answers[images[questions_pic]['imageNum']] = true;
                cards_score[idBtn/10-1].textContent = parseInt(cards_score[idBtn/10-1].textContent)+1;

            }
            pagination_items[questions_pic+10-parseInt(idBtn)].classList.replace("pagination__item__null", "pagination__item__correct");
            pagination_items[questions_pic+10-parseInt(idBtn)].classList.replace("pagination__item__incorrect", "pagination__item__correct")
        }else{
            flag = false;
            pagination_items[questions_pic+10-parseInt(idBtn)].classList.replace("pagination__item__null", "pagination__item__incorrect")
        }
        showPopup(flag);
    });
})

//Функция кнопки popup'а
// popup_button.addEventListener('click', function(){
//     if(flag==true){
//         popup_answer.classList.remove('popup__answer__correct')
//     }else{
//         popup_answer.classList.remove('popup__answer__incorrect')
//     }
//     if(idBtn>=120){
//         if(questions_pic+10-parseInt(idBtn)==9){
//             var flag_change_cat=false;
//             main_screen.style.left = '-2000px';
//             popup_inner.classList.remove('popup__show');
//             for(var i = questions_pic-10;i<=questions_pic;i++){
//                 if(correct_answers[i]==true){
//                     flag_change_cat = true;
//                 }
//             }
//             if(flag_change_cat==true){
//                 for (let card_pic of cards_pic) {
//                     if(card_pic.id == chosen_card_pic+10){
//                          card_pic.classList.add('card__done');
//                          card_pic.querySelector('.pictures__img').style.filter = "none";
//                     }
//                 }
//             }
//             setTimeout(() => togglehidden(cat_pic, quest_pic), 1000); 
//             setTimeout(() => overlay_popup.classList.remove('overlay__show'), 1000); 
//         }else{
//             main_screen.style.left = '-2000px';
//             popup_inner.classList.remove('popup__show');
//             setTimeout(() => changeQuestion(questions_art), 1000)
//             questions_art++;
//         }
//     }
// });