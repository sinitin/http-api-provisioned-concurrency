const someModule = require('./someModule')

exports.concurrency = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(event),
    headers: {}
  }
}