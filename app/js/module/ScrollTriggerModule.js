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

    }

}

