var elements = {
    "1" : {
        "img" : "images/burger_slider.png",
        "name" : "Бургеры",
    },
    "2" : {
        "img" : "images/kfc_slider.png",
        "name" : "Блюда из курицы",
    },
    "3" : {
        "img" : "images/steak_slider.png",
        "name" : "Горячие блюда",
    },
    "4" : {
        "img" : "images/snacks_slider.png",
        "name" : "Закуски",
    },
    "5" : {
        "img" : "images/salad_slider.png",
        "name" : "Салаты",
    },
    "6" : {
        "img" : "images/dessert_slider.png",
        "name" : "Десерты",
    },
    
};

var element = '';
for (var key in elements) {
    element+='    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">';
    element+='        <div class="block">';
    element+='            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 image">';
    element+='                <img src="'+elements[key].img+'" alt="" class="img-fluid">';
    element+='            </div>';
    element+='            <h4>'+elements[key].name+'</h4>';
    element+='        </div>';
    element+='    </div>';
};

document.getElementById('element1').innerHTML = element;

// ===================================================================================

