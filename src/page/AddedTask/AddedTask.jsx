// import swal from "sweetalert";
import swal from "sweetalert";
import useAxiosPublic from "../../hook/useAxiosPublic";


const AddedTask = () => {
    const axiosPublic = useAxiosPublic()
    const MakeTask = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const discription = form.discription.value;
        const date = form.date.value;
        const priority = form.priority.value;
        // console.log(title, discription);
        e.target.reset();
        const TaskInfo = {
            title, discription,priority,date
        }
        axiosPublic.post('/tasks', TaskInfo)
            .then(res => {
                if (res.data.acknowledged == true) {
                    swal("Good job!", "Added Producted Successfull", "success");
                    console.log('user added to the data base');

                 
                }
            })
    }
    return (
        <div className="w-52 md:w-[500px] lg:w-[900px]"
        data-aos="zoom-out"
        >
            <form onSubmit={MakeTask} className="card-body">
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Title" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Discription</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="discription" placeholder="Discription"></textarea>

                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">DeadLine</span>
                    </label>
                    <input type="date" name="date" placeholder="date" className="input input-bordered" />
                </div>
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        
                        <select name="priority" className="select select-bordered w-full ">
                            
                            <option>Low</option>
                            <option>Mediom</option>
                            <option>High</option>
                             
                        </select>
                    </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Added Task</button>
                </div>
            </form>
        </div>
    );
};

export default AddedTask;