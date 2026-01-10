import { useNavigate } from 'react-router-dom'
import useGetFormData from '../form/useGetFormData'

const LoginForm = () => {

    const navigate = useNavigate()

    const { getInputData, inputData } = useGetFormData()

    const localdata = localStorage.getItem(JSON.parse("regFormData"))

    const getFormData = () => {
        if (inputData.email !== localdata.email) {
            alert("Email mismatch")
        } else if (inputData.password !== localdata.password) {
            alert("password mismatch")
        } else {
            navigate("/homefrompage")
        }
    }

    return (
        <>
            <form onSubmit={getFormData}>
                <label>Email :</label>
                <input type="email" onChange={getInputData} />
                <label>Password :</label>
                <input type="password" onChange={getInputData} />
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default LoginForm;

