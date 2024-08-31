const express = require("express");
const path = require("path");
const hbs = require("hbs");
const fetch = require("node-fetch");

let app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

hbs.registerPartials(path.join(__dirname, "views/partials"));

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/weather/:city', async (req, res) => {
    let city = req.params.city;
    if (!city) {
        city = req.query.city;
    }
    if (!city) {
        res.status(400).render("400");
        return;
    }

    let key = "b5018676b6c9e7d01aa7056fd2b9186d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    try {
        let response = await fetch(url);
        let weather = await response.json();

        if (weather.cod !== 200) {
            res.status(404).render("404", { message: weather.message });
            return;
        }

        res.render('weather', { city, weather });
    } catch (error) {
        res.status(500).render("500", { message: error.message });
    }
});

app.get('/login', (req, res) => {
    res.send("This is a login page");
});

app.get('/weather', (req, res) => {
    const weather = {
        description: "Clear sky"
    };
    res.render("weather", { weather });
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000");
});
