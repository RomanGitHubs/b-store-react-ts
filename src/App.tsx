import React, { lazy, Suspense, useEffect } from 'react';
import { AxiosError } from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch } from './store/hooks';
import { loadUserThunk } from './store/reducers/user';
import { loadGenreThunk } from './store/reducers/book';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import Layout from './components/Layout/Layout';
import Loader from './components/Loaders/Suspense';

const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Login = lazy(() => import('./pages/Login/Login'));
const Home = lazy(() => import('./pages/Home/Home'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const Book = lazy(() => import('./pages/Book/Book'));
const Favorite = lazy(() => import('./pages/Favorite/Favorite'));

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          dispatch(loadUserThunk());
        }
        dispatch(loadGenreThunk());
      } catch (e) {
        if (e instanceof AxiosError) {
          const { response } = e as AxiosError;
          return console.error('Error App >>> ', response?.data);
        }
        // alert('UNEXPECTED');
      }
    })();
  }, []);

  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='catalog' element={<Catalog/>}/>
          <Route path='catalog/:id' element={<Book/>} />
          <Route path='cart' element={<Cart/>}/>

          <Route element={<RequireAuth />}>
            <Route path='profile' element={<Profile/>}/>
            <Route path='favorite' element={<Favorite/>}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
