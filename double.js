function getStorage() {
    var userPhone = localStorage.getItem('phone');
    var userTitle = localStorage.getItem('title');
    console.log(userPhone);
    console.log(userTitle);
}

function inStorage(phone) {
    var phoneVal = phone;
    var currentLocInit = window.location.pathname.split('/');
    localStorage.setItem('phone', phoneVal);
    localStorage.setItem('title', currentLocInit);
    getStorage();
}

function isDouble(phone, button, clikedForm) {
    var CkickedForm = clikedForm;
    var phoneVal = phone;
    var butt = button;
    var title = window.location.pathname.split('/');
    if ((phoneVal == localStorage.getItem('phone')) && (title == localStorage.getItem('title'))) {
        alert('You have already ordered');
        /*button.css('display', 'none');*/
        var Forms = $('form').length;
        for (var i = 0; i < Forms; i++) {
            $('form')[i].reset();
            console.log('reseted in script');
        }

        return true;
    } else {
        console.log("No double");
        button.css('display', 'block');

        return false;
    }
}