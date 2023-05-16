let slideIndex = 1;


// HTML 파일에 있는 모든 태그들이 로드 된 후에 동작.
$(function() {
    //해당 인덱스의 슬라이드 표출 메소드 호출
    showSlides(slideIndex);

    // 3초마다 다음 슬라이드 표출
    setInterval(function() {
        showSlides(++slideIndex);
    }, 3000);
});

// 이게 아래와 동일함.
// const plusSlides = n => {

// }
function plusSlides(n) {
    // 현재 인덱스에서 앞/뒤로 가감한다.
    showSlides(slideIndex + n); 
}

function showSlides(n) {
    let i;
    // mySlides 클래스를 가지고 있는 태그들을 javascript 변수로 선언
    const slides = document;
    getElementsByClassName("mySlides");

    // 현재 슬라이드 개수보다 n이 커지면 슬라이드 인덱스를 첫 번째로 변경
    if(n > slides.length) {
        slidesIndex = 1;
    }
}