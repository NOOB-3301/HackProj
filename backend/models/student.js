const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    walletAddress: String,
    progress: Number,
    skills: [String],
    enrolledModules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
    badges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }],
});

module.exports = mongoose.model('Student', studentSchema);