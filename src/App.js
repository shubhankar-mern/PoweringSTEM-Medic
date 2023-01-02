import './App.css';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const navigateToProfile = () => {
      // 👇️ navigate to /contacts
      navigate('/form/user');
    };
  return (
  <div className='App'>
  <div className='h-100 d-flex align-items-center justify-content-center '>
   <form className='mt-5 shadow-lg p-3 mb-5 bg-orange rounded rounded p-5 d-flex flex-column ' >
  <div class="form-group d-inline-block">
    <label for="exampleInputEmail1">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
  </div>
  <div class="form-group d-inline-block">
    <label for="exampleInputPassword1">Phone No.</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Phone no."/>
  </div>
  <button type="submit" class="btn btn-danger mt-3" onClick={navigateToProfile}>Register
  </button>
  <p className='my-3'>Already Registered? <Link to="/login">Click here to Login.</Link></p>
</form>
</div>
  </div>
  );
}

export default App;
