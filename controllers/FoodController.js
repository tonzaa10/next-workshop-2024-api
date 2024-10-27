const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  upload: async (req, res) => {
    try {
      if (req.files != undefined) {
        const myFile = req.files.myFile;

        const fileName = myFile.name;

        // rename file
        const fileExtension = fileName.split(".").pop();
        const newFileName = new Date().getTime() + "." + fileExtension;
        const path = "uploads/" + newFileName;

        // save file
        myFile.mv(path, async (err) => {
          if (err) {
            return res.status(500).send({ error: err.message });
          }

          return res.send({ message: "success", fileName: newFileName });
        });
      } else {
        return res.status(500).send({ error: "No file uploaded" });
      }
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },
  create: async (req, res) => {
    try {
      await prisma.food.create({
        data: {
          foodTypeId: req.body.foodTypeId,
          name: req.body.name,
          remark: req.body.remark,
          price: req.body.price,
          img: req.body.img,
          foodType: req.body.foodType,
        },
      });

      return res.send({ message: "success" });
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },
};