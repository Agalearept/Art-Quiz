import images from "./images.js";

var art_img = document.querySelector('.question__art__img');//картинка вопрос
var answers_art = document.querySelectorAll('.answer__art');//ответы
var pagination_items = document.querySelectorAll('.pagination__item');//Кружки ответов

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
var correct_answers;//Количество правильных ответов
var flag = 0;//Правильный ответ либо нет
var new_array_images;//Новый массив картинок

//Получение Нужных элементов из массива
var changeImages = function(idel){
    var newImages = [];
    var j = 0;
    for(var i = idel-10;i<idel;i++){
        newImages[j] = images[i];
        j++;
    }
    return newImages;
}

// Выбор случайного ответа
function getRandomInt() {
    return Math.floor(Math.random() * (3 - 0)) + 0;
}

function changeQuestion(idQuestion){
    var res = getMeRandomElements(images, 4);
    var j = 0;//Счетчик ответов
    var i = getRandomInt();//Выбор правильного номера ответа
    art_img.style.backgroundImage = "url('assets/images/full/"+new_array_images[idQuestion]['imageNum']+"full.jpg')";
    answers_art.forEach((answer_art)=>{
        if(i==j){
            answer_art.textContent = new_array_images[idQuestion]['author'];
        }else{
            answer_art.textContent = res[j]['author'];
        }
        j++
    })
    overlay_popup.classList.remove('overlay__show');
    main_screen.style.left = '0';
}

//Выбор случайных элементов
var getMeRandomElements = function(sourceArray, neededElements) {
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
        var res = getMeRandomElements(images, 4);
        new_array_images = changeImages(idBtn);
        questions_art = idBtn-10;
        var j = 0;//Счетчик ответов
        var i = getRandomInt();//Выбор правильного номера ответа
        art_img.style.backgroundImage = "url('assets/images/full/"+new_array_images[questions_art]['imageNum']+"full.jpg')";
        answers_art.forEach((answer_art)=>{
            if(i==j){
                answer_art.textContent = new_array_images[questions_art]['author'];
            }else{
                answer_art.textContent = res[j]['author'];
            }
            j++
        })
    });
}

//Функция появления popup'а
function showPopup(flag){
    if(flag==true){
        popup_answer.classList.add('popup__answer__correct')
    }else{
        popup_answer.classList.add('popup__answer__incorrect')
    }
    popup_picture.style.backgroundImage = "url('assets/images/full/"+new_array_images[questions_art]['imageNum']+"full.jpg')";
    popup_picture_name.textContent = new_array_images[questions_art]['name'];
    popup_picture_author.textContent = new_array_images[questions_art]['author'];
    popup_picture_year.textContent = new_array_images[questions_art]['year'];
    overlay_popup.classList.add('overlay__show')
    popup_inner.classList.add('popup__show')
}

//обработчик ответов
answers_art.forEach((answer_art)=>{
    answer_art.addEventListener('click', function(){
        if(answer_art.textContent==new_array_images[questions_art]['author']){
            flag = true;
            correct_answers++;
            pagination_items[questions_art].classList.replace("pagination__item__null", "pagination__item__correct");
            showPopup(flag);
        }else{
            flag = false;
            pagination_items[questions_art].classList.replace("pagination__item__null", "pagination__item__incorrect")
            showPopup(flag);
        }

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
    questions_art++;
});

