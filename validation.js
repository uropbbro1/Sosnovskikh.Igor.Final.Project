//Проверка ввода имени пользователя
function checkFirst() {
    let first = document.getElementById("first_name").value;
    let regexRu = /[\u0401\u0451\u0410-\u044f]{2,}$/;
    let regexEn = /^[a-zA-Z\s]{2,}$/

    if (regexRu.test(first) || regexEn.test(first)) {
        document.getElementById("first_name_check").style.color = "green";
        document.getElementById("first_name_check").innerHTML = String.fromCharCode(10003);
        return true;
    }
    else {
        document.getElementById("first_name_check").style.color = "red";
        document.getElementById("first_name_check").innerHTML = "Имя должно состоять не менее чем из двух символов";
        return false;
    }
}


//Проверка ввода фамилии пользователя
function checkLast() {
    let lastName = document.getElementById("last_name").value;
    let regexRu = /[\u0401\u0451\u0410-\u044f]{2,20}$/;
    let regexEn = /^[a-zA-Z\s]{2,20}$/;

    if (regexRu.test(lastName) || regexEn.test(lastName)) {
        document.getElementById("last_name_check").style.color = "green";
        document.getElementById("last_name_check").innerHTML = String.fromCharCode(10003);
        return true;
    }
    else {
        document.getElementById("last_name_check").style.color = "red";
        document.getElementById("last_name_check").innerHTML = "фамилия должна состоять не менее чем из двух символов";
        return false;
    }
}

//Проверка ввода телефона пользователя
function checkPhone() {
    let phone = document.getElementById("phone").value;
    let regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) { 
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = String.fromCharCode(10003);
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "телефон должен быть в формате xxx-xxx-xxx";
        return false;
    }
}

//Проверка ввода адреса доставки пользователя
function checkDest() {
    let dest = document.getElementById("dest").value;
    let regexRu = /[\u0401\u0451\u0410-\u044f\.\,\d\ ]{5,50}$/;
    let regexEn = /^[a-zA-Z\s\.\,\d\ ]{5,50}$/;

    if (regexRu.test(dest) || regexEn.test(dest)) {
        document.getElementById("dest_Check").style.color = "green";
        document.getElementById("dest_Check").innerHTML = String.fromCharCode(10003);
        return true;
    }
    else {
        document.getElementById("dest_Check").style.color = "red";
        document.getElementById("dest_Check").innerHTML = "адрес должен состоять не менее чем из 5 символов и не более 50";
        return false;
    }
}

//собираю все заполненные данные для вывода деталей заказа
function outputData() {
    let first = document.getElementById("first_name").value;
    let last = document.getElementById("last_name").value;
    let dest = document.getElementById("dest").value;
    let phone = document.getElementById("phone").value;
    let quantity = document.getElementById("quantity").value;
    let paymethod = document.getElementById("paymethod").value;

    //проверка заполнения всех полей
    if (first != "" && last != "" && dest != "" && phone != "" && quantity != "") {
        document.getElementById("summary").style.color = "white";
        document.getElementById("summary").innerHTML = "Привет, " + first + " " + last + "!";
        document.getElementById("summary").innerHTML += "<p>Ваш заказ был успешно размещен. Мы свяжемся с вами в ближайшее время. Детали вашего заказа описаны ниже: </p>";
        document.getElementById("summary").innerHTML += "<p>Номер телефона: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Адрес: " + dest + ".</br>";
        document.getElementById("summary").innerHTML += "Количество: " + quantity + ".</br>";
        document.getElementById("summary").innerHTML += "Метод оплаты: " + paymethod + ".</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>Мы рады что вы пользуетесь нашими услугами :)</p>";
        document.getElementById("summary").innerHTML += "<a href='/index.html'>На главную</a>"
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Заполните все поля!";
    }
}




