import React, { useState, PureComponent } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import abc from '../images/downloadmedic.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import EyeTable from './EyeTable';
import 'react-circular-progressbar/dist/styles.css';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
  Label,
} from 'recharts';

const data3 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Profile = () => {
  const [value, onChange] = useState(new Date());
  const [heart, setheart] = useState(false);
  const [eye, seteye] = useState(false);
  const [blood, setblood] = useState(true);
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
      <div className='col-2 shadow-lg p-3 mb-5 bg-white rounded full d-flex flex-column'>
        <img src={abc} alt='icon/mediic' />
        <hr />

        <ul className='my-1 '>
          <li className='mt-4 mx-2 lh-6'  onClick={navigateToDashboard}
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
      <div className='col-7 shadow-lg  bg-white rounded full d-flex flex-column'>
        <div className='shadow-lg  bg-white rounded half d-flex flex-row'>
          <div className='card col-6 shadow-lg  bg-white rounded d-flex flex-column  align-items-center'>
            <img
              src={abc}
              alt='profile'
              class='rounded-circle'
              style={{ width: '100px', border: '2px solid grey' }}
            />
            <p className='mt-2'>Shubhankar Kr. Singh</p>
            <div class='container mt-1'>
              <div class='row row-cols-2'>
                <div class='col  d-flex flex-column  align-items-center'>
                  <p>24</p>
                  <p>Years</p>
                </div>
                <div class='col  d-flex flex-column  align-items-center'>
                  <p>A+</p>
                  <p>Blood</p>
                </div>
                <div class='col  d-flex flex-column  align-items-center'>
                  <p>5'10"</p>
                  <p>Height</p>
                </div>
                <div class='col  d-flex flex-column  align-items-center'>
                  <p>82Kg</p>
                  <p>Weight</p>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex flex-column col-rows-2'>
            <div className='card  col-6 shadow-lg  bg-white rounded halfer '>
              <p className='d-flex flex-column align-items-center'>
                Daily Activity level
              </p>
              <ResponsiveContainer width='100%' height='80%'>
                <BarChart width={150} height={40} data={data}>
                  <Bar dataKey='uv' fill='#8884d8' />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className='card  col-6 shadow-lg  bg-white rounded halfer d-flex flex-row justify-content-around '>
              <div>
                {' '}
                General Health
                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar
                    value={72}
                    text={`${72}%`}
                    styles={buildStyles({
                      pathColor: `red`,
                      trailColor: '#d6d6d6',
                      backgroundColor: '#3e98c7',
                    })}
                  />
                </div>
              </div>
              <div>
                {' '}
                Water Balance
                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar value={61} text={`${61}%`} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='shadow-lg  bg-white rounded  half'>
          {eye && !heart && !blood && (
            <>
              <EyeTable />
              <p className='fw-bolder d-flex flex-row'>
                Vision Screening :<p className='fw-light'>Normal</p>
              </p>
            </>
          )}
          {heart && (
            <>
              <ResponsiveContainer width='100%' height={200} className='mt-5'>
                <AreaChart
                  width={500}
                  height={200}
                  data={data}
                  syncId='anyId'
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type='monotone'
                    dataKey='pv'
                    stroke='#82ca9d'
                    fill='#82ca9d'
                  />
                </AreaChart>
              </ResponsiveContainer>
            </>
          )}
          {!eye && !heart && blood && (
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart
                width={500}
                height={300}
                data={data2}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='pv'
                  stroke='#8884d8'
                  activeDot={{ r: 8 }}
                />
                <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      <div className='col-3 shadow-lg  bg-white rounded  full'>
        <div className='p-3'>
          <Calendar onChange={onChange} value={value} />
          <hr />
        </div>
        <div
          className='card bg-primary text-white mt-2 side mx-1 justify-content-center align-items-center '
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setheart(true);
            seteye(false);
            setblood(false);
          }}
        >
          See Pulmonary Issues
        </div>
        <div
          className='card bg-danger text-white mt-2 side mx-1 justify-content-center align-items-center'
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setheart(false);
            seteye(true);
            setblood(false);
          }}
        >
          See Oculary Issues
        </div>
        <div
          className='card bg-warning text-white mt-2 side mx-1 justify-content-center align-items-center'
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setheart(false);
            seteye(false);
            setblood(true);
          }}
        >
          See Blood Pressure
        </div>
      </div>
    </div>
  );
};

export default Profile;
