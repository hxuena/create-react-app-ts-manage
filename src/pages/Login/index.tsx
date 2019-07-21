import React from 'react';
import { login, getProjectList, getAppList } from '../../services/user'

import './index.css'

interface P {
  
}

class Login extends React.Component<any, any> {
  constructor(props:any) {
    super(props)
  }
  // loginInfo = 
  
  render() {
     return <>
      <button onClick={login}>Login Page </button>
      <button onClick={getProjectList}>get projectList by cmp/auth</button>
      <button onClick={getAppList}>get applist by aiui/web</button>
     </>
  }
 
}


export default Login