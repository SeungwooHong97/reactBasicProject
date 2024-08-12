import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <h1>2024 파리 올림픽</h1>
        <h2>Product by hongsw</h2>
        <form className='input-group'>
          <div className="input-filed">
            <label>국가명</label>
            <input type="text" placeholder='국가입력'>
            </input>
          </div>
          <div className="input-filed">
            <label>금메달</label>
            <input type="number" placeholder='0'>
            </input>
          </div>
          <div className="input-filed">
            <label>은메달</label>
            <input type="number" placeholder='0'>
            </input>
          </div>
          <div className="input-filed">
            <label>동메달</label>
            <input type="number" placeholder='0'>
            </input>
          </div>
          <div className="button-group">
            <button type='submit'>국가 추가</button>
            <button type='submit'>업데이트</button>
          </div>
        </form>

        <div>
          <p>아직 추가된 국가가 없습니다. 메달을 추적하세요. 메일을 기입하세요.</p>
        </div>



      </div>
    </>
  )
}

export default App
