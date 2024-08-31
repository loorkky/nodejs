const express = require('express');
const User = require("../models/user");
const router = new express.Router();

router.get('/test', (req, res) => {
    res.send("From a new File");
});

router.post("/", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) {
            res.status(404).send("Користувач не знайдений");
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) {
            res.status(404).send("Користувач не знайдений");
            return;
        }
        const fields = ["name", "age", "email", "password"];
        fields.forEach(field => {
            if (req.body[field]) {
                user[field] = req.body[field];
            }
        });
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id });
        if (!user) {
            res.status(404).send("Користувач не знайдений");
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete("/", async (req, res) => {
    try {
        const result = await User.deleteMany();
        res.json(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
