let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.container .image-container .image');

searchBox.addEventListener('input', () => {
    let value = searchBox.value.toLowerCase(); // Chuyển đổi giá trị nhập thành chữ thường để so sánh không phân biệt chữ hoa chữ thường
    images.forEach(filter => {
        let title = filter.getAttribute('data-title').toLowerCase(); // Chuyển đổi giá trị thuộc tính thành chữ thường
        let h3Text = filter.querySelector('h3').textContent.toLowerCase(); // Lấy nội dung của thẻ h3 và chuyển đổi thành chữ thường
        if (value === '' || title.includes(value) || h3Text.includes(value)) { // Nếu giá trị là trống hoặc tiêu đề hoặc nội dung h3 chứa giá trị tìm kiếm
            filter.style.display = 'block';
        } else {
            filter.style.display = 'none';
        }
    });
});
