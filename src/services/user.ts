import { httpGet } from '../utils'

export async function login(): Promise<any> {
  let data = {
    // username: 'xnhao',
    // password: 'hxn0328%'
  }
  return httpGet('http://172.31.205.31:8080/cas/login', data, {
    success: function(res) {
      console.log(res || '登录成功')
      return res
    },
    error: function(res) {
      console.log(res || '登录失败')
      return res
    }
  });
}

export async function getProjectList(): Promise<any> {
  let data = {}
  return httpGet('/cmp/auth/role/projectList', data, {
    success: function(res) {
      console.log('menu  ',res)
      return res
    },
    error: function(err) {
      console.log('error  ', err)
      return err
    }
  });
}

export async function getAppList(): Promise<any> {
  let data = {
    appid: '5ce63d16'
  }
  return httpGet('/aiui/web/app/getApp', data, {
    success: function(res) {
      console.log('menu  ',res)
      return res
    },
    error: function(err) {
      console.log('error  ', err)
      return err
    }
  });
}
