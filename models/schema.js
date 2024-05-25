
const mongoose = require("mongoose");
const quotesSchema = new mongoose.Schema({
    file: { type: String, required: true },
    Author: { type: String, required: true },
    Description: { type: String, required: true },
    Likes: { type: Number },
    Date:{type:Date}
});

const Quotes = mongoose.model("quotes", quotesSchema);
module.exports = Quotes;