export default function ButtonModule() {
    const buttons = document.querySelectorAll('.buttons');
    if (buttons) {
        if (window.innerWidth < 800) {
            buttons.forEach(item => {
                item.addEventListener('click', () => {
                    centerButton(item)
                })
                if (item.classList.contains("active")) {
                    centerButton(item)
                }
                if (item.classList.contains("is-active")) {
                    centerButton(item)
                }
            })
            function centerButton(button) {
                const screenWidth = window.innerWidth;
                const buttonRect = button.getBoundingClientRect();
                const buttonCenter = buttonRect.left + buttonRect.width / 2;

                const scrollContainer = document.querySelectorAll('.scrollContainer');
                const scrollAmount = buttonCenter - screenWidth / 2;
                scrollContainer.forEach(scrollContainers => {
                    scrollContainers.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                })

                // const buttons = document.querySelectorAll('.partner-btn-item');
                // buttons.forEach((btn) => {
                //     btn.style.transform = 'scale(1)';
                // });

                // button.style.transform = 'scale(1.2)';
            }
        }
    }
    const slider = document.querySelectorAll(".scrollContainer");
    let isDown = false;
    let startX;
    let scrollLeft;

    if (slider) {
        slider.forEach((element) => {
            element.addEventListener("mousedown", (e) => {
                isDown = true;
                element.classList.add("active");
                startX = e.pageX - element.offsetLeft;
                scrollLeft = element.scrollLeft;
            });
            element.addEventListener("mouseleave", () => {
                isDown = false;
                element.classList.remove("active");
            });
            element.addEventListener("mouseup", () => {
                isDown = false;
                element.classList.remove("active");
            });
            element.addEventListener("mousemove", (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - element.offsetLeft;
                const walk = ((x - startX) * 1) / 2;
                element.scrollLeft = scrollLeft - walk;
                // console.log(scrollLeft - walk)
            });
        });
    }
}