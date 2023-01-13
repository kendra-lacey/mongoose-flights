import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js"



function newFlight(req, res) {
  res.render('flights/new', {
  title: "Add Flight",
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') {
    let date = new Date()
    let oneYearFromNow = date.getFullYear() + 1
    req.body.departs = date
  }
}
// use the model to create a flight (using form data in req.body)
  Flight.create(req.body)
  .then(flight => {
  // redirect to new flights
    res.redirect(`flights/${flight,_id}`)
  })

  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights,
      title: 'All Flights'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('meals')
  .then(flight => {
    Meal.find({})
    .then(meals => {
      res.render('flights/show', {
        title: 'Flight Detail',
        flight: flight,
        meals
      })
    })
    .catch(err => {
      console.log("error")
      res.redirect('/flights')
    })
  })
    .catch(err => {
      console.log("error")
      res.redirect('/flights')
})
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/edit', {
      title: 'Edit Flight',
      flight: flight
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function update(req, res) {
  // for (let key in req.body) {
  //   if (req.body[key] === '') delete req.body[key]
  // }
  console.log(req.params.id)
  Flight.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function createTicket(req, res) {
  console.log("request:")
  console.log(req.params)
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then (() => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function addMeal(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.meals.push(req.body.mealId)
    console.log(flight)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}


export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket,
  addMeal
}