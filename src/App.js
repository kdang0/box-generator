
import './App.css';
import {useState} from 'react'
import Form from './components/Form';
import Display from './components/Display';
function App() {
  const [currentBoxList, setCurrentBoxList] = useState([]);

  const getBox = (newBox) => {
    setCurrentBoxList([...currentBoxList, newBox])
  }
  return (
    <div className="App">
      <Form onNewBox = { getBox }/>
      <Display list = { currentBoxList }/>
    </div>
  );
}

export default App;
