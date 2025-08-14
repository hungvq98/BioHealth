export default function ScrollTriggerModule() {
    if (window.innerWidth > 1200) {
        const ParaBlocks = document.querySelectorAll(".ParaBlock")
        if (ParaBlocks) {
            ParaBlocks.forEach(ParaBlock => {
                const ParaScroll = ParaBlock.querySelectorAll(".ParaScroll")
                ParaScroll.forEach(item => {
                    gsap.from(item, {
                        scrollTrigger: {
                            start: "-10% 65%",
                            end: "50% 40%",
                            // markers:true,
                            scrub: 1,
                            trigger: ParaBlock,
                        },
                        y: 400,
                    });
                })
            })
        }
        const ParaScales = document.querySelectorAll(".ParaScale")
        if (ParaScales) {
            ParaScales.forEach(ParaScale => {
                const ParaScroll = ParaScale.querySelectorAll(".ParaScaleIt")
                ParaScroll.forEach(item => {
                    gsap.from(item, {
                        scrollTrigger: {
                            start: "-10% 65%",
                            end: "50% 40%",
                            // markers:true,
                            scrub: 1,
                            trigger: ParaScale,
                        },
                        scale: .5,
                        opacity: 0,
                    });
                })
            })
        }
        const ParaYs = document.querySelectorAll(".ParaY")
        if (ParaYs) {
            ParaYs.forEach(ParaY => {
                const ParaScroll = ParaY.querySelectorAll(".ParaYScroll")
                ParaScroll.forEach(item => {
                    gsap.from(item, {
                        scrollTrigger: {
                            start: "-10% 65%",
                            end: "50% 40%",
                            // markers:true,
                            scrub: 1,
                            trigger: ParaY,
                        },
                        y: -400,
                    });
                })
            })
        }
        const pjItem = document.querySelectorAll(".project-new-itemJS")
        const pjList = document.querySelectorAll(".project-new-listJS")
        const pjItemFirst = document.querySelector(".project-new-itemJS:first-child")
        if (pjItem && pjList && pjItemFirst) {
            gsap.set(pjItem, {
                opacity: 0,
                scale: .7,
            })
            gsap.set(pjItem, {
                opacity: 1,
                scale: 1,
            })
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pjList,
                    start: "0% center",
                    end: "100% center",
                    // markers:true,
                    scrub: true,
                },
            })
            pjItem.forEach((item, index) => {
                if (index > 0) {
                    tl.to(item[index], {
                        opacity: 1,
                        scale: .7,
                        ease: "none"
                    })
                }
                tl.to(item, {
                    opacity: 1,
                    scale: 1,
                    ease: "none"
                }, "-=.9")

                if (index < pjItem.length - 1) {
                    tl.to(item, {
                        opacity: 0,
                        scale: .7,
                        ease: "none"
                    }, "-=.4")
                }
            })
        }
        // ================= onScroll =================
        gsap.utils.toArray(".onScroll").forEach(section => {
            const elements = section.querySelectorAll(".onScrollUp, .onScrollLeft, .onScrollRight, .onScrollScaleOut, .onScrollScaleIn");

            elements.forEach(el => {
                let animProps = {};

                if (el.classList.contains("onScrollUp")) {
                    animProps = { y: 50, opacity: 0 };
                } else if (el.classList.contains("onScrollLeft")) {
                    animProps = { x: -70, opacity: 0 };
                } else if (el.classList.contains("onScrollRight")) {
                    animProps = { x: 70, opacity: 0 };
                } else if (el.classList.contains("onScrollScaleOut")) {
                    animProps = { scale: 0.8, opacity: 0 };
                } else if (el.classList.contains("onScrollScaleIn")) {
                    animProps = { scale: 1.2, opacity: 0 };
                } else if (el.classList.contains("onScrollScaleIn")) {
                    animProps = { scale: 1.2 };
                }

                gsap.from(el, {
                    ...animProps,
                    duration: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        scrub: 1,
                        trigger: el,
                        start: "top 70%",
                        end: "bottom 70%",
                    }
                });
            });
        });
        gsap.utils.toArray(".onScrollTogether").forEach(section => {
            const elements = section.querySelectorAll(".onScrollUp, .onScrollLeft, .onScrollRight, .onScrollScaleOut");

            if (elements.length === 0) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                    end: "bottom 70%",
                    scrub: 1,
                    toggleActions: "play none none none",
                }
            });

            elements.forEach(el => {
                let animProps = { opacity: 0 };

                if (el.classList.contains("onScrollUp")) {
                    animProps.y = 100;
                } else if (el.classList.contains("onScrollLeft")) {
                    animProps.x = -50;
                } else if (el.classList.contains("onScrollRight")) {
                    animProps.x = 50;
                } else if (el.classList.contains("onScrollScaleOut")) {
                    animProps.scale = 0.8;
                }

                // Các item này sẽ cùng xuất hiện tại thời điểm 0 trong timeline
                tl.from(el, {
                    ...animProps,
                    duration: 1,
                    ease: "power2.out"
                }, 0);
            });
        });
        gsap.utils.toArray(".onScrollPin").forEach(section => {
            gsap.to(section, {
                scrollTrigger: {
                    start: "top 50%",
                    end: "bottom 60%",
                    // markers:true,
                    scrub: 1,
                    pin: true,
                    trigger: section,
                    duration: 1,
                    pinSpacing: false,
                },
            });
        });
        gsap.utils.toArray(".onScrollPinCan").forEach(section => {
            gsap.to(section, {
                scrollTrigger: {
                    start: "top 0%",
                    end: "bottom 20%",
                    // markers:true,
                    scrub: 1,
                    pin: true,
                    trigger: section,
                    duration: 1,
                    pinSpacing: false,
                },
            });
        });
        const section = document.querySelector(".onScrollCount");
        if (section) {
            const counters = section.querySelectorAll(".countNum");
            counters.forEach(counter => {
                const countTo = +counter.getAttribute("data-target");

                let obj = { val: 0 };

                gsap.to(obj, {
                    val: countTo,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section, // hoặc section cha
                        start: "top 100%",
                        end: "bottom 100%",
                        scrub: true,         // quan trọng: để đồng bộ với scroll
                    },
                    onUpdate: () => {
                        counter.innerText = Math.floor(obj.val).toLocaleString();
                    }
                });
            });
        }
        const canScrolls = document.querySelectorAll('.onScroll');
        if (canScrolls) {
            canScrolls.forEach(canScroll => {
                const cans = canScroll.querySelectorAll('.onCanLeft');

                // Set trạng thái ban đầu: ẩn và lệch sang trái
                gsap.set(cans, { y: 200, opacity: 0 });

                // Tạo timeline
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: canScroll,
                        start: "top 80%",
                        end: "30% 50%",
                        // markers: true,
                        scrub: 1,
                    }
                });

                // Thêm từng animation lần lượt vào timeline
                cans.forEach((can, index) => {
                    tl.to(can, {
                        y: 0,
                        opacity: 1,
                        ease: "power2.out"
                    }, "+=0.2"); // khoảng delay giữa các can
                });
            })
        }

    }

}

