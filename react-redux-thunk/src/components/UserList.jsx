import React, { useState } from "react";
import { applyMiddleware, createStore } from "redux";
import reducer from "./Reducer";
import { fetchDataSuccess, fetchDataFailure } from "./Action";
import axios from "axios";
import { thunk } from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

const fetchData = () => () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => store.dispatch(fetchDataSuccess(res.data)))
    .catch((error) => store.dispatch(fetchDataFailure(error.message)));
};

export default function UserList() {
  const [userData, setUserData] = useState([]);
  const [showData, setShowData] = useState(false);

  const dataToggle = () => {
    setShowData(!showData);
  };

  store.subscribe(() => {
    setUserData(store.getState().users);
  });

  return (
    <div>
      {showData && (
        <div>
          {userData.map((item) => (
            <div key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <h4>{item.email}</h4>
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => {
          store.dispatch(fetchData());
          dataToggle();
        }}
      >
        {showData ? "Hide Data" : "Fetch Data"}
      </button>
    </div>
  );
}
