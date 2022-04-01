const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const db = require('./db');
const { calculateLimitAndOffset, paginate } = require('paginate-info');
const { ObjectId } = require('mongodb');


const PORT = 8092;
const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());
app.options('*', cors());

console.log(`🏃 Running on port ${PORT}`);

async function connection()
{
    await db.connect();
}

app.get('/', (request, response) => {
        response.send({ 'ack': true });
    });


app.get('/products', async (request, response) => {
    //await connection();
    const filters = request.query;
    const { limit, offset } = calculateLimitAndOffset(parseInt(filters.page), parseInt(filters.size));
    var products = await db.findProducts({}, offset, limit, false);
    //console.log(products.length)


    response.send({ "Products": products });
});

app.get('/products/search', async (request, response) => {

    var limit = parseInt(request.query.limit, 10);
    filters = {}
    if (request.query.brand != undefined)
    {
        var brand = request.query.brand;
        filters["brand"] = brand;
    }
    if (request.query.price != undefined)
    {
        var price = parseInt(request.query.price, 10);
        filters["price"] = price;
    }
    
    var products = await db.findProducts(filters, parseInt(filters.size), limit, false);
    response.send({ "Product": products });
});

app.get('/products/:id', async (request, response) => {
    //await connection();
    const filters = request.query;
    const { limit, offset } = calculateLimitAndOffset(parseInt(filters.page), parseInt(filters.size));
    var products = await db.findProducts({ "_id": request.params.id}, offset, limit, false);
    //console.log(products.length)
    response.send({ "Product": products });
});

async function test() {
    //await connection();
    app.listen(PORT);
    //await request();
    //await db.close();
}

test();