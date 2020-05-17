var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var trafficlightSchema = new Schema({
  identifier: { type: String },
  total: { type: Number },
}, { timestamps: { createdAt: 'created_at' } });


module.exports = mongoose.model('trafficlight', trafficlightSchema);