var dashbox = document.getElementById('dashbox');
document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    dashbox.style.top = y + 'px';
    dashbox.style.left = x + 'px';
})