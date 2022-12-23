import moongose from "mongoose";
import User from "../../data/models/User.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
