var countryCodes = {
    RU: {
        names: ["Василиса, из г. Москва", "Виктория, из г. Магнитогорск", "Елена, из г. Серпухов", "Ирина, из г. Рязань", "Надежда, из г. Иркутск"],
        src: ["img/roses_mobile.png", "img/main_circle.png", "img/sert_1.png", "img/roses_petals.png", "img/roses_video.png", "img/roses.png", "img/notebook.png", "img/unpacked_box.png", "img/roses_petals.png"],
        imgBg: "url(./img/roses_circle_petals.png)",
        popup: "img/roses.png"
    },
    KZ: {
        names: ["Куаныш, из г. Алматы", "Гульдара, из г. Нур-Султан", "Фатима, из г. Атырау", "Нагиша, из г. Павлодар", "Акша, из г. Усть-Каменогорск"],
        src: ["img/roses_mobile_kz.png", "img/main_circle_kz.png", "img/sert_1_kz.png", "img/roses_petals_kz.png", "img/roses_video_kz.png", "img/roses_kz.png", "img/notebook_kz.png", "img/unpacked_box_kz.png", "img/roses_petals_kz.png"],
        imgBg: "url(./img/roses_circle_petals_kz.png)",
        popup: "img/roses_kz.png",
    },
};


var change = function change(e) {
    var names = document.querySelectorAll('[class*="feed-name"]'),
    productImg = document.querySelectorAll('.product-img'),
    recommendations = document.querySelector('.recommendations__wrapper'),
    popupImg =  document.querySelectorAll('.popup-img');
    
    names.forEach(function(human, i) {
       if(human) {
            human.innerHTML = countryCodes[e].names[i];
       }
    });
    productImg.forEach(function(img, i) {
        if(img) {
            img.src = countryCodes[e].src[i];
        }
     });
     popupImg.forEach(function(img) {
         if(img) {
            img.src = countryCodes[e].popup;
         }
     })
     recommendations.style.backgroundImage = countryCodes[e].imgBg;
    
}
selectors.forEach(function (elem) {
    elem.addEventListener('change', function (e) {
        if(Object.keys(countryCodes).includes(e.target.value)) {
            change(e.target.value);
        }
    });
});

if(Object.keys(countryCodes).includes(selectors[0].value)) {
    change(selectors[0].value);
}