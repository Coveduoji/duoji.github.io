document.addEventListener('mousemove', function (e) {
    var cursor1 = document.querySelector('.circle-cursor1');
    var cursor2 = document.querySelector('.circle-cursor2');

    cursor1.style.transform = cursor2.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
