const express = require("express");
const route = express.Router();
const authUseCase = require("../usecases/auth.usecase");

//POST /AUTH/LOGIN

route.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await authUseCase.login(email, password);

        res.json ({
            succes:true,
            data: { token },
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json ({
            succes: false,
            error: error.message,
        })
    }
})

module.exports = route;