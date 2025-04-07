import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>사랑하라, 신은 너 안에 있다</h1>
      <p>이곳은 고민을 나누고, 치유받는 공간입니다.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)