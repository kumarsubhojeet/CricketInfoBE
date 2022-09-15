const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    profilePhoto: {
        type: String,
        default:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    Role: {
        type: String,
    },
    DOB: {
        type: String,
    },
    Country: {
        type: String,
        required: true,
    },

    BattingCurrierFormat: {
        type: String,

    },
    BattingCurrierMatches: {
        type: Number,

    },
    BattingCurrierInnings: {
        type: Number,

    },
    BattingCurrierRuns: {
        type: Number,

    },
    BattingCurrierHighestScore: {
        type: Number,

    },
    BattingCurrierAverage: {
        type: Number,

    },
    BattingCurrierStrikeRate: {
        type: Number,

    },
    BattingCurrierHundreds: {
        type: Number,

    },
    BattingCurrierFiftees: {
        type: Number,

    },
    BattingCurrierFours: {
        type: Number,

    },
    BattingCurrierSixes: {
        type: Number,

    },

    BowlingCurrierFormat: {
        type: String,

    },
    BowlingCurrierMatches: {
        type: Number,

    },
    BowlingCurrierInnings: {
        type: Number,

    },
    BowlingCurrierOvers: {
        type: Number,

    },
    BowlingCurrierRuns: {
        type: Number,

    },
    BowlingCurrierWickets: {
        type: Number,

    },
    BowlingCurrierBBI: {
        type: Number,

    },
    BowlingCurrierBBM: {
        type: Number,

    },
    BowlingCurrierEcon: {
        type: Number,

    },

},
    {
        timestamps: true
    })

const User = mongoose.model('User', UserSchema);

module.exports = User;