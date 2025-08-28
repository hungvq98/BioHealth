export default function ProductFilter() {
    const rangeInputs = document.querySelectorAll(".range-input input");
    const progress = document.querySelector(".range-slider .progress");
    const priceInputs = document.querySelectorAll(".range-item .price");

    let priceGap = 10;

    function updateProgress() {
        const minVal = parseInt(rangeInputs[0].value) || 0;
        const maxVal = parseInt(rangeInputs[1].value) || 0;

        progress.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
        progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
    }

    function enforceConstraints() {
        let minVal = parseInt(rangeInputs[0].value) || 0;
        let maxVal = parseInt(rangeInputs[1].value) || 0;

        // Ràng buộc giá trị nếu người dùng nhập không hợp lệ
        if (maxVal - minVal < priceGap) {
            maxVal = minVal + priceGap;
        }

        rangeInputs[0].value = minVal;
        rangeInputs[1].value = maxVal;

        priceInputs[0].value = minVal;
        priceInputs[1].value = maxVal;

        updateProgress();
    }

    // Xử lý nhập liệu
    priceInputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            let value = e.target.value.replace(/[^\d]/g, ""); // Loại bỏ ký tự không phải số
            value = parseInt(value) || "";

            // Cho phép xóa toàn bộ giá trị
            e.target.value = value;
        });

        input.addEventListener("blur", () => {
            let value = parseInt(input.value) || 0;
            const otherIndex = index === 0 ? 1 : 0;

            if (index === 0) {
                // Với min: đảm bảo không vượt quá max - gap
                value = Math.min(value, parseInt(priceInputs[otherIndex].value) - priceGap || 0);
            } else {
                // Với max: đảm bảo không nhỏ hơn min + gap
                value = Math.max(value, parseInt(priceInputs[0].value) + priceGap || 0);
            }

            input.value = value;
            rangeInputs[index].value = value;

            updateProgress();
        });
    });

    // Xử lý kéo slider
    rangeInputs.forEach((range, index) => {
        range.addEventListener("input", () => {
            const value = parseInt(range.value) || 0;

            priceInputs[index].value = value;

            enforceConstraints();
        });
    });

}