import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET/ 
// GET/ FLIGHTS/ NEW
router.get('/new', flightsCtrl.new)

// POST/ FLIGHTS

//

export {
  router
}
