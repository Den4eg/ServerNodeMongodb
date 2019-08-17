const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Transport = require('./transport');

let idCars
Transport.findOne({ ticketId })

const schema = new Schema(
    {
        serviceTags: {
            ticketNumber: {
                type: Number
            },
            importOrExport: {
                type: Number
            },
            status: {
                type: Number
            }
        },
        versions: {
            vNumber: {
                type: Number,
                dataChanges: {
                    date: {
                        documentDate: {
                            created: {
                                type: {
                                    type: new Date
                                },
                            },
                            changed: {
                                date: {
                                    type: {
                                        type: Date
                                    }
                                },
                                changeUser: {
                                    type: String
                                }
                            }
                        },
                        localTime: {
                            incomingTime: {
                                type: Date
                            },
                            outgoingTime: {
                                type: Date
                            }
                        }
                    },
                    car: idCars,
                    documents: {
                        type: Array
                    },
                    notes: {
                        type: String
                    }
                }
            }
        }
    }
);

schema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('mainJournal', schema);