import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>사랑하라, 신은 너 안에 있다</h1>
      <p>이곳은 당신의 마음을 치유하는 편지입니다.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
