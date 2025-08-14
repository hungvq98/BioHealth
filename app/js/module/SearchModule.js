export default function SearchModule() {
    const hdSIcon = document.querySelector('.searchJS');
    const hdSForm = document.querySelector('.searchBoxJs');
    let isOpen = false;
    if (hdSIcon) {
        hdSIcon.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
                hdSForm.classList.add('open')
            } else {
                hdSForm.classList.remove('open')
            }
        })
        window.addEventListener('click', (e) => {
            if (!e.target.closest('.searchJS') && !e.target.closest('.searchBoxJs')) {
                isOpen = false;
                hdSForm.classList.remove('open')
            }
        })
    }

}