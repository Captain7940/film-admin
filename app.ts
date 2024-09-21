import express, { Request, Response, NextFunction } from 'express';
import FilmRouter from './routes/film';
import usersRouter from "./routes/user";
import loginRouter from "./routes/login";
import logoutRouter from "./routes/logout";
import { expressjwt } from 'express-jwt';
import { SECRET_KEY } from './constant';
import createError from 'http-errors';
import path from 'path';
import cookieParser from "cookie-parser";
import logger from "morgan";

require('./model/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressjwt({secret: SECRET_KEY, algorithms: ['HS256']}).unless({ path: ['/api/login'] }));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/films', FilmRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/logout", logoutRouter);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});


app.listen('3005', () => {
  console.log('server start at 3005');
});

module.exports = app;
