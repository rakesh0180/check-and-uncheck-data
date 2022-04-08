import logo from './logo.svg';
import './App.css';
import GetTodo from './GetTodo';
import Status from './Status';

function App() {
  return (
    <div className="">
            <div style={{ marginTop: '30px' }} className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <GetTodo />
                    </div>
                    <div className='col-md-6'>
                        <Status/>
                    </div>
                </div>
            </div>
        </div>


  );
}

export default App;
