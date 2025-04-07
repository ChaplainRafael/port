
import { useState } from 'react'
import './App.css'
import Home from './components/Index'

function App() {
  const [state,setState] = useState(false)

  const renderContent = ()=>{
    if (state ===true) {
      return(<div className={`home-container ${state ? 'show' : ''}`}>
        <Home/>
      </div>
      )}else{
      return(<div className="show-btn">
        <button onClick={()=>{setState(true)}}>REACH OUT</button>
      </div>
    )}
  }

  return (
    
    <div>
      {renderContent()}
      
    </div>
    
  )
}

export default App
