const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Note", NoteSchema);
