const app = require('./app');
const mongoose = require('mongoose');

const DB = process.env.DATABASE_STRING.replace(
  '<PASSWORD>',
  process.env.PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`DB Connection Successfull!`);
  });

const port = process.env.PORT || 4310;
app.listen(port, () => {
  console.log(`Server running on Port: ${port}`);
});
