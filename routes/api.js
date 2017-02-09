module.exports = (express) => {
    var router = express.Router();

    var shortenerLogic = require('../src/module.js');

    router.post('/status', (req, res) => {
        res.json({
            healthy: true
        });
    });

    router.post('/v1/url', (req, res) => {
        var url = req.body.url;

        if (url === undefined) {

            res.status(400).json({
                error: 'No url property supplied'
            });
        } else {

            var createNewUrl = shortenerLogic.strLogic(5);
            res.status(200).json({
                url: url,
                newUrl: createNewUrl
            });
        }
    });

    return router;
};
