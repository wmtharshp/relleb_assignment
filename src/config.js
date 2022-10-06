var elasticsearch = require('elasticsearch-browser');

var client = new elasticsearch.Client({
    host: 'http://localhost:9200/'
});



export default client;