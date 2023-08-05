import express, { Router, Request, Response, NextFunction } from 'express';
import Book from '../models/book';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    Book.find().then((books: any) => {
        res.status(200).json(books);
    }).catch((err: any) => {
        res.status(500).json({ message: 'an error occurred', error: err });
    });
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    console.log(id);
    Book.findById(id).then((book: any) => {
        res.status(200).json(book);
    }).catch((err: any) => {
        res.status(500).json({ message: 'could not get book', error: err });
    });
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const book = new Book({
        title: req.body.title || 'Untitled',
        author: req.body.author || 'Anonymous',
        rating: req.body.rating || 0,
        description: req.body.description || '',
        imageUrl: req.body.imageUrl || '',
        dateRead: req.body.dateRead || ''
    });

    book.save().then((book: any) => {
        res.status(201).json({
            message: "book added successfully",
            book: book
        });
    }).catch((err: any) => {
        res.status(500).json({
            message: 'could not post book',
            error: err
        });
    });
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    Book.findOne({ _id: req.params.id }).then((book) => {
        if (book) {
            book.title = req.body.title || '';
            book.author = req.body.author || '';
            book.rating = req.body.rating;
            book.description = req.body.description || '';
            book.imageUrl = req.body.imageUrl || '';
            book.dateRead = req.body.dateRead || '';

            Book.updateOne({ _id: req.params.id }, book).then((result: any) => {
                res.status(204).json({
                    message: 'Book updated successfully',
                });
            }).catch((error: any) => {
                res.status(500).json({
                    message: 'An error occurred',
                    error: error
                });
            });
        } else {
            res.status(500).json({
                message: 'Book not found',
                error: { message: 'Book not found' }
            });
        }
    }).catch((error: any) => {
        console.log(error);
        res.status(500).json({
            message: 'Book not found',
            error: { message: 'Book not found' }
        });
    });
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    Book.findOne({ _id: req.params.id }).then((book: any) => {
        Book.deleteOne({ _id: req.params.id }).then((result: any) => {
            res.status(204).json({
                message: "Book deleted successfully",
                result: result
            });
        }).catch((err: any) => {
            res.status(500).json({
                message: 'An error occurred',
                error: err
            });
        });
    }).catch((err: any) => {
        res.status(500).json({
            message: 'Book not found',
            error: { message: 'Book not found' }
        });
    });
});

export default router;
