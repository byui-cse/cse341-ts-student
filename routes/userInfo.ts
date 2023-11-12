import express from "express";

import getInfo from "../controllers/userinfo";

import isAuth from "../middleware/authToken";

const router = express.Router();

// GET INFO
router.get("/", isAuth, getInfo);
// localhost:8080/userInfo/
export default router;