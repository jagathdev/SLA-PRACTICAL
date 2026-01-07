const Button = ({ fun, text }) => {

    return (
        <>
            <button onClick={fun} className='bg-black text-white p-2 rounded-2xl m-5'>{text}</button>
        </>
    )
}

export default Button;
