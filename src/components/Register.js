import Styles from './Register.module.css';
import {Link} from 'react-router-dom'
const Register = () => {

    const registrationAlert= ()=>{
        alert("Registraion Successful");
    }


    return ( 
      <div className={Styles.loginContainer}>

        <div className={Styles.login}>
          <div className={Styles.options}>
              <div><Link to="/Login">Login</Link></div>
              <div className={Styles.active}>Register</div>
          </div>
          <form action="">
              <input type="text" name="" id="" placeholder='Name'/>
              <input type="email" name="" id="" placeholder='Email'/>
              <input type="email" name="" id="" placeholder='Email'/>
              <input type="password" name="" id="" placeholder='Password'/>
              <input type="password" name="" id="" placeholder='Confirm Password' />
              <span>College -</span>
              <label htmlFor="GGITS">GGITS </label>
              <input type="radio" name="clg" id="GGITS" value="GGITS" />
              <label htmlFor="GGCT">GGCT </label>
              <input type="radio" name="clg" id="GGCT" value="GGCT" />
              <label htmlFor="GGCE">GGCE </label>
              <input type="radio" name="clg" id="GGCE" value="GGCE" />
          </form>
          
          <Link to="/Login"><button onClick={registrationAlert}>Register</button></Link>
      </div>
    </div>
  );
}
 
export default Register;