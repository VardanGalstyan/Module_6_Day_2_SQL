import db from "../../db/connection.js"

export const list = async (req, res, next) => {
    try {
        const reviews = await db.query(`SELECT * FROM reviews`)
        res.send(reviews.rows)
    } catch (error) {
        res.status(500).send(error)
    }
};

export const single = async (req, res, next) => {
    try {
        const { id } = req.params
        const reviews = await db.query(`SELECT * FROM reviews WHERE id=${id};`);
        const [found, ...rest] = reviews.rows;
        res.status(found ? 200 : 400).send(found)
    } catch (error) {
        res.status(500).send(error)
    }
};

export const create = async (req, res, next) => {
    try {
        const {
            comment,
            rate,
            product_id
        } = req.body
        const reviews = await db.query(
            `INSERT INTO reviews(comment, rate, product_id ) VALUES('${comment}', '${rate}', '${product_id}') RETURNING *;`);
        res.send(reviews.rows[0])
    } catch (error) {
        res.status(500).send(error)
    }
};


export const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const { comment, rate } = req.body
        const reviews = await db.query(
            `UPDATE reviews
             SET comment = '${comment}', 
             rate = '${rate}',
             updated_at = NOW() 
             WHERE id = ${id} RETURNING *;`
        );
        const [found, ...rest] = reviews.rows;
        res.status(found ? 200 : 400).send(found)
    } catch (error) {
        res.status(500).send(error)
    }
};

export const deleteReviews = async (req, res, next) => {
    try {
        const { id } = req.params
        const rdResult = await db.query(
            `DELETE FROM reviews WHERE id = ${id}`
        );
        res.status(rdResult.rowCount ? 200 : 400).send()
    } catch (error) {
        res.status(500).send(error)
    }
}

