export const arrayControler = (req, res) => {

    let newArrayUser = [];

    try {
        const newUser = {
            id: newArrayUser.length + 1,
            ...req.body,
            createdBy: req.headers?.author || 'unKnown User'
        }
        newArrayUser.push(newUser)

        res.status(201).json({
            msg: "Data Added",
            data: newUser
        })
    } catch (error) {
        console.log(error)
    }
}


export const getData = (req, res) => {
    try {
        console.log(req.body)
    } catch (error) {
        console.log(error)
    }
}
