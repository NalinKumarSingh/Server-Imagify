import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true,unique: false},
  password: { type: String, required: true },
  creditBalance: { type: Number, default: 5 },
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
