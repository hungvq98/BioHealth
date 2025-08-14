export default function HoverParallax() {
    const containers = document.querySelectorAll('.hoverParas');
    if (containers) {
        containers.forEach(container => {
            const items = container.querySelectorAll('.hoverParasIt');
            if (container && items) {
                gsap.set(items, { x: 0, y: 0 });
        
                container.addEventListener('mousemove', (e) => {
                    const rect = container.getBoundingClientRect();
                    const offsetX = e.clientX - rect.left;
                    const offsetY = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
        
                    const moveX = (centerX - offsetX) / 20;
                    const moveY = (centerY - offsetY) / 20;
        
                    items.forEach((item, index) => {
                        const depth = (index + 1) / items.length;
                        const translateX = moveX * depth;
                        const translateY = moveY * depth;
        
                        gsap.to(item, {
                            x: translateX,
                            y: translateY,
                            ease: "power3.out",
                            duration: 2,
                            delay: index * 0.05  // Add delay based on the item index
                        });
                    });
                });
            }
        })

    }
}