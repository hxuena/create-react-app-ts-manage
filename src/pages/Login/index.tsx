import React from 'react';
import { checkLogin } from '../../services/user'

import './index.css'

interface P {
  
}

class Login extends React.Component<any, any> {
  constructor(props:any) {
    super(props)
  }
  
  render() {
     return <>
      <button onClick={checkLogin}>Login Page </button>
     </>
  }
 
}


export default Login