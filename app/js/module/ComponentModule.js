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


  const frames = document.querySelectorAll(".frameJs");
  frames.forEach((frame) => {
    const img = frame.querySelector("img");
    const canvas = document.createElement("canvas");
    frame.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    let ledSpacing = 30;
    let ledRadius = 5;
    let waveSpeed = 0.1;
    let waveFrequency = Math.PI / 8;
    let positions = [];
    let time = 0;
    let isVisible = false;

    function setupCanvas() {
      canvas.width = img.offsetWidth;
      canvas.height = img.offsetHeight;
      positions = [];
      let numLedsX = Math.floor(canvas.width / ledSpacing);
      let numLedsY = Math.floor(canvas.height / ledSpacing);

      for (let i = 0; i < numLedsX; i++)
        positions.push({ x: i * ledSpacing, y: 0 });
      for (let i = 0; i < numLedsY; i++)
        positions.push({ x: canvas.width, y: i * ledSpacing });
      for (let i = 0; i < numLedsX; i++)
        positions.push({ x: canvas.width - i * ledSpacing, y: canvas.height });
      for (let i = 0; i < numLedsY; i++)
        positions.push({ x: 0, y: canvas.height - i * ledSpacing });
    }

    function drawLeds() {
      if (!isVisible) return; // Nếu frame không hiển thị, dừng vẽ

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let numLeds = positions.length;

      for (let i = 0; i < numLeds; i++) {
        let led = positions[i];
        let opacity = Math.sin(waveFrequency * i + time) * 0.5 + 0.5;

        ctx.beginPath();
        ctx.arc(led.x, led.y, ledRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.shadowColor = "white";
        ctx.shadowBlur = 10 * opacity;
        ctx.fill();
      }

      time += waveSpeed;
      requestAnimationFrame(drawLeds);
    }

    setupCanvas();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) requestAnimationFrame(drawLeds);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(frame);

    window.addEventListener("resize", setupCanvas);
  });
  function detectInView() {
    const elements = document.querySelectorAll('.checkViewJS');

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const inView =
        rect.top < (window.innerHeight - 200) &&
        rect.bottom > 0;
      if (inView) {
        el.classList.add('inview');
      } else {
        el.classList.remove('inview');
      }
    });
  }

  // Gọi khi cuộn hoặc resize
  window.addEventListener("load", detectInView);
  window.addEventListener('scroll', detectInView);
  window.addEventListener('resize', detectInView);

  // Gọi khi DOM đã sẵn sàng
  document.addEventListener('DOMContentLoaded', detectInView);
}
