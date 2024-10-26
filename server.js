const express = require("express");
const app = express();
const bodyPaser = require("body-parser");
const cors = require("cors");

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));
app.use(cors());

const userController = require("./controllers/UserController");
const foodTypeController = require("./controllers/FoodTypeController");
const foodSizeController = require("./controllers/FoodSizeController");

//
// Food Size
//
app.delete("/api/foodSize/remove/:id", (req, res) =>
  foodSizeController.remove(req, res)
);
app.get("/api/foodSize/list", (req, res) => foodSizeController.list(req, res));
app.post("/api/foodSize/create", (req, res) =>
  foodSizeController.create(req, res)
);
//
// Food Type
//
app.put("/api/foodSize/update", (req, res) =>
  foodSizeController.update(req, res)
);
app.put("/api/foodType/update", (req, res) =>
  foodTypeController.update(req, res)
);
app.delete("/api/foodType/remove/:id", (req, res) =>
  foodTypeController.remove(req, res)
);
app.get("/api/foodType/list", (req, res) => foodTypeController.list(req, res));
app.post("/api/foodType/create", (req, res) =>
  foodTypeController.create(req, res)
);

//
// user
//
app.post("/api/user/signIn", (req, res) => userController.signIn(req, res));

app.listen(3001, () => {
  console.log("API Server Running on Port 3001");
});
