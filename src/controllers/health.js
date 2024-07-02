function health(req, res) {
    return res.status(200).json('API STATUS: [ONLINE]');
}

module.exports = {health};