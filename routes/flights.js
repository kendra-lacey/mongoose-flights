import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET/ FLIGHTS
router.get('/', flightsCtrl.index)

// GET/ FLIGHTS/NEW
router.get('/new', flightsCtrl.new)

// GET/ FLIGHTS/:ID
router.get('/:id', flightsCtrl.show)

// POST/ FLIGHTS
router.post('/', flightsCtrl.create)

// DELETE /FLIGHTS/:ID
router.delete('/:id', flightsCtrl.delete)
//

export {
  router
}
