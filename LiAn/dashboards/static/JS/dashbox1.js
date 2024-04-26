const dashbox = document.getElementById('dashbox')
let isResizing = false;
let initialWidth, initialHeight;

dashbox.addEventListener('mousedown', function(event) {
    if(event.target == dashbox) {
        isResizing = true;
        initialWidth = dashbox.offsetWidth - event.clientX;
        initialHeight = dashbox.offsetHeight - event.clientY;
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
    }
})

// ---------- Functions ----------
function resize(event) {
    if(isResizing){
        dashbox.style.width = event.clientX - initialWidth + 'px';
        dashbox.style.height = event.clientY - initialHeight + 'px';
    }
}

function stopResize() {
    isResizing = false;
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
}
