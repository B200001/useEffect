import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((data) => {
      setData(data);
    });
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {data.map((item) => (
        <li key={item.id}>{item.title[0]}</li>
      ))}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
