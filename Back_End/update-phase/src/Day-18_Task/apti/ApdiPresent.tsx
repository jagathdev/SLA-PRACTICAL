const AptiPresent = ({ question }: any) => {
    return (<>
        {question.map((e: any, i: number) => (
            <h1 key={i}>{e.question}</h1>
        ))}
    </>)
};

export default AptiPresent;