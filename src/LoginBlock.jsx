import { useState } from "react";
import AppButton from "./AppButton";

function LoginBlock({ callback }) {
  let [isLogin, setIsLogin] = useState(false);
  let [userList, setUserList] = useState([]);

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
      userList.find(
        (item) =>
          array.login.value === item.name &&
          array.password.value === item.username
      )
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
          <form
            onSubmit={() => {
              event.preventDefault();
              changeLoginStatus();
            }}
          >
            <AppButton text={"Exit"} />
          </form>
        </>
      )}
    </div>
  );
}

export default LoginBlock;
