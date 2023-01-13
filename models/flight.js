import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema ({
    seat: {
      type: String,
      match: /[A-F][1-9]\d?/
    },
    price: {
      type: Number,
      min: 0
    }
})

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United', 'Spirit']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function(){
      let date = new Date()
      return date.setFullYear(date.getFullYear()+1)
    },
  },
  ticket: [ticketSchema],
}, {
    timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
