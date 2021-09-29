/*eslint-disable*/

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천','맛집 추천','공부리스트']); 
  let [따봉,따봉변경] = useState(0);

  let[modal, modal변경] = useState(false);

  // let toggleMenu =() => {
  //   modal변경(modal => !modal);
  // }
  
  // function 제목바꾸기(){
  //   var newArray = [...글제목];
  //   newArray[0] = '여자코트 추천';
  //   글제목변경( newArray );
  // }
  
  function 글자순정렬(){
    var newArray = [...글제목]
    newArray = newArray.sort();
    글제목변경 ( newArray );
  }
  
  return(

 
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
        <button onClick={ 글자순정렬 }>버튼</button>
      </div>
      <div className="list">
        <h3> { 글제목[0] }<span onClick={ ()=>{따봉변경(따봉 +1) } }>👍</span> {따봉}</h3>
        
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={()=>{modal변경(true)}}> { 글제목[2] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
      
      <button onClick={ ()=>{modal변경(!modal)}}>버튼</button>

      {
        modal === true
        ? <Modal></Modal>
        : null
      }

    </div>
  );
  }  

  function Modal(){
    return (
      <div className="modal">
        <h2>제목</h2>
        <p>날씨</p>
        <p>상세내용</p>
      </div>
    )
  }


export default App;
