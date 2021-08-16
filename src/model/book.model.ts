import mongoose , { Schema } from 'mongoose';

interface Book {
    book_name : string;
    author : string;
}

const bookSchema = new Schema<Book>({
    book_name: {
        type : String,
        require : true
    },
    author: {
        type : String,
        require : true
    }
},{
    versionKey : false
}
);
const book = mongoose.model<Book>('Book', bookSchema);
export = book;