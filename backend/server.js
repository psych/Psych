require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connect = require('./.configs/db');

const authRoutes = require('./routes/authenticate');
const questionnaireRoutes = require('./routes/questionnaire.routes')

const PORT = 3000;


// App
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));


// Routes
app.get('/', (request, response) => {
    response.send('Hello, Topper!');
});

app.use('/api/auth', authRoutes);
app.use('/api/questionnaire', questionnaireRoutes);

app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Listening at http://localhost:${PORT}`);
    }
    catch ({ message }) {
        console.log(message);
    }
})