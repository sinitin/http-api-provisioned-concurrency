const someModule = require('./someModule')

exports.provisioned = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(event),
    headers: {}
  }
}