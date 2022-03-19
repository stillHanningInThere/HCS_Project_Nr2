const express = require("express");
const cors = require("cors");

const destinationData = require("./destinationData.json")
const swedenData = require("./swedenData.json")
const molotowData = require("./molotowData.json")
const mallorcaData = require("./mallorcaData.json")
const parisData = require("./parisData.json")
const greeceData = require("./greeceData.json")
const swedenImages = require("./swedenImages.json")
const parisImages = require("./parisImages.json")
const molotowImages = require("./molotowImages.json")
const mallorcaImages = require("./mallorcaImages.json")
const greeceImages = require("./greeceImages.json")

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/destinations", function (req, res) {

    res.json(destinationData);

});

app.get("/destinations/:id", (req, res) => {
    const id = Number(req.params.id)
    // console.log(id)

    const event = destinationData.find(event => event.id === id);
    res.send(event);
    // console.log(event);
});

app.get("/sweden", (req, res) => {
    res.json(swedenData)
})

app.get("/sweden/images", (req, res) => {
    res.json(swedenImages)
})

app.get("/molotow", (req, res) => {
    res.json(molotowData)
})
app.get("/molotow/images", (req, res) => {
    res.json(molotowImages)
})

app.get("/mallorca", (req, res) => {
    res.json(mallorcaData)
})

app.get("/mallorca/images", (req, res) => {
    res.json(mallorcaImages)
})

app.get("/paris", (req, res) => {
    res.json(parisData)
})
app.get("/paris/images", (req, res) => {
    res.json(parisImages)
})

app.get("/greece", (req, res) => {
    res.json(greeceData)
})
app.get("/greece/images", (req, res) => {
    res.json(greeceImages)
})


app.listen(port, function () {
    console.log(`Server running on port ${port}`);
})