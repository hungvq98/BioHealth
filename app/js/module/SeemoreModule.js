export default function SeemoreModule() {
    const seemoreJS = document.querySelectorAll('.seemoreJS');
    if(seemoreJS.length > 0) {
        seemoreJS.forEach(wrapper => {
            const init = parseInt(wrapper.dataset.init) || 0;
            const show = parseInt(wrapper.dataset.show) || 0;
            const moreText = wrapper.dataset.more || "Xem thêm";
            const lessText = wrapper.dataset.less || "Thu gọn";
    
            const items = wrapper.querySelectorAll(".seemoreJS-item");
            let visibleCount = init;
    
            // Ẩn bớt item ban đầu
            items.forEach((item, i) => {
                item.style.display = (i < init) ? "" : "none";
            });
    
            // Tạo nút
            if (items.length > init) {
                const btn = document.querySelector(".seemoreJS-btn");
                const btnText = btn.querySelector(".txt");
                btnText.textContent = moreText;
    
                btn.addEventListener("click", () => {
                    if (visibleCount < items.length) {
                        // Hiện thêm item
                        let nextCount = Math.min(visibleCount + show, items.length);
                        for (let i = visibleCount; i < nextCount; i++) {
                            items[i].style.display = "";
                        }
                        visibleCount = nextCount;
    
                        // Nếu đã hiện hết -> đổi nút thành "Thu gọn"
                        if (visibleCount >= items.length) {
                            btnText.textContent = lessText;
                        }
                    } else {
                        // Thu gọn
                        items.forEach((item, i) => {
                            item.style.display = (i < init) ? "" : "none";
                        });
                        visibleCount = init;
                        btnText.textContent = moreText;
                    }
                });
            }
        });
    }

}