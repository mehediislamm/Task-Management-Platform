import swal from "sweetalert";
import useAxiosPublic from "../../hook/useAxiosPublic";


const AddedTask = () => {
    const axiosPublic = useAxiosPublic()
    const MakeTask = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const discription = form.discription.value;
        // console.log(title, discription);
        e.target.reset();
        const TaskInfo = {
            title, discription
        }
        axiosPublic.post('/tasks', TaskInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log('user added to the data base ');
                    swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="w-52 md:w-[500px] lg:w-[900px]">
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
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Added Task</button>
                </div>
            </form>
        </div>
    );
};

export default AddedTask;