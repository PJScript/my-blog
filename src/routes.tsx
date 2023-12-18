import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import Posts from './pages/Posts';
import SignUp from './pages/SignUp';

export interface IPageListType {
  path: string;
  icon: string;
  bgColor: string;
  label: string;
  isVisible: boolean;
  children: React.ReactElement | React.ReactNode;
}
const PAGE_LIST: IPageListType[] = [
  {
    path: '/',
    icon: '',
    bgColor: '',
    label: 'home',
    isVisible: true,
    children: <Home />,
  },
  {
    path: '/login',
    icon: '',
    bgColor: '',
    label: 'login',
    isVisible: false,

    children: <Login />,
  },
  {
    path: '/signup',
    icon: '',
    bgColor: '',
    label: 'signup',
    isVisible: false,

    children: <SignUp />,
  },
  {
    path: '/post',
    icon: '',
    bgColor: '',
    label: 'post',
    isVisible: true,

    children: <Posts />,
  },
  {
    path: '/post/:id',
    icon: '',
    bgColor: '',
    label: 'post',
    isVisible: false,

    children: <Post />,
  },
];

export default PAGE_LIST;
