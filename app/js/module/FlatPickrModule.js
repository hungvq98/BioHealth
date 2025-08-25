export default function FlatPickrModule() {
    const el = document.querySelector('#dob');

    // 1) Đọc & kiểm tra dữ liệu
    const minYear = parseInt(el.dataset.minYear, 10);
    const maxYear = parseInt(el.dataset.maxYear, 10);
    const defaultYear = el.dataset.defaultYear ? parseInt(el.dataset.defaultYear, 10) : null;

    if (Number.isNaN(minYear) || Number.isNaN(maxYear)) {
        console.error('Thiếu hoặc sai data-min-year / data-max-year trên input#dob');
    }

    // 2) Dùng Date (không phụ thuộc dateFormat)
    const minDate = new Date(minYear, 0, 1);   // 01-01-minYear
    const maxDate = new Date(maxYear, 11, 31); // 31-12-maxYear
    const defDate = defaultYear ? new Date(defaultYear, 0, 1) : null;

    // 3) Khởi tạo flatpickr
    flatpickr(el, {
        dateFormat: "d-m-Y",     // chỉ ảnh hưởng hiển thị
        minDate,
        maxDate,
        defaultDate: defDate,
        allowInput: false,       // NGĂN người dùng gõ tay “2025”
        disableMobile: true      // tránh native picker bỏ qua min/max
    });
}