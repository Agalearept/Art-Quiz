import {images} from "./images.js";
import {cards_done_art, idBtn, main_screen} from "./script__change__content.js";


var art_img = document.querySelector('.question__art__img');//картинка вопрос
var answers_art = document.querySelectorAll('.answer__art');//ответы
export var pagination_items = document.querySelectorAll('.pagination__item');//Кружки ответов

//Элемента popup'а
var popup = document.querySelector('.popup');
var overlay_popup = document.querySelector('.overlay');
var popup_inner = document.querySelector('.popup__inner');
var popup_answer = document.querySelector('.popup__answer');
var popup_picture = document.querySelector('.popup__picture');
var popup_picture_name = document.querySelector('.popup__picture__name');
var popup_picture_author = document.querySelector('.popup__picture__author');
var popup_picture_year = document.querySelector('.popup__picture__year');
var popup_button = document.querySelector('.popup__button');

//Вспомогательны переменные
var questions_art;//Количество вопросов
export var correct_answers = [];//Количество правильных ответов
var flag = 0;//Правильный ответ либо нет
export var new_array_images;//Новый массив картинок

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
    console.log(images[idQuestion]['imageNum']);
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
export var getMeRandomElements = function(sourceArray, neededElements) {
    var result = [];
    for (var i = 0; i < neededElements; i++) {
    var index = Math.floor(Math.random() * sourceArray.length);
        result.push(sourceArray[index]);
        sourceArray.splice(index, 1);
    }
    return result;
}

//Функция первого появления вопроса
for (let card_done_art of cards_done_art) {
    card_done_art.addEventListener('click', function(){
        for(var i = 0; i<=10;i++)
        {
            pagination_items[i].classList.remove("pagination__item__correct");
            pagination_items[i].classList.remove("pagination__item__incorrect")
            pagination_items[i].classList.add("pagination__item__null")
            
        }
        var res = getMeRandomElements(images, 4);
        console.log(parseInt(idBtn));//ПЕРВЫЙ ВЫВОД
        questions_art = parseInt(idBtn)-10;
        console.log(questions_art);//ВТОРОЙ ВЫВОД
        var j = 0;//Счетчик ответов
        var i = getRandomInt();//Выбор правильного номера ответа
        console.log(images[questions_art]['imageNum']);//ТРЕТИЙ ВЫВОД
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
            correct_answers[images[questions_art]['imageNum']]=true;
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
    main_screen.style.left = '-2000px';
    popup_inner.classList.remove('popup__show');
    setTimeout(() => changeQuestion(questions_art), 1000)
});

