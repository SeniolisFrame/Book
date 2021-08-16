import Book from "../model/book.model";
import { Request,Response } from "express";

const addBook = (req:Request,res:Response) => {
    let book = new Book({
        book_name : req.body.book_name,
        author : req.body.author
    });
    book.save().then(()=>{
        res.json({
            message : "add book success" 
        });
    }).catch((err)=>{
        console.log(err);
        res.json({
            message : "add book fail"
        })
    })
}

export = {
    addBook
}
