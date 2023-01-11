import { Flight } from "../models/flight.js"



function newFlights(req, res) {
  res.render('flights/new', {
  title: "Add Flight",
  })
}









export {
  newFlights as new,
}