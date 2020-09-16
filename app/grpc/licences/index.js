const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const licenses = require('../../domain/licence')

const packageDefinition = protoLoader.loadSync(
  licenses.PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  })

const licence_proto = grpc.loadPackageDefinition(packageDefinition).licence

module.exports = { service: licence_proto.Licence.service, options: licenses }