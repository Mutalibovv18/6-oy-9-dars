import React from 'react'
import First from './assets/components/First'
import Second from './assets/components/First/Second'
import Third from './assets/components/First/Second/Third'
import Fourth from './assets/components/Fourth'
import Fifth from './assets/components/Fifth'

function App() {
  return (
    <div>
   <First></First>
   <div className='mt-[50px]'><Second></Second></div>
   <div className='mt-[50px] ml-[650px] mb-[50px]'><Third></Third></div>
   <div className='mt-[50px] ml-3  mb-[50px]'><Fourth></Fourth></div>
   <div><Fifth></Fifth></div>
    </div>
  )
}

export default App