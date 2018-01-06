const request = require('superagent');
const baseFCU = '';
const baseTS = 'https://api.thingspeak.com/channels/397047';

module.exports = {

    get: function (tempUrl, query, callback) {

        if (typeof(query) !== 'object') {
            // 檢查 query 是否有被正確傳遞
            // ref => http://xiayuanfeng.iteye.com/blog/301453
            callback = query;	// callback 也是個函數，所以可以傳值[取代query]
            query = null;	//不加這行，會把整個 callback 當參數傳遞[把query消掉]
        }

        request
            .get(baseFCU + tempUrl)
            .query(query)
            .accept('application/json')
            .end(function (err, res) {
                if (err) {
                    console.error(err);
                    console.error('Error raw response:', err.rawResponse);
                    return callback(err);
                }
                return callback(res.body, res.text);
            });
    },

    getTS: function (tempUrl, callback) {
        request
            .get(baseTS + tempUrl)
            .accept('application/json')
            .end(function (err, res) {
                // console.debug('apiGet: res', res);
                // console.debug('apiGet: res.body', res.body);
                // console.debug('apiGet: res.text', res.text);
                if (err) {
                    console.error('Error in Generic.jsx: ', err);
                    return err;
                }
                return callback(res.body, res.text);
            });
    },
};