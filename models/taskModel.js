const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskname: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  deadline: { type: Date }
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
