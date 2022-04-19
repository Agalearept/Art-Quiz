import {images} from "./images.js";
import {cards_done_art, idBtn, main_screen, togglehidden} from "./script__change__content.js";


let art_img = document.querySelector('.question__art__img');//картинка вопрос
let answers_art = document.querySelectorAll('.answer__art');//ответы
export let pagination_items = document.querySelectorAll('.pagination__item');//Кружки ответов
let cards_art = document.getElementsByClassName('card__art');//Доступные категории с картинами
let cards_pic = document.getElementsByClassName('card__pic');//Доступные категории с картинами
let cards_score = document.querySelectorAll('.card__score');

//Элемента popup'а
let popup = document.querySelector('.popup');
let overlay_popup = document.querySelector('.overlay');
let popup_inner = document.querySelector('.popup__inner');
let popup_answer = document.querySelector('.popup__answer');
let popup_picture = document.querySelector('.popup__picture');
let popup_picture_name = document.querySelector('.popup__picture__name');
let popup_picture_author = document.querySelector('.popup__picture__author');
let popup_picture_year = document.querySelector('.popup__picture__year');
let popup_button = document.querySelector('.popup__button');

//Вспомогательны переменные
let questions_art;//Количество вопросов
export let correct_answers = [];//Количество правильных ответов
let flag = 0;//Правильный ответ либо нет
export let new_array_images;//Новый массив картинок
export let chosen_card_art;//Новый массив картинок

for(var i=0;i<images.length;i++){
    correct_answers[i] = false;
}



// Выбор случайного ответа
export function getRandomInt() {
    return Math.floor(Math.random() * (3 - 0)) + 0;
}

export function changeQuestion(idQuestion){
    var res = getMeRandomElements(images, 4);
    var j = 0;//Счетчик ответов
    var i = getRandomInt();//Выбор правильного номера ответа
    art_img.style.backgroundImage = "url('assets/images/full/"+images[idQuestion]['imageNum']+"full.jpg')";
    answers_art.forEach((answer_art)=>{
        if(i==j){
            answer_art.textContent = images[idQuestion]['author'];
        }else{
            answer_art.textContent = res[j]['author'];
        }
        j++
    })
    overlay_popup.classList.remove('overlay__show');
    main_screen.style.left = '0';
}

//Выбор случайных элементов
export let getMeRandomElements = function(sourceArray, neededElements) {
    var result = [];
    for (var i = 0; i < neededElements; i++) {
    var index = Math.floor(Math.random() * sourceArray.length);
        if(index==questions_art){
            i--;
        }else{
            result.push(sourceArray[index]);
        }
    }
    return result;
}

//Функция первого появления вопроса
for (let card_done_art of cards_done_art) {
    
    card_done_art.addEventListener('click', function(){
        chosen_card_art = parseInt(card_done_art.id);
        for(var i = 0; i<=10;i++)
        {
            pagination_items[i].classList.remove("pagination__item__correct");
            pagination_items[i].classList.remove("pagination__item__incorrect")
            pagination_items[i].classList.add("pagination__item__null")
            
        }
        var res = getMeRandomElements(images, 4);
        questions_art = parseInt(idBtn)-10;
        var j = 0;//Счетчик ответов
        var i = getRandomInt();//Выбор правильного номера ответа
        art_img.style.backgroundImage = "url('assets/images/full/"+images[questions_art]['imageNum']+"full.jpg')";

        answers_art.forEach((answer_art)=>{
            if(i==j){
                answer_art.textContent = images[questions_art]['author'];
            }else{
                answer_art.textContent = res[j]['author'];
            }
            j++
        })
    });
}

//Функция появления popup'а
export function showPopup(flag){
    if(flag==true){
        popup_answer.classList.add('popup__answer__correct')
    }else{
        popup_answer.classList.add('popup__answer__incorrect')
    }
    popup_picture.style.backgroundImage = "url('assets/images/full/"+images[questions_art]['imageNum']+"full.jpg')";
    popup_picture_name.textContent = images[questions_art]['name'];
    popup_picture_author.textContent = images[questions_art]['author'];
    popup_picture_year.textContent = images[questions_art]['year'];
    overlay_popup.classList.add('overlay__show')
    popup_inner.classList.add('popup__show')
}

//обработчик ответов
answers_art.forEach((answer_art)=>{
    answer_art.addEventListener('click', function(){
        if(answer_art.textContent==images[questions_art]['author']){
            flag = true;
            if(correct_answers[images[questions_art]['imageNum']] != true){
                correct_answers[images[questions_art]['imageNum']] = true;
                cards_score[idBtn/10-1].textContent = parseInt(cards_score[idBtn/10-1].textContent)+1;

            }
            pagination_items[questions_art+10-parseInt(idBtn)].classList.replace("pagination__item__null", "pagination__item__correct");
            pagination_items[questions_art+10-parseInt(idBtn)].classList.replace("pagination__item__incorrect", "pagination__item__correct")
        }else{
            flag = false;
            pagination_items[questions_art+10-parseInt(idBtn)].classList.replace("pagination__item__null", "pagination__item__incorrect")
        }
        showPopup(flag);
    });
})

//Функция кнопки popup'а
popup_button.addEventListener('click', function(){
    if(flag==true){
        popup_answer.classList.remove('popup__answer__correct')
    }else{
        popup_answer.classList.remove('popup__answer__incorrect')
    }
    if(questions_art+10-parseInt(idBtn)==9){
        var flag_change_cat=false;
        main_screen.style.left = '-2000px';
        popup_inner.classList.remove('popup__show');
        for(var i = questions_art-10;i<=questions_art;i++){
            if(correct_answers[i]==true){
                flag_change_cat = true;
            }
        }
        if(flag_change_cat==true){
            for (let card_art of cards_art) {
                if(card_art.id == chosen_card_art+10){
                     card_art.classList.add('card__done');
                     card_art.querySelector('.artists__img').style.filter = "none";
                }
            }
        }
        setTimeout(() => togglehidden(cat_art, quest_art), 1000); 
        setTimeout(() => overlay_popup.classList.remove('overlay__show'), 1000); 
    }else{
        main_screen.style.left = '-2000px';
        popup_inner.classList.remove('popup__show');
        setTimeout(() => changeQuestion(questions_art), 1000)
        questions_art++;
    }
});

