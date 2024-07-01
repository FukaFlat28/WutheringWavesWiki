function togglePopup(e){

    const className = e.querySelector("span").innerHTML.toLowerCase();
    const popUpELement = document.querySelector("." + className + "-popup." + className);

    var blurr = document.getElementById('blurr');
    blurr.classList.toggle('active');

    popUpELement.classList.toggle('active');
}

function closeTogglePopup(e) {
    const closeButton = e.parentElement;

    var blurr = document.getElementById('blurr');
    blurr.classList.toggle('active');

    closeButton.classList.toggle('active');
    
}