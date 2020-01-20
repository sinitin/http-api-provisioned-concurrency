const someModule = require('./someModule')

exports.ondemand = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(event),
    headers: {}
  }
}