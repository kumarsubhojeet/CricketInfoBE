const mongoose = require('mongoose');

const validateID = id => {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid)  throw new Error("player id is not valide or found")
}

module.exports = validateID;