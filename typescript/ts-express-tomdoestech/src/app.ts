import express, { NextFunction, Request, Response, response } from 'express';
import helmet from 'helmet';

const app = express();
app.use(express.json());
app.use(helmet());


const middleware = ({ name }: { name: string }) => (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    req.name = name;
    // OR
    res.locals.name = name;

    next();
}

app.use(middleware({ name: 'test' }))

app.get('/', (req: Request, res: Response) => {

    res.send('hello there');
})

app.post('/', (req: Request, res: Response) => {

    console.log('data is ', req.body);
    return res.send('this is response');
})

app.get('/a*z', (req: Request, res: Response) => {
    console.log('Random request');
    return res.sendStatus(200);
})

app.get(/abc/, (_, res: Response) => {
    console.log('regex request');
    return res.sendStatus(200);
})

function handleBookOne(req: Request<{ bookID: string }, { authorID: 'string' }>, res: Response, next: NextFunction) {
    // return res.send(req.params);
    // @ts-ignore
    // req.name = 'test';
    console.log('name is ', res.locals.name)
    console.log('bookid is ',req.params.bookID)
    next();
}

function handleBookTwo(req: Request, res: Response) {
    console.log('hey There this is handle book two funciton');
    return res.send(req.params);
}


app.get('/api/book/:bookID/:authorID', [handleBookOne, handleBookTwo])

app.listen(3000, () => {
    console.log('App is running on : http://localhost:3000')
})


