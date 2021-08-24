import {Router} from 'express'
import * as productHandlers from './handlers.js'

const productsRoute = Router()

productsRoute.get("/", productHandlers.list)
productsRoute.get("/:product_id", productHandlers.single)
productsRoute.post("/", productHandlers.create)

export default productsRoute