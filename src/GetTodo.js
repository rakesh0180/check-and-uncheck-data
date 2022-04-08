import React, { useEffect, useState } from 'react'
import { subject } from './subject'
import axios from 'axios'

const GetTodo = () => {
    const [todo, setTodo] = useState([])
    const [state, setState] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                const result = response.data
                console.log("11", result)
                setTodo(result)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [])




    function selectTodo(e) {
        setState(!state)
        console.log("##", state)
    }





    return (
        <div>
            <p style={{ margin: '25px' }}></p>
            <table className='table table-hover table-bordered table-striped'>
                <thead className='tabHed'>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.slice(0, 10).map((ele, i) => {
                        console.log("33",ele)
                            if (ele.completed === false) {
                                <tr key={i}>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={ele.completed}
                                            onChange={selectTodo}
                                        /></td>
                                </tr>


                            }



                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default GetTodo