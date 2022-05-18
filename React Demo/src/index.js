import React from "react";
import  ReactDOM  from "react-dom";
import AppComponent from "./App";
const root=ReactDOM.createRoot(document.getElementById("root"))
const data=[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    }]
root.render(
<>
<AppComponent propdata={data}></AppComponent>

</>
)