import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import SignInSide from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import ForgotPassword from './containers/ForgotPassword';
import DetailMovie from './containers/DetailMovie';
import ProfilePage from './containers/ProfilePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/home" element={<App />} />
          <Route path="/home/profile" element={<ProfilePage />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
          <Route
            path="*"
            element={
              <main>
                <h3>404 - Route not found !</h3>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
