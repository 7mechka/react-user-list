import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UserInfo() {
  const userId = useParams().id;
  let [isActive, setIsActive] = useState(false);
  let [userInfo, setUserInfo] = useState([]);

  function setActive() {
    setIsActive((isActive = !isActive));
  }
  async function getData() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const result = await response.json();
    setUserInfo((userInfo = result));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {userInfo.address && (
        <section className="info">
          <div className="info__left">
            <p className="info__p">{`Name: ${userInfo.name}`}</p>
            <p className="info__p">{`Username: ${userInfo.username}`}</p>
            <p className="info__p">{`Email: ${userInfo.email}`}</p>
            <p className="info__p">{`Website: ${userInfo.website}`}</p>
            <Link to={`./posts`} className="info__page-redirect">
              <button>See all posts</button>
            </Link>
          </div>
          <div className="info__right">
            <p className="info__btn" onClick={() => setActive()}>
              {"More info \\/"}
            </p>
            <ul className={`info__list ${isActive ? "active" : ""}`}>
              <li className="info__item">
                <p>{`Street: ${userInfo.address.street}`}</p>
              </li>
              <li className="info__item">
                <p>{`Suite: ${userInfo.address.suite}`}</p>
              </li>
              <li className="info__item">
                <p>{`City: ${userInfo.address.city}`}</p>
              </li>
              <li className="info__item">
                <p>{`Zipcode: ${userInfo.address.zipcode}`}</p>
              </li>
              <li className="info__item">
                <p>{`Phone: ${userInfo.phone}`}</p>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
export { UserInfo };
