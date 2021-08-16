import express, {Request,Response,Application} from 'express';
import database from "./db";

import BookRouter from "./routes/book.routes";

const app:Application = express();
const PORT = process.env.PORT || 3000;

database;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/book",BookRouter);

app.listen(PORT,()=>{
    console.log(`Server run at port ${PORT}`);
});