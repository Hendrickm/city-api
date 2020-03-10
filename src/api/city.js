const restul = require('node-restful')
const mongoose = restul.mongoose

const citySchema = new mongoose.Schema({
  id: { type: Number, required: true},
  name: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  coord: { type: Object, required: true }
})

module.exports = restul.model('City', citySchema)