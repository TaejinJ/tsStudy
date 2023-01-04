"use strict";
//여러개의 링크를 한번에 바꾸는법
let Links = document.querySelectorAll(".naver");
Links.forEach((a) => {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
//이미지 바꾸는 방법
let Img = document.querySelector("#image");
if (Img instanceof HTMLImageElement) {
    Img.src = "100.jpg";
}
