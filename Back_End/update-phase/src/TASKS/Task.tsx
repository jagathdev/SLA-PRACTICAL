import { Link, useLocation } from "react-router-dom";

const Task = () => {

    interface tasktype {
        name: string,
        link: string
    }

    const TaskLink: tasktype[] = [
        { name: "Day18Task", link: "/task/day18Task" },
        { name: "Day19Task", link: "/task/day19Task" },
        { name: "Day20Task", link: "/task/day20Task" },
        { name: "Day21Task", link: "/task/day21Task" },
        { name: "Day22Task", link: "/task/day22Task" },
    ];

    // const location = useLocation()

    // const taskData = location.state.TaskLink

    // console.log(taskData)

    return (<>
        <div className="bg-gray-800 text-white h-auto text-center flex flex-col items-center gap-10">

            <h1 className="text-3xl p-3">This is a Task Page</h1>

            <div>
                {TaskLink.map((e: any, i: number) => (
                    <div key={i} className="flex w-40 mb-10">
                        <Link to={e.link} className="p-2 rounded-2xl text-black font-bold bg-amber-300 ">{e.name}</Link>
                    </div>
                ))}
            </div>

        </div >
    </>)
};

export default Task;
