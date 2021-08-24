import { Router } from 'express'
import productsRoute from './products/routes.js'
import reviewRoutes from './reviews/routes.js'


const route = Router()



route.use('/products', productsRoute)
route.use('/reviews', reviewRoutes)


export default route