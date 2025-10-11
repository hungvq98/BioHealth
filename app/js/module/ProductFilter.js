export default function ProductFilter() {
    const rangeInputs = document.querySelectorAll(".range-input input");
    const progress = document.querySelector(".range-slider .progress");
    const priceMin = document.querySelector(".range-item.min");
    const priceMax = document.querySelector(".range-item.max");

    let priceGap = 1000;
    if (rangeInputs && progress) {
        let minVal = parseInt(rangeInputs[0].value);
        let minValueOrigin = parseInt(rangeInputs[0].min);
        let maxVal = parseInt(rangeInputs[1].value);

        priceMin.innerHTML = minVal.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
        });
        priceMax.innerHTML = maxVal.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
        });

        progress.style.left =
            ((minVal - minValueOrigin) / (rangeInputs[0].max - minValueOrigin)) *
            100 +
            "%";
        progress.style.right =
            100 -
            ((maxVal - minValueOrigin) / (rangeInputs[1].max - minValueOrigin)) *
            100 +
            "%";
        rangeInputs.forEach((item) => {
            item.addEventListener("input", (e) => {
                let minVal = parseInt(rangeInputs[0].value);
                let maxVal = parseInt(rangeInputs[1].value);
                if (maxVal - minVal < priceGap) {
                    if (e.target.className === "range-min") {
                        rangeInputs[0].value = maxVal - priceGap;
                    } else {
                        rangeInputs[1].value = minVal + priceGap;
                    }
                } else {
                    progress.style.left =
                        ((minVal - minValueOrigin) /
                            (rangeInputs[0].max - minValueOrigin)) *
                        100 +
                        "%";
                    progress.style.right =
                        100 -
                        ((maxVal - minValueOrigin) /
                            (rangeInputs[1].max - minValueOrigin)) *
                        100 +
                        "%";
                }
            });
        });
        rangeInputs[0].addEventListener("input", () => {
            let minVal = parseInt(rangeInputs[0].value).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
            });
            priceMin.innerHTML = minVal;
        });
        rangeInputs[1].addEventListener("input", () => {
            let maxVal = parseInt(rangeInputs[1].value).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
            });
            priceMax.innerHTML = maxVal;
        });
    }


    const dmsp = document.querySelector(".dmsp");
    if (dmsp) {
        const dmspItems = dmsp.querySelectorAll(".dmsp-item");
        const icons = dmsp.querySelectorAll(".arrow");
        const dropdowns = dmsp.querySelectorAll(".dmsp-dropdown");
        function toggleAll(icon,dropdown) {
            icons.forEach(icon => {
                icon.classList.remove("active");
            });
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove("active");
            });
        }
        dmspItems.forEach(item => {
            const icon = item.querySelector(".arrow");
            const dropdown = item.querySelector(".dmsp-dropdown");
            
            item.addEventListener("click", (e) => {
                if(icon.contains(e.target) || dropdown.contains(e.target)) {
                    if(icon.classList.contains("active")) {
                        toggleAll(icon,dropdown);
                        icon.classList.remove("active");
                        dropdown.classList.remove("active");
                    } else {
                        toggleAll(icon,dropdown);
                        icon.classList.add("active");
                        dropdown.classList.add("active");
                    }
                } else {
                    return;
                }
            });
        });
    }
}