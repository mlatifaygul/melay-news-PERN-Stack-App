exports.getUser = async (req, res) => {
    try {
        res.send("Auth Api !")
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}