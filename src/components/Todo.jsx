import React from 'react'
import useFetch from '../hooks/usefetch';
function Todo() {
    const result = useFetch("https://jsonplaceholder.typicode.com/todos")
    console.log(result);

    return (
        <>
            <h1 className='text-center text-danger m-5 text-bold'>TODO LIST</h1>
            <div className='container' >
                <table className='table shadow mt-5'>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            result?.length > 0 ? result.map((todo, index) => (
                                <tr key={index}>
                                    <td>{todo.userId}</td>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed ? "True" : "False"}</td>
                                </tr>
                            )) : <tr> Error </tr>

                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Todo