import { Router } from "express";
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

//GET /MEALS/NEW
router.get('/', mealsCtrl.show)

//POST /MEALS
router.post('/new', mealsCtrl.create)

export {
  router
}