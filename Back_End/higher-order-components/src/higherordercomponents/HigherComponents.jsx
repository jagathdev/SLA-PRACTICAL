import Button from "../components/Button";

const Withsomething = Button;
const HigherComponents = () => {


    const WithDataFuntion = (Withsomething) => (props) => {
        <Withsomething {...props} />
    }


    return (
        <>
            <Button props={"Normal Button"} />
            <WithDataFuntion props={"HOC Button"} />
        </>
    )

}
export default HigherComponents;
