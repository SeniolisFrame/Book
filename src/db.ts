import { connect } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config({path: __dirname + '/.env'});

const Mongodb_URI:string = String(process.env.MONGODB_URI);

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

export = connect(Mongodb_URI,option).then(()=>{
    console.log('MongoDB Connected');
}).catch((err)=>{
    console.log(err);
});