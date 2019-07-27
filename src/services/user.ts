import { httpGet } from '../utils'
import { ResponseData } from '../globalType';

export async function checkLogin(): Promise<any> {
  let data = {}
  return httpGet('/cmp/checkLogin', data, {
    success: function(res: ResponseData) {
      console.log(res.desc || '登录成功')
      return res
    },
    error: function(err: ResponseData) {
      console.log(err.desc || '登录失败')
      return err
    }
  });
}


