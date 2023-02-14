import mongoose from "mongoose";

mongoose.connect("mongodb+srv://senac:123@senac.nv4ly.mongodb.net/senac-node");


let db = mongoose.connection;

export default db;