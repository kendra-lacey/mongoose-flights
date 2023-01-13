import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET/ FLIGHTS
router.get('/', flightsCtrl.index)

// GET/ FLIGHTS/NEW
router.get('/new', flightsCtrl.new)

// GET/ FLIGHTS/:ID
router.get('/:id', flightsCtrl.show)

// GET/ FLIGHTS/:ID/EDIT
router.get('/:id/edit', flightsCtrl.edit)

// POST/ FLIGHTS
router.post('/', flightsCtrl.create)

// POST/ FLIGHTS/:ID/TICKETS
router.post('/:id/tickets', flightsCtrl.createTicket)

// POST/ FLIGHTS/:ID/MEALS
router.post('/:id/meals', flightsCtrl.addMeal)

// DELETE /FLIGHTS/:ID
router.delete('/:id', flightsCtrl.delete)

// PUT /FLIGHTS/:ID
router.put('/:id', flightsCtrl.update)



export {
  router
}
