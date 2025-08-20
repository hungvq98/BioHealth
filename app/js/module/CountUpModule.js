import { CountUp } from "../../assets/library/countUp/countUp.min.js";
export default function CountUpModule() {
    const numElements = document.querySelectorAll(".countNum");
    let hasAnimated = new Set(); // Để theo dõi phần tử đã chạy CountUp

    function startCountUp(v) {
        let n = parseInt(v.textContent.replace(/\./g, '')) || 0;
        let countUp = new CountUp(v, n, {
            separator: ".",
            decimal: '.',
            duration: 3,
        });

        if (!hasAnimated.has(v)) {
            countUp.start();
            hasAnimated.add(v); // Đánh dấu là đã chạy

            // Gọi hàm Del() khi số bắt đầu chạy
            Del();
        }
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
            if (rect.top < window.innerHeight * 0.8 && !hasAnimated.has(v)) {
                startCountUp(v);
                v.classList.add("is-inview"); // Thêm class khi vào viewport
            }
        });
    }

    // Lắng nghe sự kiện scroll để kích hoạt hiệu ứng
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Kiểm tra ngay khi tải trang
}
