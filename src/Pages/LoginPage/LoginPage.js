import { useState } from "react";
import COLOR from "../../config/config";
import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import CustomInput from "../../Components/CustomInput/CustomInput";

function LoginPage() {
  // let count = 0;
  // const [count, setCount] = useState(0);
  const[email,setEmail]=useState("@gmail.com");
  return (
    <div className="loginPageBaseContainer">
    <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
          <h1>LOGIN WITH YOUR ACCOUNT</h1>
          </div>
          <div className="loginPagelineContainer"></div>
        <div className="loginPageContentInputContainer">
          <CustomInput
            type={"email"}
            placeholder={"Enter Your Email"}
            Icon={FaUserAlt}
            inputValue={email}
            onChangeText={(e)=>{
            
              setEmail(e.target.value);

            }
          }
          />
          <CustomInput
            type="password"
            placeholder={"Enter Password"}
            Icon={FaKey}
            isSecureEntry={true}
          />
          {/* <p>{count}</p>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button> */}
  
        </div>
        <div className="loginPageContentButtonContainer"> <button class="my-button">SIGN IN</button></div>
      <div className="loginPageContentForgotPasswordContainer">Forgot Password</div>
        <div className="loginPageContentRegisterContainer"></div>
      </div>
    </div>
  );
}

export default LoginPage;