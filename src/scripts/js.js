carousel = (function(){
    const box = document.querySelector('.carouselbox');
    const next = box.querySelector('.next');
    const prev = box.querySelector('.prev');
    const items = box.querySelectorAll('.content li');
    const counter = 0;
    const amount = items.length;
    const current = items[0];
    box.classList.add('active');

    function navigate(direction){
        current.classList.remove('current');
        counter = counter + direction;
        if(direction === -1 && counter < 0) {
            counter = amount - 1;
        }
        if(direction === 1&& !items[counter]) {
            counter = 0;
        }
        current = items[counter];
        current.classList.add('current');
    }
    next.addEventListener('click', function(ev) {
        navigate(1);
    });
    prev.addEventListener('click', function(ev) {
        navigate(-1);
    });
    navigate(0);
})();