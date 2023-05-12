const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { checkApiKey } = require('./middlewares/auth.handler')

const { logErrors, errorHandler, boomErrorHandler, ormErrorhandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}

app.use(cors(options));
require('./utils/auth');

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

// realizamos la vadiación en la ruta que desamos proteger
  app.get('/protected-route', checkApiKey, (req, res) => {
  res.send('Hola, soy una ruta protegida');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorhandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi puerto ' +  port);
});
