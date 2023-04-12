# JavaScript 로 DOM 제어 연습
___
***
## 프로젝트의 목적
DOM manipulation을 위한 연습입니다.
## 구현하고자 하는 기능
각각의 input 창에 text 를 입력하면 프로그래스가 20씩 올라가는 기능을 구현하고자 합니다.

```Javascript
//처음 시도한 코드
const textBoxes = document.querySelectorAll('input[type="text"]');
        const progressBar = document.querySelector(".bar-progress");

        textBoxes.forEach(function (textBox) {
            textBox.addEventListener("input", function () {
                progressBar.value += 20;
            });
        });
```

✅ 코드 풀이
  1️⃣ input element에 무언가를 입력할 때 20만큼 증가시키기 위해 `addEventListener` 를 사용했습니다.
  2️⃣ 같은 요소에 event를 반복하기 위해 `forEach` 를 사용했습니다.
  3️⃣ `input` 이벤트는 입력 요소의 값이 변경될 때(텍스트 입력 요소에 무언가를 입력할 때)마다 실행됩니다. 
  
✅ 코드 리뷰
  각각의 text input 에 내용을 입력할 때마다 20씩 올라가는 것이 아닌 
  어느 input 창이든 상관없이 타이핑을 칠 때마다 프로그래스의 value 가 올라가게 되었습니다. 
  
✅ 문제 원인
  1️⃣ `input` 이벤트를 사용했기 때문에 input element의 value가 변경될 때마다 progress의 value를 증가시키게 되었습니다.
  
✅ 문제 해결 방법
  1️⃣ text 입력이 끝난 후에 progress의 value를 증가시키도록 if문을 사용하도록 합니다.
  

