const MongoClient = require('mongodb').MongoClient;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const db = process.env.DB;
const env = process.env.NODE_ENV;
const displayCount = parseInt(process.env.DISPLAY_COUNT);

const uri = `mongodb+srv://${username}:${password}@${db}/test?retryWrites=true&w=majority`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const getCollection = async () => {
    const client = new MongoClient(uri, options);
    const connect = await client.connect();
    const db = connect.db(env === 'production' ? 'news' : 'news_dev');
    const collection = db.collection('newsListings');
    return {
        client,
        collection,
    };
};

const getFromDB = async amount => {
    const { client, collection } = await getCollection();
    //get latest records
    const found = await collection.find().limit(amount).sort({ $natural: -1 }).toArray();
    client.close();
    return found || [];
};

const getResultsForPage = async index => {
    const { client, collection } = await getCollection();
    const skip = displayCount * (index - 1);
    //write a query to retrieve the correct results from collection
    const query = collection.find().sort({ $natural: -1 });
    const count = await query.count();
    const found = await query.skip(skip).limit(displayCount).toArray();
    client.close();
    return {
        results: found || [],
        count,
    };
};

const getResultsForPlayer = async ({ player, team, position, pageNum }) => {
    const { client, collection } = await getCollection();
    const skip = displayCount * (pageNum - 1);
    //write a query to retrieve the correct results from collection
    const query = collection
        .find({
            player,
            team,
            position,
        })
        .sort({ $natural: -1 });
    const count = await query.count();
    const found = await query.skip(skip).limit(displayCount).toArray();
    client.close();
    return {
        results: found || [],
        count,
    };
};

const getResultsForTeam = async ({ team, pageNum }) => {
    const { client, collection } = await getCollection();
    const skip = displayCount * (pageNum - 1);
    //write a query to retrieve the correct results from collection
    const query = collection.find({ team }).sort({ $natural: -1 });
    const count = await query.count();
    const found = await query.skip(skip).limit(displayCount).toArray();
    client.close();
    return {
        results: found || [],
        count,
    };
};

const getCollectionCount = async () => {
    const { client, collection } = await getCollection();
    const collectionCount = await collection.countDocuments();
    client.close();
    return collectionCount;
};

const insertDB = async array => {
    const { client, collection } = await getCollection();
    const insert =
        array.length > 1
            ? await collection.insertMany(array)
            : await collection.insertOne(...array);
    client.close();
    //return last records first
    return insert.ops.reverse() || [];
};

module.exports = {
    getFromDB,
    insertDB,
    getResultsForPage,
    getResultsForPlayer,
    getResultsForTeam,
    getCollectionCount,
};
