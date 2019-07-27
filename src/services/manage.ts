import { httpGet } from '../utils'

export async function getMenuData(): Promise<any> {
  let data = {
    user_name: 'xnhao',
    project_name: 'cmp'
  }
  return httpGet('/cmp/auth/menu/getMenuData', data, {
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

