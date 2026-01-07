const withHoc = (WrapedComponent) => (props) => {

    const HocAlert = () => {
        alert("HocAlert Button Alert ")
    }
    const newHocAlert = () => {
        alert("newHocAlert")
    }

    const HocGetInput = (e) => {
        alert(e.target.value)
    }

    return (<>
        <WrapedComponent {...props} text="newHocButton" fun={HocAlert} />
        <WrapedComponent {...props} text="2nd HOC Button" fun={newHocAlert} />
        <WrapedComponent {...props} text="2nd HOC Button" inputFun={HocGetInput} />
    </>)
}

export default withHoc;
