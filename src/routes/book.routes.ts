import express from "express";
const router = express.Router();

import BookController from "../controller/book.controller";

router.post('/add-book',BookController.addBook);

export = router;