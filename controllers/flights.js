import { Flight } from "../models/flight.js"



function newFlights(req, res) {
  res.render('flights/new', {
  title: "Add Flight",
  })
}

function create(req, res) {
// use the model to create a flight (using form data in req.body)
  Flight.create(req.body)
  .then(movie => {
  // redirect to new flights
    res.redirect('flights/new')
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
  .then(flight => {
    res.render('flights/show', {
      title: 'Flight Detail',
      flight: flight
    })
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



export {
  newFlights as new,
  create,
  index,
  show,
  deleteFlight as delete,
}