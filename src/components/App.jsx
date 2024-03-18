import { useState } from "react";
import LoginBlock from "./LoginBlock";

function App() {
  let [posts, setPosts] = useState([]);
  let [isLogged, setIsLogged] = useState(false)

  async function getData() {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await rawData.json()
    setPosts(posts = await result)
    console.log(posts)
  }

  const changeLoggedStatus = () => {
    setIsLogged(isLogged = !isLogged)
    if(isLogged) {getData()}
  }
  

  return (
    <>
      <LoginBlock callback={changeLoggedStatus}/>
      {/* {isLogged && 
      <UserInfo/>
      } */}
    </>
  );
}

export default App;
