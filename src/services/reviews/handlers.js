export const list = async (req, res, next) => {
    try {
        res.send('Reviews are received!')
    } catch (error) {
        res.status(500).send(error)
    }
}

