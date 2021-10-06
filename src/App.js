/*eslint-disable*/

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천','맛집 추천','공부리스트']); 
  let [따봉,따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목,누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');




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

      { 
        글제목.map(function(글, i){
        return (
        <div className="list">
          <h3 onClick={ ()=>{누른제목변경(i)}}> {글} <span onClick={ ()=>{ 따봉변경(따봉+1)}}>👍 </span>
          {따봉}</h3>
          <p>2월 18일 발행</p>
          <hr/>
        </div>
        )
        })
     }
      {/* 인풋에 입력된 데이터를 저장해야됨 */}
     <div className="publish">
       <input onChange={(e) => {입력값변경(e.target.value)}}/>
       <button onClick= {() =>{ 
         var arrayCopy = [...글제목];
         arrayCopy.unshift(입력값);
         글제목변경(arrayCopy);
        }}>저장</button>
     </div>


      <button onClick={ ()=>{modal변경(!modal)}}>열고닫기</button>
        
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        :null   
      }
      

    </div>
  );
}  

  function Modal(props){
    return (
      <div className="modal">
        <h2>{props.글제목 [props.누른제목]}</h2>
        <p>날씨</p>
        <p>상세내용</p>
      </div>
    )
  }

  class Profile extends React.Component {
    constructor() {
      super();
    }

    render(){
      return (
        <div>프로필입니다</div>
      )
    }
  }


export default App;
