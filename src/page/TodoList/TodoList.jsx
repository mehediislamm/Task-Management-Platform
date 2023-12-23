import { useEffect, useState } from "react";



const TodoList = () => {
    const [todoList, setTodoList] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/tasks`)
            .then(res => res.json())
            .then(data => {
                setTodoList(data)
            })
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div >
                <h1 className="text-center mb-5 text-2xl font-bold">Todo List</h1>
                {
                    todoList.map(todoLists => <div key={todoLists._id}>
                        <div className="md:w-44 border bg-red-300 p-3">

                            <div className="rounded-xl bg-red-500 mb-5 text-center pt-5 pb-5 w-full">
                                <h2 className="mb-1">{todoLists?.title}</h2>
                                <p className="mb-1">{todoLists?.discription}</p>
                                <p className="mb-1">{todoLists?.date}</p>
                                <p>priority : {todoLists?.priority}</p>
                            </div>
                        </div>
                    </div>)
                }

            </div>
           
                <div className="md:w-44 h-full bg-slate-500 mb-2 mt-14">
                    <h1 className="text-center text-xl">Ongoing</h1>
                    <div>

                    </div>
                </div>
                <div className="md:w-44 lg:w-full h-full bg-blue-500 mt-14">
                    <h1 className="text-center text-xl">Complite</h1>
                    <div>

                    </div>
                </div>
             
        </div>
    );
};

export default TodoList;