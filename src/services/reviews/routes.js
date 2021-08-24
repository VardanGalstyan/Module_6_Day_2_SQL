import {Router} from 'express'
import * as reviewsHandlers from './handlers.js'

const reviewRoutes = Router()

reviewRoutes.get("/", reviewsHandlers.list)
reviewRoutes.get("/:id", reviewsHandlers.single)
reviewRoutes.post("/", reviewsHandlers.create)
reviewRoutes.put("/:id", reviewsHandlers.update)
reviewRoutes.delete("/:id", reviewsHandlers.deleteReviews)

export default reviewRoutes