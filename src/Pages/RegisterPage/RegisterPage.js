import { useState } from "react";
import COLOR from "../../config/config";
import "./styles.css";
import { FaAmazon, FaAnchor, FaBaby, FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import CustomInput from "../../Components/CustomInput/CustomInput";

import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../../components/CustomButton/CustomButton";
import { auth } from "../../firebase";
import { useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <CustomInput
        placeholder={"Email"}
        inputValue={email}
        onChangeText={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        placeholder={"Password"}
        inputValue={password}
        onChangeText={(e) => setPassword(e.target.value)}
        isSecureEntry={true}
      />
      <CustomButton
        backgroundColor={"#0000FF"}
        title={"Register"}
        color={"#FFFFFF"}
        onClick={handleRegister}
      />
    </div>
  );
}

function LoginPage() {
  // let count = 0;
  // const [count, setCount] = useState(0);

  return (
    <div className="loginPageBaseContainer">
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
          <h1>REGISTER YOUR ACCOUNT</h1>
        </div>
        <div className="loginPagelineContainer"></div>
        <div className="loginPageContentBase1Container">
          <div className="loginPageContentNameContainer">
            <CustomInput type={"name"} placeholder={" Your Name"} />
          </div>
          <div className="loginPageContentInputContainer">
            <CustomInput type={"email"} placeholder={"Your Email"} />
          </div>
        </div>
        <div className="LoginPageBase2Container">
          <div className="LoginPageContentPasswordContainer">
            <CustomInput
              type="password"
              placeholder={" Password"}
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
          <div className="LoginPageContentAdressContainer">
            <CustomInput
              type="password"
              placeholder={"Confirm Password"}
              isSecureEntry={true}
            />
          </div>
        </div>
        <div className="LoginPageBase2Container">
          <div className="LoginPageContentPasswordContainer">
            <CustomInput type="Phone number" placeholder={"Phone Number"} />
            {/* <p>{count}</p>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button> */}
          </div>
          <div className="LoginPageContentAdressContainer">
            <CustomInput type="number" placeholder={"Pin Code"} />
          </div>
        </div>

        <div className="loginPageContentButtonContainer">
          {" "}
          <button class="my-button">REGISTER</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
