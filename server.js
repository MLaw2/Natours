const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABSE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB, {}).then(() => {
  console.log('DB connection established');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
