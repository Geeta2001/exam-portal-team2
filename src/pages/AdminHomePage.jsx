import React from 'react';
import {Row,Col} from 'react-bootstrap';
import {Route, Routes, Router, BrowserRouter} from 'react-router-dom';
import Menu from '../components/Menu.jsx';
import AllExams from './ExamsDisplayPage';
import Header from '../components/Header.jsx';
import AddExams from './ExamsCreatePage';
import { Container } from 'reactstrap';
import ExamsDisplayPage from './ExamsDisplayPage';
const AdminHomePage = () => {
    

    return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path='/viewexams' element={<ExamsDisplayPage/>} />
      </Routes>
   </div>
   </BrowserRouter>
    );
};

export default AdminHomePage;