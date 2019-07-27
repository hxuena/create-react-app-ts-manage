import React from 'react';
import { Avatar } from 'antd';
import { CurrentUser } from '../../globalType'

import './index.scss';

export interface HeaderRightProps extends CurrentUser {
  // currentUser: object
}

const Header = (props: HeaderRightProps ) => {
  const {currentUser = {}} = props
  return <Avatar size="small" src={currentUser.avatar}/>
};

export default Header;
