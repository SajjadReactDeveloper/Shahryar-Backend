exports.sendEmail = async(req, res) => {
    try {
        const {email, text} = req.body;
        console.log(email, text);
    } catch (error) {
        
    }
}