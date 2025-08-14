import { CountUp } from "../../assets/library/countUp/countUp.min.js";
export default function CountUpModule() {
    const numElements = document.querySelectorAll(".countNum");

    const elementStates = new Map(); // Theo dõi trạng thái từng phần tử

    function startCountUp(v) {
        const target = v.getAttribute("data-target");
        if (!target) return;

        const n = parseInt(target.replace(/\./g, "")) || 0;

        v.textContent = "0"; // Reset về 0

        const countUp = new CountUp(v, n, {
            separator: ",",
            decimal: ".",
            duration: 3,
        });

        countUp.start();
        Del();
    }

    function Del() {
        document.querySelectorAll(".homes-count-item").forEach(item => {
            const numreal = item.querySelector(".numreal");
            const numfake = item.querySelector(".numfake");
            setTimeout(() => {
                if (numreal && numfake) {
                    numreal.style.display = "block";
                    numfake.style.display = "none";
                }
            }, 3000);
        });
    }

    function checkVisibility() {
        numElements.forEach(v => {
            const rect = v.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;

            const wasInView = elementStates.get(v) || false;

            if (inView && !wasInView) {
                // Chỉ khi nó từ ngoài viewport quay lại thì mới chạy
                startCountUp(v);
                elementStates.set(v, true); // Đánh dấu là đang trong viewport
            }

            if (!inView) {
                // Khi ra khỏi viewport, đánh dấu là đã rời đi
                elementStates.set(v, false);
            }
        });
    }
    if(window.innerWidth > 1200) {
        // window.addEventListener("scroll", checkVisibility);
        // checkVisibility(); // Kiểm tra ngay khi load
    }
}
