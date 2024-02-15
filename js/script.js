let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.navbar')
menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

// HOME
// Vòng lặp và xử lý sự kiện click vào hình ảnh
document.querySelectorAll('.image-slider img').forEach(images => {
    // click và thay đổi nguồn
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    }
})

// REVIEW
var swiper = new Swiper(".review-slider", {
    // khoảng cách giữa các slide
    spaceBetween: 20,
    // thanh phân trang
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // tự động trượt
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    // số lượng slide hiển thị trên mỗi trang
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        768: {
            slidesPerView: 2,
        },
    },
    // vòng lặp vô hạn 
    loop: true,
    // hình dạng của con trỏ chuột
    grabCursor: true,
});
// CLOSED REVIEW