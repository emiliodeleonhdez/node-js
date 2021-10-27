const { request, response } = require("express");
const express = require("express");
const faker = require("faker");
const product = require("../usecases/users");
const router = express.Router();


router.get("/", async (request, response, next) => {
    const users = [];
    const { limit } = request.query;
  
    try {users
      const users = await user.get();
      response.json({
        ok: true,
        message: "Done!",
        payload: { users },
      });
    } catch (error) {
      next(error);
    }
  });

  modules.exports = router