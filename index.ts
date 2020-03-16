import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`application running at ${process.env.PORT || 3000}`);
});
