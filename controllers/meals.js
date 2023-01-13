import { Meal } from "../models/meal.js"



function show(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/show', {
      title: 'Meals 🍲',
      meals : meals,
    })
  })
  .catch(err => {
    console.log("error")
    res.redirect("/meals")
  })
}

function create(req, res) {
  Meal.create(req.body)
  .then(meal => {
    res.redirect('/meals')
  })
  .catch(err => {
    console.log("error")
    res.redirect('/meals')
  })
}

export {
show,
create,
}