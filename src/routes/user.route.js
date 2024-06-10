//<>
//AQUI ESTABLECEREMOS LOS ENDPOINTS
const express = require("express");
const userUseCase = require("../usecases/user.usecase");
const route  = express.Router();

//GET users/:"id"
route.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userUseCase.getById(id);
        
        res.json({
            succes:true,
            data: { user }
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json ({
            succes: false,
            error:error.message,
        });
    }
});

//POST /user

route.post ("/", async (req,res) => {
    try {
        const userCreate = await userUseCase.create(req.body);

        res.json({
            succes: true,
            data: { user: userCreate }
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json ({
            succes: false,
            error:error.message,
        });
    }
});

module.exports = route; 