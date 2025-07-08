import { useState } from 'react'

import Body from './components/Body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-xl font-bold'>
   
      <Body/>
      
    </div>
  )
}

export default App;
