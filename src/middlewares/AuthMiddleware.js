const tokenValidator = async (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).json('Token not found');
    }

    return next();
};

module.exports = { tokenValidator };