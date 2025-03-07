document.addEventListener('mousemove', function(e) {
    const highlight = document.querySelector('.cursorballhighlight');
    highlight.style.left = `${e.clientX  }px`;
    highlight.style.top = `${e.clientY}px`;
});