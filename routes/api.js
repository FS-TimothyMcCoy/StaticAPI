module.exports = (express) => {
var router = express.Router();

var shortenerLogic = require('../src/module.js');

router.post('/status', (req, res) => {
res.json({ healthy: true});
});

router.post('/v1/url', (req, res) => {
var url = req.body.url;

if (url === '') {

      res.json({ baseUrl: 'Please Insert a URL', newUrl: 'Please Insert a URL' });
    } else {

      var createNewUrl = shortenerLogic.strLogic(5);


      res.json({ baseUrl: url, newUrl: createNewUrl });
    }
  });

  return router;
};
