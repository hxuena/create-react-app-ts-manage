// 全局 types
export interface ResponseData {
  code: number;
  data?: any;
  desc: string;
  flag: boolean 
}

export interface CurrentUser {
  currentUser: {
    avatar?: string;
    name?: string;
    email?: string
  }
  
}