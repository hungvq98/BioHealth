export default function HeaderModule() {
    const main = document.querySelector(".main")
    const header = document.querySelector(".hd");
    const mobile = document.querySelector(".mobile");
    const mobileOverlay = document.querySelector(".mobile-overlay");
    function HandleHeader() {
        if (header && mobile && mobileOverlay) {
            if (window.scrollY > 0) {
                main.classList.add("hd-sticky");
                header.classList.add("sticky");
                mobile.classList.add("sticky");
                mobileOverlay.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
                mobile.classList.remove("sticky");
                mobileOverlay.classList.remove("sticky");
                main.classList.remove("hd-sticky");
            }
        }
    }
    window.addEventListener("scroll", function () {
        HandleHeader();
    });
    $(document).ready(function () {
        HandleHeader();
    });

    // search

    const hdSrch = document.querySelector(".hd-srch")
    if (hdSrch) {
        const hdSrchform = document.querySelector(".foundJS")
        const close = document.querySelector(".foundClose")
        const hdSrchIp = hdSrchform.querySelector("input")
        document.addEventListener("click", (e) => {
            if (e.target.matches(".hd-srch, .hd-srch *") || e.target.matches(".found-wr, .found-wr *")) {
                hdSrchform.classList.add("open");
                $("body").css("overflow", "hidden")
                setTimeout(() => {
                    hdSrchIp.focus();
                }, 100)
            } else {
                hdSrchform.classList.remove("open");
                $("body").css("overflow", "normal")
            }
        })
        close.addEventListener("click", () => {
            hdSrchform.classList.remove("open");
            $("body").css("overflow", "normal")
        })

    }
    const filter = document.querySelector(".hd-filter")
    const filterOpen = document.querySelector(".hd-filter-open")
    if (filterOpen && filter) {
        document.addEventListener("click", (e) => {
            if (e.target.matches(".hd-filter, .hd-filter *") || e.target.matches(".hd-filter-open, .hd-filter-open *")) {
                filter.classList.add("open");
                setTimeout(() => {
                    hdSrchIp.focus();
                }, 100)
            } else {
                filter.classList.remove("open");
            }
        })
    }


    const hdCate = document.querySelector(".hdCateJS")
    if (hdCate) {
        const hdCateOpen = hdCate.querySelector(".hd-cate-open")
        const hdCateBody = hdCate.querySelector(".hd-cate-body")
        document.addEventListener("click", (e) => {
            if (hdCateOpen.contains(e.target) || hdCateBody.contains(e.target)) {
                if (hdCateBody.className.includes("open") && !hdCateBody.contains(e.target)) {
                    hdCateBody.classList.remove("open");
                } else {
                    hdCateBody.classList.add("open");
                }
            } else {
                hdCateBody.classList.remove("open");
            }
        })
    }
}