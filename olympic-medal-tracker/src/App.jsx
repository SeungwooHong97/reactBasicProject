import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Local Storage에서 데이터 가져와 금메달 순위로의 정렬 
  function getCountyScore() {
    const countryKey = Object.keys(localStorage);
    let countryArr = [];

    countryKey.forEach(element => {
      countryArr.push(JSON.parse(localStorage.getItem(element)));
    });

    countryArr =  [...countryArr].sort((a,b) => b[1] - a[1]);
    return countryArr;
  }


  const [medalInfo,setMedalInfo] = useState(getCountyScore());
  const [inputCountry,setInputCountry] = useState("");

  const [gold,setGold] = useState(0);
  const [silver,setSilver] = useState(0);
  const [bronze,setBronze] = useState(0);



  /** 국가 스코어 등록 function */
   const addCountry = function (e) {
    try {
    
        e.preventDefault();
        const countryKey = Object.keys(localStorage);
        const arrInputValue = countryKey === null ? []:countryKey;
        const isInclude = arrInputValue.includes(inputCountry);
        const arrScore = [inputCountry,Number(gold),Number(silver),Number(bronze)];
    
        if(inputCountry !== "") {
          if(isInclude) {
            alert("이미 등록되어 있는 국가입니다.");
          } else {
            localStorage.setItem(inputCountry,JSON.stringify(arrScore));
            setMedalInfo(getCountyScore());
          }
      } else {
        alert("국가명을 입력해주세요.");
      }
      
    } catch(e) {
      console.log(e);
    } finally {
      setInputCountry("");
      setGold(0);
      setSilver(0);
      setBronze(0);
    }
  }


  /** 국가 스코어 수정 function */
  const updateCountry = function (e) {
    try {
        e.preventDefault();
        const countryKey = Object.keys(localStorage);
        const arrInputValue = countryKey === null ? []:countryKey;
        const isInclude = arrInputValue.includes(inputCountry);
        const arrScore = [inputCountry,Number(gold),Number(silver),Number(bronze)];
  
        if(inputCountry !== "") {
          if(isInclude) {
            alert(`${inputCountry}에 대한 금메달, 은메달, 동메달 스코어 수정이 완료되었습니다.`);
            localStorage.setItem(inputCountry,JSON.stringify(arrScore));
            setMedalInfo(getCountyScore());
          } else {
            alert("등록되지 않은 국가입니다. 먼저 국가와 스코어를 등록해주세요.");
          }
      } else {
        alert("국가명을 입력해주세요.");
      }
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className='container'>
        <h1>2024 파리 올림픽</h1>
        <h2>Product by hongsw</h2>
        <form className='input-group' onSubmit={(e)=>addCountry(e)}>
          <div className="input-filed" >
            <label>국가명</label>
            <input type="text" placeholder='국가입력' value={inputCountry} onChange={(e) => {
              const newValue = e.target.value;
              setInputCountry(newValue);
            }}/>
          </div>
          <div className="input-filed">
            <label>금메달</label>
            <input type="number" placeholder="0" value={gold} onChange={(e) => {
              const newValue = e.target.value;
              setGold(newValue);
            }}/>
          </div>
          <div className="input-filed">
            <label>은메달</label>
            <input type="number" placeholder="0" value={silver} onChange={(e) => {
              const newValue = e.target.value;
              setSilver(newValue);
            }}/>
          </div>
          <div className="input-filed">
            <label>동메달</label>
            <input type="number" placeholder="0" value={bronze} onChange={(e) => {
              const newValue = e.target.value;
              setBronze(newValue);
            }}/>
   
          </div>
          <div className="button-group">
            <button type='submit'>국가 추가</button>
            <button type='button' onClick={(e)=>updateCountry(e)}>업데이트</button>
          </div>
        </form>
       
            {
              medalInfo.length === 0 ? ( <div><p>아직 추가된 국가가 없습니다. 국가별 스코어를 입력하세요!</p></div> ): 
              (
                
                <div>
                  <table>
                    <thead>
                      <tr>
                      <th>국가명</th>
                      <th>금메달</th>
                      <th>은메달</th>
                      <th>동메달</th>
                      <th>총 메달 갯수</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        medalInfo.map((country,index)=> (
                            <tr key={index}>
                              <td>{country[0]}</td>
                              <td>{country[1]}</td>
                              <td>{country[2]}</td>
                              <td>{country[3]}</td>
                              <td>{country[1]+country[2]+country[3]}</td>
                              <td><button onClick={() => {
                               localStorage.removeItem(country[0]);
                               setMedalInfo(getCountyScore());
                              }}>삭제</button></td>
                            </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
                  
              )
           }
      </div>
    </>
  )
}

export default App 
