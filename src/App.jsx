import { useState } from 'react'

import Body from './components/Body'
import { Provider } from 'react-redux';
import Store from './utils/Store';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-xl font-bold'>
   <Provider store ={Store}>
      <Body/>
      </Provider>
      
    </div>
  )
}

export default App;
