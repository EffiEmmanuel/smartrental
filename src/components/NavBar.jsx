import React from 'react';
import { Layout, Menu, Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from '../Images/Logo_SmartRentalSoltution.png';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Smart Rental Solution" style={{ height: '50px', marginRight: '20px', cursor:'pointer' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button type="text" style={{ marginRight: '20px' }}>Login</Button>
        <Button type="primary">Sign Up</Button>
        <Avatar style={{ marginLeft: '20px' }} icon={<UserOutlined />} />
      </div>
    </Header>
  );
};

export default Navbar;
