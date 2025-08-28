export default function HeaderModule() {
    const main = document.querySelector(".main")
    const header = document.querySelector(".hd");
    const mobile = document.querySelector(".mobile");
    const mobileOverlay = document.querySelector(".mobile-overlay");
    const body = document.querySelector("body");
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

    (function () {
        if (window.scrollY > 0) {
            header.classList.add("small", "in");
        } else {
            header.classList.remove("small", "in");
        }
    })();

    var lastScrollTop = 0;
    var scrollDown = 0;

    window.addEventListener(
        "scroll",
        function () {
            let checkOntouch = document.querySelector(".no-touch");

            if (header) {
                if (window.scrollY > 0) {
                    header.classList.add("small");
                } else {
                    header.classList.remove("small");
                }

                if (!checkOntouch) {
                    var st = window.pageYOffset || document.documentElement.scrollTop;
                    var lt = 0;
                    if (st >= 0 && st > lastScrollTop) {
                        scrollDown = window.pageYOffset;
                        // downscroll code
                        header.classList.add("out");
                        header.classList.remove("in");

                        body.classList.add("out");
                        body.classList.remove("in");
                        lt = st;
                    } else {
                        // upscroll code

                        if (scrollDown > window.pageYOffset) {
                            header.classList.remove("out");
                            header.classList.add("in");

                            body.classList.remove("out");
                            body.classList.add("in");
                        }
                    }
                    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
                }
            }
        },
        false
    );


    const hdMenu = document.querySelector(".hd-bottom__cate");
    if (hdMenu) {
        const hdMenuDrop = hdMenu.querySelector(".hd-bottom__drop");
        const hdMenuLeft = hdMenu.querySelector(".hd-bottom__mega-left");
        const hdMenuRight = hdMenu.querySelector(".hd-bottom__mega-right");
        const hdMenuBtn = hdMenuLeft.querySelectorAll(".menu-item");
        const hdMenuTab = hdMenuRight.querySelectorAll(".wrappers");

        // Tạo map từ child-id -> element
        const wrapperById = new Map(
            Array.from(hdMenuTab).map(w => [w.dataset.childId, w])
        );

        // Hàm clear & active theo id
        const activateById = (id) => {
            // clear
            hdMenuBtn.forEach(b => b.classList.remove("active"));
            hdMenuTab.forEach(t => t.classList.remove("active"));

            // active nút có data-parent-id khớp
            const btn = Array.from(hdMenuBtn).find(b => b.dataset.parentId === id);
            if (btn) btn.classList.add("active");

            // active wrapper có data-child-id khớp
            const pane = wrapperById.get(id);
            if (pane) pane.classList.add("active");
        };

        // Khởi tạo: chọn cặp đầu tiên có id khớp
        (function initActive() {
            const firstMatchingId = Array.from(hdMenuBtn)
                .map(b => b.dataset.parentId)
                .find(id => wrapperById.has(id));
            if (firstMatchingId) {
                activateById(firstMatchingId);
            } else {
                if (hdMenuBtn[0]) hdMenuBtn[0].classList.add("active");
                if (hdMenuTab[0]) hdMenuTab[0].classList.add("active");
            }
        })();

        // Hover vào menu-item: kích hoạt theo data-parent-id
        hdMenuBtn.forEach((item) => {
            item.addEventListener("mouseenter", (e) => {
                e.preventDefault();
                const id = item.dataset.parentId; // lấy data-parent-id
                if (id) activateById(id);
            });
        });

        // Logic đóng/mở dropdown
        document.addEventListener("click", (e) => {
            if (hdMenu.contains(e.target) || hdMenuDrop.contains(e.target)) {
                hdMenuDrop.classList.add("active");
                const hdMenuLeftHeight = hdMenuLeft.clientHeight;
                hdMenu.setAttribute("style", `--max-h:${hdMenuLeftHeight}px`);
            } else {
                hdMenuDrop.classList.remove("active");
            }
        });

        window.addEventListener("scroll", () => {
            hdMenuDrop.classList.remove("active");
        });
    }



}