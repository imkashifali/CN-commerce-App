import React,{useState} from 'react'
import WindowTracker from './WindowTracker'
import './styles.css'

const TestApp = () => {
  const [show, setshow] = useState(true)

    function toggle(params) {
      setshow(prevshow => !prevshow)
    }
  return (
    <div className="container">
    <p>test</p>
    

    <button onClick={toggle}>
        Toggle WindowTracker
    </button>
    {show && <WindowTracker/>}
</div>
  )
}

export default TestApp