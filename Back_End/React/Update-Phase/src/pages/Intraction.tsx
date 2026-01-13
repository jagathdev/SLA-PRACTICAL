import { useLocation } from "react-router-dom";
import ButtonClick from "../components/ButtonClick";

const Intraction = () => {

    const location = useLocation()

    // const getData = location.state.datas
    // console.log(getData)

    return (<>
        <div className="h-110 bg-gray-300 flex flex-col gap-5" >
            <div>
                <h1 className="text-3xl font-bold">Intraction Page</h1>
            </div>
            <div>
                <ButtonClick />
            </div>
            <div>
                {/* {
                    getData.map((e: any) => (
                        <div key={e.id}>
                            <h1>Name:{e.name}</h1>
                        </div>
                    ))} */}
            </div>
        </div>
    </>)
};

export default Intraction;
