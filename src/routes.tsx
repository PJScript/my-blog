import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Posts from './pages/Posts';
import SignUp from './pages/SignUp';

export interface IPageListType {
  path: string;
  icon: string;
  bgColor: string;
  label: string;
  children: React.ReactElement | React.ReactNode;
}
const PAGE_LIST: IPageListType[] = [
  {
    path: '/',
    icon: '',
    bgColor: '',
    label: 'home',
    children: <Home />,
  },
  {
    path: '/login',
    icon: '',
    bgColor: '',
    label: 'login',
    children: <Login />,
  },
  {
    path: '/signup',
    icon: '',
    bgColor: '',
    label: 'signup',
    children: <SignUp />,
  },
  {
    path: '/post:id',
    icon: '',
    bgColor: '',
    label: 'post',
    children: <Posts />,
  },
];

export default PAGE_LIST;
