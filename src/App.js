
import './App.css';
import './components/item';
import Item from './components/item';
import Datee from './components/itemdate';
function App() {
  return (
    <>
     <Item name="nirma" ></Item>
     <Datee day="24" month=" june" year="1794"></Datee>

     <Item name="surf excel" ></Item>
     <Datee day="7" month=" august" year="1356"></Datee>

     <Item name="555" ></Item>
     <Datee day="4" month=" september" year="2345"></Datee>
    <div className="App">
     hello guys uth gaya hu!
    </div>
    </>
  );
}

export default App;
