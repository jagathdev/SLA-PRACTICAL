import student from "../model/studentModel.js"

export const studentCreate = async (req, res) => {
    try {
        // const newStudent = await student.create(req.body)

        // res.status(200).json({ student: newStudent })

        console.log(req.body)

    } catch (error) {
        console.log("Error", error)
    }

}






