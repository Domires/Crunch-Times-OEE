const { connect } = require('mongoose')

module.exports = async function initializeMongoDBconnection() {
    try {
        await connect('mongodb+srv://domires:@oee.2u3rli6.mongodb.net/retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, dbName: "colecao", })
    } catch (err) {
        console.log('error when starting connection', err)
    }
}