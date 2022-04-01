const { MongoClient } = require('mongodb');
const MONGODB_URI = 'mongodb+srv://ArthurBertrand:azertyuiop&@clusterclearfashion.fjntu.mongodb.net/Database?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'Database';

let db;
let client;

/**
 * Connection to the database 
 * @param {*} MONGODB_URI
 * @param {*} MONGODB_DB_NAME
 */

const connect = async (uri = MONGODB_URI, name = MONGODB_DB_NAME) => {
    console.log(" Connection to cluster : ClusterClearFashion");
    try {
        client = await MongoClient.connect(MONGODB_URI, { 'useNewUrlParser': true });
        console.log("🥇 Connection successful ! ");
        db = client.db(MONGODB_DB_NAME);
    }
    catch (error) {
        console.log('error : ', error);
    }
}
module.exports.connect = connect;

/**
* Insert list of products
* @param  {Array}  products
* @return {Object}
*/

module.exports.insert = async products => {
    try {
        const db = await getDB();
        const collection = db.collection(MONGODB_COLLECTION);
        const result = await collection.insertMany(products, { 'ordered': false });

        return result;
    } catch (error) {
        console.error('🚨 collection.insertMany...', error);
        fs.writeFileSync('products.json', JSON.stringify(products));
        return {
            'insertedCount': error.result.nInserted
        };
    }
};

// Functions area :


/**
 * Method to find a product 
 * @param {query that will be use to search product} query 
 * @param {if we want to print the results or not} printResults 
 * @returns 
 */

module.exports.findProducts = async (query, offset = 0, limit = 0, printResults = false) => {
    var result = await db.collection("products").find(query).skip(offset).limit(limit).toArray()
    if (printResults) {
        console.log(' Find:', query);
        console.log(` ${result.length} documents found:`);
        await result.forEach(doc => console.log(doc));
    }
    return result;
}

/**
 * Find all the products for a given brand :
 * @param {name of the searched brand} brand 
 */

async function productsByBrand(brand){
     const collection = db.collection('products');
     const products_filtered = await collection.find({'brand' : `${brand}`}).toArray();
     console.log(products_filtered);
}

/**
 * Find all the products which cost is lower than a given price 
 * @param {price limit} price 
 */

async function productsLessThan(price){
     const collection = db.collection('products');
     const products_filtered = await collection.find({'price' : {'$lte' : parseInt(price,10)}}).toArray();
     console.log("Filtered applied");
     console.log(products_filtered);
}

// Method which returns all the products sorted by price

async function productsSortedByPrice() {
    const collection = db.collection('products')
    const products = await collection.find().sort({ 'price': 1 }).toArray();
    console.log('Products sorted');
    console.log(products);
}

// Function to close the connection to our database :

const close = async () => {
    await client.close();
    console.log(" 👎 Connection closed");
}
module.exports.close = close;

/**
* Find products based on query
* @param  {Array}  query
* @return {Array}
*/

module.exports.find = async query => {
    try {
        const db = await getDB();
        const collection = db.collection(MONGODB_COLLECTION);
        const result = await collection.find(query).toArray();

         return result;
    } catch (error) {
        console.error('🚨 collection.find...', error);
        return null;
    }
    };

    /**
     * Close the connection
     */
    /*module.exports.close = async () => {
        try {
            await client.close();
        } catch (error) {
            console.error('🚨 MongoClient.close...', error);
        }
    };*/


async function test()
{
    await connect();
    //await close();
}

test();