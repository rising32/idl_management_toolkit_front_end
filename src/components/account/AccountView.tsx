import React from 'react';
import HeaderWithTitle from '../base/HeaderWithTitle';
import CompanyProfile from './CompanyProfile';
import MemberProfile from './MemberProfile';

function AccountView() {
  return (
    <>
      <HeaderWithTitle title='Your Account' isAccount />
      <CompanyProfile />
      <MemberProfile />
    </>
  );
}

export default AccountView;