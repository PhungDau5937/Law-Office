// icon menu nav
const getMenuSmall = document.querySelector(".icon-menu-small");
const getNavSmall = document.querySelector(".nav__item-small");

// Form contact
const formContact = document.querySelector(".contact-form");

// button contact
const getBtnContact = document.querySelector(".btn-contact");

// Xu ly icon menu nav
getMenuSmall.addEventListener("click", function () {
  getNavSmall.classList.toggle("open");
  getNavSmall.classList.toggle("close");
});

// Tao ham toast de truyen vao object cac ptu co trong Notification
function toast({ title, message, type, color, duration }) {
  // Lay id toast
  const main = document.getElementById("toast");

  if (main) {
    // Tao mot the div con co class= "toast"
    const toast = document.createElement("div");
    const icons = {
      success: "fa-jelly fa-regular fa-circle-check",
      warning: "fa-solid fa-triangle-exclamation",
      error: "fa-solid fa-circle-exclamation",
    };
    const icon = icons[type];

    toast.classList.add("toast", `toast--${type}`);

    const delay = (duration / 1000).toFixed(2);
    console.log(delay);
    //Them animation bang js
    toast.style.animation = `notificationOpen ease 0.5s, fadeOut linear 1s ${delay}s forwards`;

    // Them noi dung vao div con toast
    toast.innerHTML = `
                    <div class="toast__icon ${color}">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__content">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <i class="fa-solid fa-xmark toast__close"></i>
                `;
    // Dua vao trong the cha toast (main)
    main.appendChild(toast);

    // Sau thoi gian set timeOut se tu xoa toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Ham close toast
    toast.addEventListener("click", function (event) {
      // Tim class cua chinhs no xem co khong
      if (event.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId); // Bo timeout
      }
    });
  }
}

// Xu ly button concact
if (getBtnContact)
getBtnContact.addEventListener("click", function (e) {
  const name = document.querySelector(".name").value.trim();
  const email = document.querySelector(".email").value.trim();
  const phone = document.querySelector(".name").value.trim();
  const comment = document.querySelector(".name").value.trim();

  if (!name || !email || !phone || !comment) {
    toast({
      title: "Warning",
      message: "Vui lòng nhập thông tin trước khi gửi!",
      type: "warning",
      color: "yellow",
      duration: 5000,
    });
  } else {
    formContact.submit();
    formContact.reset();
    toast({
      title: "Success",
      message: "Bạn đã gửi thông tin thành công.",
      type: "success",
      color: "green",
      duration: 5000,
    });
  }
});
