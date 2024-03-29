import {images} from "./images.js";
import {cards_done_art, cards_done_pic, idBtn, main_screen, togglehidden} from "./script__change__content.js";

let art_img = document.querySelector('.question__art__img');//Картинка вопрос для писателей
export let question_txt = document.getElementById('question__txt');//Текст вопрос для картин

let answers_art = document.querySelectorAll('.answer__art');//Ответы текст для писателей
export let answers_img = document.querySelectorAll('.question__pic__img');//Ответ картинки для картин

export let pagination_items = document.querySelectorAll('.pagination__item');//Кружки ответов

let cards_art = document.getElementsByClassName('card__art');//Доступные категории с картинами
export let cards_pic = document.getElementsByClassName('card__pic');//Доступные категории с картинами

export let cards_score = document.querySelectorAll('.card__score');//Рекорд в уровне

//Элемента popup'а
let popup = document.querySelector('.popup');
export let overlay_popup = document.querySelector('.overlay');
export let popup_inner = document.querySelector('.popup__inner');
export let popup_answer = document.querySelector('.popup__answer');
export let popup_picture = document.querySelector('.popup__picture');
export let popup_picture_name = document.querySelector('.popup__picture__name');
export let popup_picture_author = document.querySelector('.popup__picture__author');
export let popup_picture_year = document.querySelector('.popup__picture__year');
export let popup_button = document.querySelector('.popup__button');

//Вспомогательны переменные
export let questions_art;//Количество вопросов для писателей
export let questions_pic;//Количество вопросов для картин
export let correct_answers = [];//Количество правильных ответов
let flag = 0;//Правильный ответ либо нет
export let new_array_images;//Новый массив картинок
export let chosen_card_art;//Выбранный уровень для писателей
export let chosen_card_pic;//выбранный уровень для картин

//Формирование массива с ответами
for(let i=0;i<images.length;i++){
    correct_answers[i] = false;
}



// Выбор случайного ответа
export function getRandomInt() {
    return Math.floor(Math.random() * (3 - 0)) + 0;
}


//Функция смены вопроса для писателей
export function changeQuestion(idQuestion){
    let res = getMeRandomElements(images, 4);
    let j = 0;//Счетчик ответов
    let i = getRandomInt();//Выбор правильного номера ответа
    art_img.style.backgroundImage = "url('src/images/full/"+images[idQuestion]['imageNum']+"full.jpg')";
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

//Функция смены вопроса для картин
export function changeQuestionpic(idQuestion){
    console.log(idQuestion);
    let res = getMeRandomElements(images, 4);
    let j = 0;//Счетчик ответов
    let i = getRandomInt();//Выбор правильного номера ответа
    question_txt.textContent = "Какую картину написал "+images[idQuestion]['author']+"?";
    question_txt.innerHTML = "Какую картину написал "+images[idQuestion]['author']+"?";
    answers_img.forEach((answer_img)=>{
        if(i==j){
            answer_img.style.backgroundImage = "url('src/images/full/"+images[idQuestion]['imageNum']+"full.jpg')";
        }else{
            answer_img.style.backgroundImage = "url('src/images/full/"+res[j]['imageNum']+"full.jpg')";
        }
        j++
    })
    overlay_popup.classList.remove('overlay__show');
    main_screen.style.left = '0';
} 

//Выбор случайных элементов
export let getMeRandomElements = function(sourceArray, neededElements) {
    let result = [];
    for (let i = 0; i < neededElements; i++) {
    let index = Math.floor(Math.random() * sourceArray.length);
        if(index==questions_art){
            i--;
        }else{
            result.push(sourceArray[index]);
        }
    }
    return result;
}

//Функция первого появления вопроса для писателей
for (let card_done_art of cards_done_art) {
    
    card_done_art.addEventListener('click', function(){
        chosen_card_art = parseInt(card_done_art.id);
        for(let i = 0; i<=10;i++)
        {
            pagination_items[i].classList.remove("pagination__item__correct");
            pagination_items[i].classList.remove("pagination__item__incorrect")
            pagination_items[i].classList.add("pagination__item__null")
            
        }
        let res = getMeRandomElements(images, 4);
        questions_art = parseInt(idBtn)-10;
        let j = 0;//Счетчик ответов
        let i = getRandomInt();//Выбор правильного номера ответа
        art_img.style.backgroundImage = "url('src/images/full/"+images[questions_art]['imageNum']+"full.jpg')";

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
//Функция первого появления вопроса для картин
for (let card_done_pic of cards_done_pic) {
    
    card_done_pic.addEventListener('click', function(){
        chosen_card_pic = parseInt(card_done_pic.id);
        for(let i = 10; i<20;i++)
        {
            pagination_items[i].classList.remove("pagination__item__correct");
            pagination_items[i].classList.remove("pagination__item__incorrect")
            pagination_items[i].classList.add("pagination__item__null")
            
        }
        let res = getMeRandomElements(images, 4);
        questions_pic = parseInt(idBtn)-10;
        let j = 0;//Счетчик ответов
        let i = getRandomInt();//Выбор правильного номера ответа
        question_txt.textContent = "Какую картину написал "+images[questions_pic]['author']+"?";
        question_txt.innerHTML ="Какую картину написал "+images[questions_pic]['author']+"?";
        answers_img.forEach((answer_img)=>{
            if(i==j){
                answer_img.style.backgroundImage = "url('src/images/full/"+images[questions_pic]['imageNum']+"full.jpg')";
            }else{
                answer_img.style.backgroundImage = "url('src/images/full/"+res[j]['imageNum']+"full.jpg')";
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
    //Функция появления Попапа для писателей
    if(idBtn<=120){
        popup_picture.style.backgroundImage = "url('src/images/full/"+images[questions_art]['imageNum']+"full.jpg')";
        popup_picture_name.textContent = images[questions_art]['name'];
        popup_picture_author.textContent = images[questions_art]['author'];
        popup_picture_year.textContent = images[questions_art]['year'];
        overlay_popup.classList.add('overlay__show')
        popup_inner.classList.add('popup__show')
    }else{//Функция появления Попапа для картин
        popup_picture.style.backgroundImage = "url('src/images/full/"+images[questions_pic]['imageNum']+"full.jpg')";
        popup_picture_name.textContent = images[questions_pic]['name'];
        popup_picture_author.textContent = images[questions_pic]['author'];
        popup_picture_year.textContent = images[questions_pic]['year'];
        overlay_popup.classList.add('overlay__show')
        popup_inner.classList.add('popup__show')
    }
}

//обработчик ответов для писателей
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
//обработчик ответов для картин
answers_img.forEach((answer_pic)=>{
    answer_pic.addEventListener('click', function(){
        if(parseInt(answer_pic.style.backgroundImage.match(/\d+/)) == images[questions_pic]['imageNum']){
            
            flag = true;
            if(correct_answers[images[questions_pic]['imageNum']] != true){
                correct_answers[images[questions_pic]['imageNum']] = true;
                cards_score[idBtn/10-1].textContent = parseInt(cards_score[idBtn/10-1].textContent)+1;

            }
            pagination_items[questions_pic+20-parseInt(idBtn)].classList.replace("pagination__item__null", "pagination__item__correct");
            pagination_items[questions_pic+20-parseInt(idBtn)].classList.replace("pagination__item__incorrect", "pagination__item__correct")
        }else{
            flag = false;
            pagination_items[questions_pic+20-parseInt(idBtn)].classList.replace("pagination__item__null", "pagination__item__incorrect")
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
    //Функция Попапа для писателей
    if(idBtn<=120){
        if(questions_art+10-parseInt(idBtn)==9){
            let flag_change_cat=false;
            main_screen.style.left = '-2000px';
            popup_inner.classList.remove('popup__show');
            for(let i = questions_art-10;i<=questions_art;i++){
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
        //Функция кнопки Попапа для картин
    }else{
        if(questions_pic+10-parseInt(idBtn)==9){
            let flag_change_cat=false;
            main_screen.style.left = '-2000px';
            popup_inner.classList.remove('popup__show');
            for(let i = questions_pic-10;i<=questions_pic;i++){
                if(correct_answers[i]==true){
                    flag_change_cat = true;
                }
            }
            if(flag_change_cat==true){
                for (let card_pic of cards_pic) {
                    if(card_pic.id == chosen_card_pic+10){
                         card_pic.classList.add('card__done');
                         card_pic.querySelector('.pictures__img').style.filter = "none";
                    }
                }
            }
            setTimeout(() => togglehidden(cat_pic, quest_pic), 1000); 
            setTimeout(() => overlay_popup.classList.remove('overlay__show'), 1000); 
        }else{
            main_screen.style.left = '-2000px';
            popup_inner.classList.remove('popup__show');
            setTimeout(() => changeQuestionpic(questions_pic), 1000)
            questions_pic++;
        }
    }
});

