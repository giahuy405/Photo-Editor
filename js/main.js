const brightness = document.getElementById("brightness-slider");
const contrast = document.getElementById("contrast-slider");
const hue = document.getElementById("hue-slider");
const blur = document.getElementById("blur-slider");
const saturation = document.getElementById("saturation-slider");
const sepia = document.getElementById("sepia-slider");

const img = document.getElementById("img");

const inputURL = document.getElementById("search-box");
const searchBtn = document.getElementById("submit-button");


function searchImg() {
    if (inputURL.value === "") {
        alert('Vui lòng nhập URL');
        return;
    }
    // nếu 4 kí tự đầu tiên là http thì 
    else if(inputURL.value.slice(0,4) === "http"){
        // thay src của img bằng cái mà ngta nhập 
        img.src = inputURL.value;
        // sau đó chạy hàm default value 
        setDefaultValue();
        // hàm delay 0.2s, để làm rỗng cái link của ngta nhập
        setTimeout(function () {
            inputURL.value = "";
        }, 200);
    }
    else{
        alert('Nhập URL k hợp lệ');
    }   
}
searchBtn.addEventListener("click", searchImg);

function updateImage() {
    var filtered =
    // chỉnh css cho cái ảnh 
        " brightness(" + brightness.value + "%) " +
        " contrast(" + contrast.value + "%) " +
        " blur(" + blur.value + "px) " +
        " hue-rotate(" + hue.value + "deg) " +
        " saturate(" + saturation.value + "%) " +
        " sepia(" + sepia.value + "%) ";
    img.style.filter = filtered;
}

function setDefaultValue() {
    brightness.value = 100;
    contrast.value = 100;
    hue.value = 0;
    blur.value = 0;
    saturation.value = 100;
    sepia.value = 0;
    updateImage();
}


