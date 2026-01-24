export const create = (req, res) => {

    let user = []
    try {
        const newUser = {
            id: user.length + 1,
            ...req.body,
            createdBy: req.headers.data || "Not Vaild User"
        }
        user.push(newUser)

        res.status(201).json({
            msg: "User Added",
            data: newUser
        })
    } catch (error) {
        console.log(error)
    }
}