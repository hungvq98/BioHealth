export default function BtnToTopModule() {
    const btnToTop = document.querySelector(".backToTop");

    if (!btnToTop) return;

    const toggleButton = () => {
        btnToTop.classList.toggle("active", window.scrollY > 10);
    };

    window.addEventListener("scroll", toggleButton);
    toggleButton(); // Kiểm tra ngay khi tải trang

    btnToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
