export const userController = (req, res) => {

    console.log(req)

    res.status(200).json(users)
}