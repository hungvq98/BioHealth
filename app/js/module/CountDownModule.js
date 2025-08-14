export default function CountDownModule() {
    function initCountDown() {
        const timeItems = document.querySelectorAll('.cdw')
        if (timeItems) {
            timeItems.forEach(items => {
                const daysEl = items.querySelector(".date");
                const hoursEl = items.querySelector(".hour");
                const minsEl = items.querySelector(".minute");
                const secondsEl = items.querySelector(".second");
                if (daysEl) {
                    const dates = items.getAttribute("data-time");
                    const newYears = dates;

                    function countdown() {
                        const newYearsDate = new Date(newYears);
                        const currentDate = new Date();

                        const totalSeconds = (newYearsDate - currentDate) / 1000;

                        const days = Math.floor(totalSeconds / 3600 / 24);
                        const hours = Math.floor(totalSeconds / 3600) % 24;
                        const mins = Math.floor(totalSeconds / 60) % 60;
                        const seconds = Math.floor(totalSeconds) % 60;

                        daysEl.innerHTML = formatTime(days);
                        hoursEl.innerHTML = formatTime(hours);
                        minsEl.innerHTML = formatTime(mins);
                        secondsEl.innerHTML = formatTime(seconds);

                        if (days < 0) {
                            daysEl.innerHTML = 0;
                            hoursEl.innerHTML = 0;
                            minsEl.innerHTML = 0;
                            secondsEl.innerHTML = 0;
                        }
                    }

                    function formatTime(time) {
                        return time < 10 ? `0${time}` : time;
                    }

                    // initial call
                    countdown();

                    setInterval(countdown, 1000);
                }
            })
        }
    }

    initCountDown();

    document.addEventListener("productSectionCustom", (e) => {
        initCountDown();
    })

}