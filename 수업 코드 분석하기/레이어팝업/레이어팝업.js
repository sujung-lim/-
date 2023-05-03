// 수업 코드를 분석하여 /* */ 주석처리로 정리해놓았습니다

/** 웹접근성 고려 */
//키보드 접근성 고려하여 esc 눌렀을 때 닫기 
//마지막 리스트에서 tap을 눌렀을 때 닫기로 가기 
//닫기에서 tap을 눌렀을 때 위니브로 이동 
//shift + tap 하면 뒤로 이동하기 
//위니브에서 shift + tap 을 누르면 닫기로 가기 
//순환하게 만들기 


const article = document.querySelector('.popup');
const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');

const dim = document.querySelector('.dim');

// 첫 번째 포커스 요소
const firstEl = article.querySelector('a');
/* querySelector와 querySelectorAll의 차이는 전자는 첫 번째 요소만 반환한다 */

function openPopup() {
    article.classList.add('active');
    firstEl.focus();
}

function closePopup() {
    article.classList.remove('active');
}

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
closeBtn.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (!e.shiftKey && e.key === 'Tab') {
        console.log('tab만 누름');
        e.preventDefault();
        firstEl.focus();
    } else if (e.shiftKey && e.key === 'Tab') {
        console.log('shift + tab');
    }
})

firstEl.addEventListener('keydown', function (e) {
    if (e.shiftKey && e.key === 'Tab') {
        e.preventDefault();
        closeBtn.focus();
    }
});

dim.addEventListener('click', closePopup);


