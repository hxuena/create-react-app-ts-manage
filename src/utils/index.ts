import Axios  from 'axios';
import { message } from 'antd';
import { ResponseData } from '../globalType';

let Connect:any = null

interface OptionsType {
  error<T>(arg?: T[] | ResponseData): T | ResponseData, //泛型，参数不定
  success<T>(arg?: T[] | ResponseData): T | ResponseData,
  noMessage?: boolean,
  noLogin?: boolean,
  error400?:(...arg: any) => void
}

export const utils = {
  Connect: Axios.create({
    headers: {},
    transformRequest: [
      function( data: Record<string,any>) {
        let ret = ''
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }
    ],
    validateStatus: function(status: number | string) {
      return status >= 200 && status < 500 //默认
    },
    withCredentials: true
  }),

  afterRequest(response: Record<string,any>, options:OptionsType) {
    if (!response) {
      options.error && options.error()
      return message.error('服务器繁忙')
    }
    if (response.status === 200 || response.status === 201) {
      return options.success && options.success(response.data)
    } else if (response.status === 401) {
      // utils.clearCookie()
      !options.noMessage && message.error('登录已过期，请重新登录')
      if (!options.noLogin) {
        setTimeout(function() {
          // localStorage.setItem('pagefrom', location.pathname)
          // window.location.href = process.env.VUE_APP_LOGIN_PAGE
        }, 2000)
      }
    } else if (response.status === 400) {
      if (options.error400) {
        return options.error400(response.data)
      } else {
        options.error && options.error()
        if (response.data.fieldErrors) {
          let firstError = response.data.fieldErrors[0]
          return message.error(`${firstError.field}${firstError.message}`)
        } else if (response.data.title) {
          return message.error(`${response.data.title}`)
        }
      }
    } else {
      options.error && options.error()
      return message.error('服务器繁忙')
    }
  },
}

/**
* Get 请求
*/
export const httpGet = (url: string, payload:object, options: OptionsType) => {
 utils.Connect.get(url, { params: payload }).then(
   (response: object) => {
     utils.afterRequest(response, options)
   },
   (err: object) => {
     if (options.error) {
       options.error(err)
     } else {
       return message.error('服务器繁忙')
     }
   }
 )
}