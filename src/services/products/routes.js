import {Router} from 'express'
import * as productHandlers from './handlers.js'

const productsRoute = Router()

productsRoute.get("/", productHandlers.list)

export default productsRoute