import React, {useState, useEffect} from 'react'
import { subject } from './subject';

const Status = () =>{
    const [todo, setTodo] = useState([]);
    console.log("todo",todo);

 
    return(
        <div>
        <p style={{ margin: '25px' }}></p>
        <table className='table table-hover table-bordered '>
            <thead className='tabHed'>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todo.map((emp, i) =>
                        <tr key={"keyName" + i}>
                            <td>{emp.id}</td>
                            <td>{emp.title}</td>
                            <td><input
                                        type="checkbox"
                                        // checked={state}
                                        // onChange={selectTodo}
                                    /></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
    )
}

export default Status