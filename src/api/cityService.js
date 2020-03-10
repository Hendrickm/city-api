const City = require('./city')

City.methods(['get'])
City.updateOptions({new: true, runValidators: true})

module.exports = City