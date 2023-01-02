import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import abc from '../images/downloadmedic.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import EyeTable from './EyeTable';

const Update = () => {
 
  const navigate = useNavigate();
  const navigateToRegister = () => {
    // 👇️ navigate to /contacts
    navigate('/');
  };
  const navigateToDashboard = () => {
    // 👇️ navigate to /contacts
    navigate('/profile');
  };
  const navigateToForm = () => {
    navigate('/form/user');
  };
  return (
    <div className='col-12 d-flex flex-row'>
      <div className='col-2 shadow-lg  bg-white rounded  full d-flex flex-column'>
        <img src={abc} alt='icon/mediic' />
        <hr />

        <ul className='my-1 '>
          <li className='mt-4 mx-2 lh-6' onClick={navigateToDashboard}
            style={{ cursor: 'pointer' }}>DashBoard</li>
          <li
            className='mt-4 mx-2 lh-6'
            onClick={navigateToForm}
            style={{ cursor: 'pointer' }}
          >
            Analyze & Update
          </li>
          <li
            className='mt-4 mx-2 lh-6'
            onClick={navigateToRegister}
            style={{ cursor: 'pointer' }}
          >
            Logout
          </li>
        </ul>

        <hr />
      </div>
      <div className='col-6 shadow-lg  bg-white rounded p-5 full d-flex flex-column mx-5'>
      <form className=''>
  <div class="form-group">
    <label for="exampleInputEmail1">VGA</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Blood Pressure"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Vision</label>
    <input type="text/number" class="form-control" id="exampleInputPassword1" placeholder="VisionL"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Pre-Health Isssues</label>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Diabtes</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="TypeI/typeII"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Weight group</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>100</option>
      <option>200</option>
      <option>300</option>
      <option>400</option>
      <option>500</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Patient Condition</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Height</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Height"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Occular Height</label>
    <input type="text" class="form-control" id="inputPassword2" placeholder="Vision"/>
  </div>
  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Pulmonary</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <button type="submit" class="btn btn-primary my-1" onClick={navigateToDashboard}>Submit</button>
</form>
      </div>
    </div>
  );
};

export default Update;

