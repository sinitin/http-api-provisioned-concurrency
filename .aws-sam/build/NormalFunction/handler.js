const someModule = require('./someModule')

exports.normal = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(event),
    headers: {}
  }
}