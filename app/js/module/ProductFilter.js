export default function ProductFilter() {
    jQuery(document).ready(function ($) {
        function handleSelection(input) {
            var id = $(input).attr("id");
     // Get value from data-title attribute
            var title = $(input).data("title"); // Get value from data-title attribute

            var isRadio = $(input).attr("type") === "radio";
            var name = $(input).attr("name");
            var boxTag = $('.box-tag[data-name="' + name + '"]');

            // Nếu input đã được chọn (checked)
            if ($(input).is(":checked")) {
                if (isRadio) {
                    if (boxTag.length === 0) {
                        var tag = $(
                            '<div class="box-tag" data-name="' +
                            name +
                            '" data-id="' +
                            id +
                            '">'
                        )
                            .text(title)
                            .append(
                                '<span class="icon-remove"><i class="fa-light fa-xmark"></i></span>'
                            );

                        $(".box-tags").append(tag);

                        tag.find(".icon-remove").on("click", function () {
                            var tagValue = $(this).closest(".box-tag").data("id");
                            $(this).closest(".box-tag").remove();

                            // Uncheck the corresponding checkbox or radio button
                            $(
                                '.checkJS input[name="' + name + '"][data-id="' + tagValue + '"]'
                            ).prop("checked", false);

                            // Nếu không còn tag nào, thì bỏ class active
                            if ($(".box-tags .box-tag").length === 0) {
                                $(".box-tags").removeClass("active");
                            }

                            // Cập nhật lại localStorage
                            //   updateLocalStorage();
                        });

                        $(".box-tags").addClass("active");
                    }
                } else {
                    if (boxTag.length === 0) {
                        var tag = $('<div class="box-tag" data-id="' + id + '">')
                            .text(title)
                            .append(
                                '<span class="icon-remove"><i class="fa-light fa-xmark"></i></span>'
                            );

                        $(".box-tags").append(tag);

                        tag.find(".icon-remove").on("click", function () {
                            
                            $(this).closest(".box-tag").remove();

                            // Uncheck the checkbox
                            $('.checkJS input[id="' + id + '"]').prop(
                                "checked",
                                false
                            );
                            console.log(id)

                            // Nếu không còn tag nào, thì bỏ class active
                            if ($(".box-tags .box-tag").length === 0) {
                                $(".box-tags").removeClass("active");
                            }

                            // Cập nhật lại localStorage
                            //   updateLocalStorage();
                        });

                        $(".box-tags").addClass("active");
                    }
                }
            } else {
                if (isRadio) {
                    var tagValue = $(input).attr("id");
                    $(
                        '.box-tag[data-name="' + name + '"][data-id="' + tagValue + '"]'
                    ).remove();
                } else {
                    $('.box-tag[data-id="' + id + '"]').remove();
                }

                // Nếu không còn tag nào, thì bỏ class active
                if ($(".box-tags .box-tag").length === 0) {
                    $(".box-tags").removeClass("active");
                }
            }

            // Cập nhật lại localStorage
            // updateLocalStorage();
        }

        function updateLocalStorage() {
            var selectedValues = [];

            // Lưu lại tất cả các giá trị của input đã được chọn
            $(
                '.checkJS input[type="checkbox"]:checked, .checkJS input[type="radio"]:checked'
            ).each(function () {
                selectedValues.push({
                    name: $(this).attr("name"),
                    value: $(this).data("id"),
                });
            });

            // Lưu vào localStorage
            localStorage.setItem("selectedValues", JSON.stringify(selectedValues));
        }

        function loadSelectionsFromStorage() {
            var selectedValues = JSON.parse(
                localStorage.getItem("selectedValues") || "[]"
            );

            selectedValues.forEach(function (item) {
                var input = $(
                    'input[name="' + item.name + '"][data-id="' + item.value + '"]'
                );
                if (input.length > 0) {
                    input.prop("checked", true);
                    handleSelection(input[0]);
                }
            });
        }

        // Khi trang tải lại, đọc dữ liệu từ localStorage và tái tạo box-tag
        loadSelectionsFromStorage();

        // Bổ sung: Kiểm tra các input đã checked khi load page và thực hiện handleSelection
        $('.checkJS input[type="checkbox"]:checked, .checkJS input[type="radio"]:checked').each(function() {
            handleSelection(this);
        });

        // Khi input thay đổi
        $('.checkJS input[type="checkbox"],.checkJS input[type="radio"]').on(
            "change",
            function () {
                handleSelection(this);
            }
        );

        // Xóa tất cả khi nhấn nút reset
        $(".btnReset").on("click", function () {
            $('.checkJS input[type="checkbox"],.checkJS input[type="radio"]').prop(
                "checked",
                false
            );
            $(".btnSubmit").click();
            $(".box-tags").empty();
            $(".box-tags").removeClass("active");

            // Cập nhật lại localStorage
            // updateLocalStorage();
        });
    });
}