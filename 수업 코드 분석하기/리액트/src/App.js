import './App.css';
/* 자바스크립트에서 app.css를 불러올 수 있는 것은 webpack 때문이다 
이 webpack은 create react app에서 제공해주고 있다 */
import BlogContent from './components/BlogContent';

/* 함수형 컴포넌트 */ 
function App() {
  //주석 다는 법
  /** 긴 
   * 주석 
   * 다는 법
   */

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div>
      {/* return() 안에 작성된 코드들은 js문법처럼 생겼으나, 안에 태그를 넣을 수 있고
      이런 문법을 JSX(JavaScript + XML) 라고 한다 */}
      {/* JSX 안에 주석 다는 법 */} 
        <h1 className="blogName" >블로그</h1>
        <p>년 : {year}</p>
        <p>월/일 : {month}/{date}</p>
        <p>시간: {hour}시{min}분{sec}초</p>
        <BlogContent/>
    </div>
  );
}

export default App;