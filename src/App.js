
import Firstpart from './Components/Firstpart';
import Secondpart from './Components/Secondpart';
import { useState,useEffect } from 'react';
import './App.css';


function App() {
  const [addtask, settask] = useState([]);
  const [inputvalue, setinputvalue] = useState("");

  let handlesetinputvalue = (e) => {
    setinputvalue(e.target.value);
  };

  const handleCheckboxChange = (id) => {
    const nn = addtask.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item
    });
    localStorage.setItem("Task", JSON.stringify(nn));
    settask(nn);
  };
  let handleaddtask = () => {
    if (inputvalue.trim() !== "") {
      const newItem = {
        id: Date.now(), // unique id
        contents: inputvalue,
        checked: false,
      };
      const newtask = [...addtask, newItem];
      localStorage.setItem("Task", JSON.stringify(newtask));
      settask(newtask);
      // console.log(newtask)
      setinputvalue("");
    }
  };

  function deletetask(index) {
    let afterdel = addtask.filter((task, indexs) => {
      return index !== indexs;
    });
    localStorage.setItem("Task", JSON.stringify(afterdel));

    settask(afterdel);
  }

  useEffect(() => {
    let datafrom = localStorage.getItem("Task");
  
    // Ensure datafrom is a valid JSON string before parsing
    if (datafrom) {
      try {
        settask(JSON.parse(datafrom));
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        localStorage.removeItem("Task"); // Clean up invalid data if needed
      }
    }
  }, []);

  
  return (
    <>
    <Firstpart handleaddtask={handleaddtask} inputvalue={inputvalue} handlesetinputvalue={handlesetinputvalue} />
    <Secondpart addtask={addtask} deletetask={deletetask} handleCheckboxChange={handleCheckboxChange}/>
    
    </>
  );
}

export default App;
