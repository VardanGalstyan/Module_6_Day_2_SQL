import db from "../../db/connection.js"


export const list = async (res, req, next) => {
    try {
        const products = await db.query(`SELECT * FROM products`)
        res.send(products.rows)
    } catch (error) {
        console.log(error);
    }
};

export const single = async (res, req, next) => {
    try {
        const { product_id } = req.params
        const products = await db.query(`SELECT * FROM products WHERE product_id=${product_id}`)
        res.send(products.rows[0])
    } catch (error) {
        console.log(error);
    }
};

export const create = async (req, res, next) => {
    try {
        const { name, description, brand, image_url, price, category } = req.body
        const products = await db.query(
            `INSERT INTO products(name, description, brand, image_url, price, category) VALUES('${name}', '${description}', '${brand}', '${image_url}', '${price}', '${category}') RETURNING *;`);
        res.send(products.rows[0])
    } catch (error) {
        res.status(500).send(error)
    }
}

