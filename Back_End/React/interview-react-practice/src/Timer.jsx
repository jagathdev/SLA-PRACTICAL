import { useEffect, useState } from "react"

const Timer = () => {

    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const TimerFunction = () => {
            setTimeout(() => {
                setTimer(timer + 1)
            }, 1000)
        }
        TimerFunction()
    })

    return (<>
        Timer:{timer}
    </>)
}
export default Timer