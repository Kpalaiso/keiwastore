import { useEffect } from "react";
import RootNavigator from "./navigation";
import './App.css';

function App() {
  /* 
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');
  console.log(id);
  http://localhost:3000/?id=1234 
  */
  return (
    <div>
      <RootNavigator  />
    </div>
  );
}

export default App;
