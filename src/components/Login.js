import Styles from './Login.module.css';
import {Link} from 'react-router-dom'

function loginHandeler(){
  const username =  document.querySelector('#username').value;
  
  if(username === "admin"){
    window.location.href = "/admin";
  }else{
    window.location.href = "/campus";
  }

}

const Login = () => {
    return ( 
      <div className={Styles.loginContainer}>

        <div className={Styles.login}>
          <div className={Styles.options}>
              <div className={Styles.active}>Login</div>
              <div><Link to="/Register">Register</Link></div>
          </div>
          <form action="">
              <input  id="username" type="email" name="" placeholder='Username'/>
              <input type="password" name="" id="" placeholder='password' />
              <p>forgot password ?</p>
          </form>
          
         <button onClick={loginHandeler}>Login</button>
      </div>
    </div>
  );
}
 
export default Login;