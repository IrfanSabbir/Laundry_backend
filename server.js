const express = require('express');
const connectDB = require('./config/db')

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) =>
  res.json({ msg: 'this is the best laundry service ever' })
);

// Init Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/edit', require('./routes/edit'));
app.use('/api/preference', require('./routes/preference'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
