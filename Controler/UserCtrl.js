const User = require("../Model/UserSchema");
const expressAsyncHandler = require("express-async-handler");
const validateID = require("../utils/IDValidation");

//Register
const userRegisterCtrl = expressAsyncHandler(async (req, res) => {
    //Check if user Exist
    const userExists = await User.findOne({ name: req?.body?.name });

    if (userExists) throw new Error("User already exists");
    try {
        //Register user
        const user = await User.create({
            name: req?.body?.name,
            Country: req?.body?.Country,
            DOB: req?.body?.DOB,
            Role: req?.body?.Role,
            profilePhoto: req?.body?.profilePhoto,
            BattingCurrierFormat: req?.body?.BattingCurrierFormat,
            BattingCurrierMatches: req?.body?.BattingCurrierMatches,
            BattingCurrierInnings: req?.body?.BattingCurrierInnings,
            BattingCurrierRuns: req?.body?.BattingCurrierRuns,
            BattingCurrierHighestScore: req?.body?.BattingCurrierHighestScore,
            BattingCurrierAverage: req?.body?.BattingCurrierAverage,
            BattingCurrierStrikeRate: req?.body?.BattingCurrierStrikeRate,
            BattingCurrierHundreds: req?.body?.BattingCurrierHundreds,
            BattingCurrierFiftees: req?.body?.BattingCurrierFiftees,
            BattingCurrierFours: req?.body?.BattingCurrierFours,
            BattingCurrierSixes: req?.body?.BattingCurrierSixes,

            BowlingCurrierFormat: req?.body?.BowlingCurrierFormat,
            BowlingCurrierMatches: req?.body?.BowlingCurrierMatches,
            BowlingCurrierInnings: req?.body?.BowlingCurrierInnings,
            BowlingCurrierOvers: req?.body?.BowlingCurrierOvers,
            BowlingCurrierRuns: req?.body?.BowlingCurrierRuns,
            BowlingCurrierWickets: req?.body?.BowlingCurrierWickets,
            BowlingCurrierBBI: req?.body?.BowlingCurrierBBI,
            BowlingCurrierBBM: req?.body?.BowlingCurrierBBM,
            BowlingCurrierEcon: req?.body?.BowlingCurrierEcon,

        });
        res.json(user);
    } catch (error) {
        res.json(error);
    }
});

//Fetch All players
const fetchAllPlayers = expressAsyncHandler(async (req, res) => {
    try {
        const players = await User.find({})
        res.json(players);
    } catch (error) {
        res.json(error);
    }
})


// Fetch Single Player

const fetchSinglePlayer = expressAsyncHandler(async (req, res) => {
    const { id } = req.params
    validateID(id);

    try {
        const player = await User.findById(id);
        res.json(player);

    } catch (error) {
        res.json(error);
    }
}
)

// update single player

const updatePlayer = expressAsyncHandler(async (req, res) => {
    const { id } = req.params
    validateID(id);

    try {
        const player = await User.findByIdAndUpdate(id, {
            name: req?.body?.name,
            Country: req?.body?.Country,
            DOB: req?.body?.DOB,
            Role: req?.body?.Role,
            profilePhoto: req?.body?.profilePhoto
        });
        res.json(player);
    } catch (error) {
        res.json(error);
    }
}
)

//Delete Player
const deletePlayer = expressAsyncHandler(async (req, res) => {
    const { id } = req.params
    validateID(id);
    try {
        const deletePlayer = await User.findByIdAndDelete(id)
        res.json(deletePlayer)
    } catch (error) {
        res.json(error);
    }
})


module.exports = { userRegisterCtrl, fetchAllPlayers, deletePlayer, fetchSinglePlayer, updatePlayer };