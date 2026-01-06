import { UserContext } from './UserContext';

const ProvideContext = ({ Children }) => {

    const [data, setData] = useState({})

    const getInputData = (e) => {

        const { name, value } = e.target

        setData({ ...data, [name]: value })

        console.log(data)
    }

    const getLoginData = (e) => {

        e.preventDefault();

        console.log(data)

        localStorage.setItem("loginData", JSON.stringify(data))

        const getData = localStorage.getItem("loginData")

        const finalData = JSON.parse(getData)

        console.log(finalData)
    }


    return (
        <>
            <div>
                <UserContext.Provider value={{ data, setData, getInputData, getLoginData }}>
                    {Children}
                </UserContext.Provider>
            </div>
        </>
    )
}

export default ProvideContext;
