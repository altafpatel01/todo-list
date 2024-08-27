import logo from './logo.svg';
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
