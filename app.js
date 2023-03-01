const searchAndDestroy = async () => {
    if (window.location.href.match(/^https:\/\/www\.disneyplus.com\/video\/[a-z0-9-]+$/)) {
        while (!document.querySelector('video')) {
            await new Promise(resolve => requestAnimationFrame(resolve))
        }

        document.querySelectorAll('video[disablepictureinpicture]')
            .forEach(el => {
                el.removeAttribute('disablepictureinpicture');
            });
    }
}

(() => { searchAndDestroy() })();

document.addEventListener('animationend', () => {
    searchAndDestroy();
});
