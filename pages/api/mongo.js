const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("Database successfully connected");
});

mongoose.connection.on("error", () => {
  console.log("Database failed to connect");
});

export async function connectDataBase() {
  mongoose.connect("mongodb://localhost:27017/reservas");
}

// Shemas and models

const schema = new mongoose.Schema({
  id: Number,
  data: Object,
});

const cadeirasModel =
  mongoose.models.reserva || mongoose.model("reserva", schema);
// Exportar as cadeiras e seus estados.
export async function getData() {
  return await cadeirasModel.findOne({id:}, { __v: false, _id: 0 });
}
// Adicionar ou atualizar o estado das cadeiras
export async function postData(data) {
  await cadeirasModel.updateOne(
    { id: data.id },
    { $set: { data: data } },
    { upsert: true }
  );
}
