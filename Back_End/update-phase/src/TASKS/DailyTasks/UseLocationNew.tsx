import { useLocation } from "react-router-dom";

const UseLocationNew = ({ userdata }: any) => {

    const location = useLocation()

    const getdata = location.state.userdata

    console.log(getdata)

    return (<>


    </>)
}

export default UseLocationNew;
