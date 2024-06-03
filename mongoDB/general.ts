const LOCAL_URL_MONGO_DB = `mongodb://127.0.0.1:27017/helpFront`
const LOCAL_NAME_DB = 'cyberlandia'

const REMOTE_URL_MONGO_DB = `mongodb://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBHOST}/${process.env.DBNAME}?replicaSet=MongoReplica`

let myMongoClient: any = null
let activeConnects = 0

type COLLECTIONS = 'users'
