let response = (promise, res) => {
    promise
    .then((data) => {
        if (data === null) {
            res.status(404).json({
                status: 404,
                reason: "Resource not found",
            })
            return
        }

        res.status(200).json(data)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
};

module.exports = response;