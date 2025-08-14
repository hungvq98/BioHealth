export default function ComponentModule() {

  // Review 
  document.querySelectorAll('.imgReviewJS input[type="file"]').forEach(input => {
    input.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (event) {
          const label = e.target.closest('.imgReviewJS');
          const img = label.querySelector('.img img');

          if (img) {
            console.log(img);
            img.src = event.target.result;
          } else {
            console.warn('Không tìm thấy .img img để thay ảnh');
          }
        };
        reader.readAsDataURL(file);
      }
    });
  });
  // 
  const files = document.getElementById("inputFile")
  if (files) {
    files.addEventListener("change", function () {
      var file = this.files[0];
      if (file) {
        var imageNameSpan = document.getElementById("imageName");
        imageNameSpan.textContent = file.name;
      }
    });
  }

  // Copy
  const copyBtn = document.querySelector(".copyJS")
  if (copyBtn) {
    const copyTxt = copyBtn.querySelector(".txt")
    copyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      copyUrl();
    })
    function copyUrl() {
      const url = window.location.href; // Lấy URL hiện tại
      navigator.clipboard.writeText(url)
        .then(() => {
          copyBtn.classList.add("active");
          setTimeout(() => {
            copyBtn.classList.remove("active");
          }, 500)
        })
    }
  }


  // Hidden Price

  let flags = false
  document.addEventListener("click", (e) => {
    const prices = document.querySelectorAll(".price")
    if (prices) {
      prices.forEach(price => {
        const priceEye = price.querySelector(".price-eye")
        const priceDel = price.querySelector(".price-del del")
        const pricePrivate = price.querySelector(".price-private")
        if (priceEye) {
          if (priceEye.contains(e.target)) {
            if (flags) {
              price.classList.remove("active");
              flags = false
            } else {
              price.classList.add("active");
              flags = true
            }
          }
        }
      });
    }

  })


  // Read More
  jQuery(document).ready(function ($) {

    // Password 
    $(document).on("click", ".seepassJS", function () {
      const $icon = $(this);
      const $input = $icon.siblings('input');

      if ($input.length === 0) return; // Không có input thì dừng

      const isPassword = $input.attr("type") === "password";
      $input.attr("type", isPassword ? "text" : "password");

      $icon.toggleClass("fa-eye fa-eye-slash");
    });

  })
  const readJS = document.querySelectorAll('.readJS')
  if (readJS) {
    readJS.forEach(item => {
      const content = item.querySelector('.mona-content')
      const readMoreBtn = item.querySelector('.seeMore')
      const readLessBtn = item.querySelector('.seeLess')
      if (content) {
        readMoreBtn.addEventListener('click', function (e) {
          item.classList.add('open')
        })
        readLessBtn.addEventListener('click', function (e) {
          item.classList.remove('open')
        })
        
      }
    })
  }
}
