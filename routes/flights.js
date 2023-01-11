import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET/ FLIGHTS
router.get('/', flightsCtrl.index)

// GET/ FLIGHTS/NEW
router.get('/new', flightsCtrl.new)

// POST/ FLIGHTS
router.post('/', flightsCtrl.create)

//

export {
  router
}
