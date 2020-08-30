import app from './App';

const port = Number(process.env.PORT) || 3000;

app.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    return console.log(err);
  }

  // eslint-disable-next-line no-console
  return console.log(`server is listening on ${port}`);
});
