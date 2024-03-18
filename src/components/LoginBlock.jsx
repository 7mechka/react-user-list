import { useState } from "react";
import AppButton from "./AppButton";
import { Navigate } from "react-router-dom";

function LoginBlock({ callback }) {
  let [isLogin, setIsLogin] = useState(false);
  let [userList, setUserList] = useState([]);
  let [userId, setUserId] = useState();

  function changeLoginStatus() {
    setIsLogin((isLogin = !isLogin));
    callback();
  }

  async function getData(array) {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await rawData.json();
    setUserList((userList = result));
    checkData(array);
  }

  function checkData(array) {
    if (
      userList.find((item) => {
        if (
          array.login.value === item.name &&
          array.password.value === item.username
        ) {
          setUserId((userId = item.id));
          return true;
        }
      })
    ) {
      changeLoginStatus();
    } else {
      alert("Wrong login or password");
    }
    array.reset();
  }

  return (
    <div className="login__wrap">
      {!isLogin && (
        <form
          className="login__form"
          onSubmit={() => {
            event.preventDefault();
            getData(event.target);
          }}
        >
          <input name="login" type="text" placeholder="login" required />
          <input
            name="password"
            type="password"
            placeholder="password"
            required
          />
          <AppButton text={"Login"} />
        </form>
      )}
      {isLogin && (
        <>
          <Navigate to={`/user/${userId}`} />
          {/* <form
            onSubmit={() => {
              event.preventDefault();
              changeLoginStatus();
            }}
          >
            <AppButton text={"Exit"} />
          </form> */}
        </>
      )}
    </div>
  );
}

export default LoginBlock;
