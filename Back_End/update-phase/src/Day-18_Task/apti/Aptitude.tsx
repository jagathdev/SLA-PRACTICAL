import AptiPresent from "./ApdiPresent";

const Aptitude = () => {

    interface ques {
        question: string
    }

    const Questions: ques[] = [
        { question: "hi" },
        { question: "hi" },
        { question: "hi" },
        { question: "hi" },
    ];

    return (<>
        <AptiPresent question={Questions} />
    </>)
};

export default Aptitude