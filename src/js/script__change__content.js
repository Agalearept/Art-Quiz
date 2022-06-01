// КНОПКИ
//кнопки на основном экране
let art_cat = document.querySelector(".categories__artist");
let to_art_cat = document.querySelector(".toartcat");
let to_pic_cat = document.querySelector(".topictcat");
//кнопка на экранах с уровнями
let btns_home = document.querySelectorAll(".btn__home");
let btns_categories = document.querySelectorAll(".btn__categories");
export let btns_score = document.querySelectorAll(".btn__score");

// Экраны
export let main_screen = document.querySelector(".container");//Основной контейнер
let choise_treo = document.getElementById('choise_treo');//Основной экран
let cat_art = document.getElementById('cat_art');//Экран с категорией писателями
let cat_pic = document.getElementById('cat_pic');//Экран с категорией картинами
let score_art = document.getElementById('score_art');//Экран с рекордами писателя
let quest_art = document.getElementById('quest_art');//Экран с вопросом о писателях
let quest_pic = document.getElementById('quest_pic');//Экран с вопросом о картинах
export let cards_done_art = document.getElementsByClassName('card__art');//Доступные категории с писателями
export let cards_done_pic = document.getElementsByClassName('card__pic');//Доступные категории с картинами

//Остальне переменные
export let idScoreBtn;//id нажатой кнопки score
export let idBtn;//id нажатой кнопки

//Функция смены экранов
export function togglehidden(first, second){
    first.classList.toggle("hidden"); 
    second.classList.toggle("hidden");
    main_screen.style.left = '0';
}

export function enableCardsArt(){
    
}

// Функция кнопки с писателями
to_art_cat.addEventListener('click', function(){
    main_screen.style.left = '-2000px';
    setTimeout(() => togglehidden(cat_art, choise_treo), 1000);
});

// Функция кнопки с картинами
to_pic_cat.addEventListener('click', function(){
    main_screen.style.left = '-2000px';
    setTimeout(() => togglehidden(cat_pic, choise_treo), 1000);
});

// Функция конопок Home
btns_home.forEach((btn_home)=>{
    btn_home.addEventListener('click', function(){
        
        main_screen.style.left = '-2000px';
        if(cat_art.classList.contains("hidden") 
            && cat_pic.classList.contains("hidden")
                && quest_art.classList.contains("hidden")
                    &&quest_pic.classList.contains("hidden")){
                            setTimeout(() => togglehidden(score_art, choise_treo), 1000);
        }else if(cat_art.classList.contains("hidden") 
            && cat_pic.classList.contains("hidden")){
                if(quest_art.classList.contains("hidden")){
                    setTimeout(() => togglehidden(quest_pic, choise_treo), 1000);
                }
                else{
                    setTimeout(() => togglehidden(quest_art, choise_treo), 1000);
                }
        }else if(cat_art.classList.contains("hidden")){
            setTimeout(() => togglehidden(cat_pic, choise_treo), 1000);
        } else if(cat_pic.classList.contains("hidden")){
            setTimeout(() => togglehidden(cat_art, choise_treo), 1000);
        }
    
    });
})

//Функция кнопок Category
btns_categories.forEach((btn_categories)=>{
    btn_categories.addEventListener('click', function(){
        main_screen.style.left = '-2000px';
        if(quest_pic.classList.contains("hidden")
            && quest_art.classList.contains("hidden")){
                if(idScoreBtn<=120){
                    setTimeout(() => togglehidden(score_art, cat_art), 1000);
                }else{
                    setTimeout(() => togglehidden(score_art, cat_pic), 1000);
                }
        }else if(quest_pic.classList.contains("hidden")){
            setTimeout(() => togglehidden(cat_art, quest_art), 1000);
        }
        else{
            setTimeout(() => togglehidden(cat_pic, quest_pic), 1000);
        }
        
    });
})

//Функции кнопок выбора пака вопросов
//Вопросы писателей
for (let card_done_art of cards_done_art) {
    card_done_art.addEventListener('click', function(){
        if(card_done_art.classList.contains('card__done')){
            main_screen.style.left = '-2000px';
            setTimeout(() => togglehidden(cat_art, quest_art), 1000); 
            idBtn = parseInt(card_done_art.id);
        }
    });
}
//Вопросы картин
for (let card_done_pic of cards_done_pic) {
    card_done_pic.addEventListener('click', function(){
        if(card_done_pic.classList.contains('card__done')){
            main_screen.style.left = '-2000px';
            setTimeout(() => togglehidden(cat_pic, quest_pic), 1000);
            idBtn = parseInt(card_done_pic.id);
        }
    });
}

//Функия кнопок score
btns_score.forEach((btn_score)=>{
    btn_score.addEventListener('click', function(){
        idScoreBtn = btn_score.id;
        main_screen.style.left = '-2000px';
        
        if(idScoreBtn<=120){
            setTimeout(() => togglehidden(cat_art, score_art), 1000);
            setTimeout(() => togglehidden(cat_art, quest_art), 1000); 
        }else {
            setTimeout(() => togglehidden(cat_pic, score_art), 1000);
            setTimeout(() => togglehidden(cat_pic, quest_pic), 1000);
        }
    });
})

