var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var trafficlightSchema = new Schema({
  value1: { type: Number },
  value2: { type: Number },
}, { timestamps: { createdAt: 'created_at' } });


module.exports = mongoose.model('trafficlight', trafficlightSchema, 'history');