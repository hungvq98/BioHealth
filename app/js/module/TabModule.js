export default function TabModule() {
    let tab = document.querySelectorAll(".tabJS");
    if (tab) {
        tab.forEach((t) => {
            let tBtn = t.querySelectorAll(".tabBtn");
            let tPanel = t.querySelectorAll(".tabPanel");
            let tBox = t.querySelectorAll(".tabBox");

            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                tBtn[0].classList.add("active");
                // tBox[0].classList.add("active");
                tPanel[0].classList.add('open');
                $(tPanel[0]).slideDown();
                $(tBox[0]).slideDown();

                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener("click", showPanel);

                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove("active");
                            // tBox[a].classList.remove("active");
                            tPanel[a].classList.remove('open');
                            $(tPanel[a]).slideUp(400);
                            $(tBox[a]).slideUp(400);
                        }
                        tBtn[i].classList.add("active");
                        // tBox[i].classList.add("active");
                        tPanel[i].classList.add('open');
                        $(tPanel[i]).slideDown(400);
                        $(tBox[i]).slideDown(400);
                    }
                }
            }
        });
    }



    
    let notab = document.querySelectorAll(".notabJS");
    if (notab) {
        notab.forEach((t) => {
            let tBtn = t.querySelectorAll(".notabBtn");
            let tPanel = t.querySelectorAll(".notabPanel");
            // remove swiper active

            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                tBtn[0].classList.add("active");
                tPanel[0].classList.add('open');

                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener("click", showPanel);

                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove("active");
                            tPanel[a].classList.remove('open');
                        }
                        tBtn[i].classList.add("active");
                        tPanel[i].classList.add('open');

                    }
                }
            }
        });
    }
}
