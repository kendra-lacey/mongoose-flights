import { Router } from "express";
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

//GET /MEALS/NEW
router.get('/new', mealsCtrl.new)

//POST /MEALS
router.post('/', mealsCtrl.create)

export {
  router
}