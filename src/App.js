import React from 'react';
import AppRoutes from '../src/routes';
import BaseLayout from '../src/components/Base'
import { history } from './config/history'

function App() {
  
  return (
    <div className="container-fluid">

      <div className="row">
        <BaseLayout history={history}/>
      </div>

      <div className="row" style={{marginTop: "100px"}}>
        <div className="col-md-1"></div>
        <div className="col-md-10" >
          
          <AppRoutes/>
        
        </div>
        <div className="col-md-1"></div>
      </div>

    </div>
  )
}

export default App
