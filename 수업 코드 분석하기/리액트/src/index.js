/** 이 부분이 App.js파일에서 작성된 부분이 보여지게 되는 부분입니다
 * public 폴더의 <div id='root'></div>가 있는데 바로 이 부분에 랜더링됩니다.
 * 즉, App.js가 메인페이지고, index.js가 메인페이지를 보여지게 합니다. 바로 index.html에 말입니다.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
/* public파일 안 index.html의 div.root를 가리킨다 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
