import {Router} from 'express'
import * as reviewsHandlers from './handlers.js'

const reviewRoutes = Router()

reviewRoutes.get("/", reviewsHandlers.list)

export default reviewRoutes