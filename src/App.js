import { connect } from 'react-redux';
import './App.css';
import { setTitle , setCount} from './store';

function App(props) {
  const funcHendler = (type) => {
    props.setTitle(type)
  }

  return (
    <div className="App">
        <h1>{props.title}</h1>
        <button onClick={() => funcHendler("SET_TITLE")}>Click me</button>
        <button onClick={() => funcHendler("SET_COUNT")}>set Count</button>
        <input type="text" placeholder='input ' onChange={(e) => funcHendler({type:"SET_INPUT", value:e.target.value})} />
    </div>
  );
}

const stateToProps = (state) => {
  return {
    title:state.title
  }
}

export default connect(stateToProps, {setTitle})(App)

