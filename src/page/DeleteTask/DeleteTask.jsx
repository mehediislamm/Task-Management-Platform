import { useEffect, useState } from "react";
import swal from "sweetalert";



const DeleteTask = () => {
    const [todoList, setTodoList] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/tasks`)
            .then(res => res.json())
            .then(data => {
                setTodoList(data)
            })
    }, [])

    const handleDelete = (_id) => {


        fetch(`http://localhost:5000/tasks/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                const filterdata = todoList.filter((item) => item._id !== _id);
                setTodoList(filterdata)

                if (data.deletedCount > 0) {

                    swal("Delete!", "Delete Products Successfull", "error");
                }
            });
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
                {
                    todoList.map(todoLists => <div key={todoLists._id}>
                        <div className=" md:w-44 border bg-red-300 p-3">

                            <div className=" rounded-xl bg-red-500 mb-5 text-center pt-5 pb-5 w-full">
                                <h2 className="mb-1">{todoLists?.title}</h2>
                                <p className="mb-1">{todoLists?.discription}</p>
                                <p className="mb-1">{todoLists?.date}</p>
                                <p className="mb-2">priority : {todoLists?.priority}</p>
                                <div className="card-actions justify-center">
                                    <button onClick={() => handleDelete(todoLists._id)} className="btn btn-primary btn-xs ">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default DeleteTask;