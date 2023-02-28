document.querySelectorAll('video[disablepictureinpicture]')
    .forEach(el => {
        el.removeAttribute('disablepictureinpicture');
    });
