const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    driver: {
        driverName: { type: String },
        documents: { type: String },
        divisionCode: { type: String },
        organisation: { type: String },
        phoneNumber: { type: String }
    },
    avto: {
        variant: { type: Number },
        mark: { type: String },
        number: { type: String },
        trailerNumber: { type: String },
        priorityCar: { type: Number, default: 0 }
    }
});

schema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Transport', schema);