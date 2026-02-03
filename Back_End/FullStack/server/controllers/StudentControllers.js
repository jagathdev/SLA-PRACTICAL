import StuModel from '../models/studentModel.js'

export const stuCreate = async (req, res) => {

    try {
        const storeStu = await StuModel.insertOne(req.body)

        console.log(storeStu)

        res.status(200).json({ StudentData: storeStu })

    } catch (error) {
        console.log("Error")
        res.status(500).json({ error: "Internal Server Error", error })
    }

}