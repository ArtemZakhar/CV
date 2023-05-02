const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://artemzakharchuk:p69RUunZu25tY1It@artemzakharchuk.efhi8fb.mongodb.net/artemzakharchuk?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection is ready");
});

mongoose.connection.on("error", (e) => {
  console.log(e);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

/* async function mongoDisconnect() {
  await mongoose.disconnect();
} */

module.exports = {
  mongoConnect,
};
