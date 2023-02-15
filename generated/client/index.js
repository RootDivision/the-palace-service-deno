
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/data-proxy')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.10.1
 * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
 */
Prisma.prismaVersion = {
  client: "4.10.1",
  engine: "aead147aa326ccb985dcfed5b065b4fdabd44b19"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "generated/client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ReleaseScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  Release: 'Release'
});

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/vuong/Dev/the-palace/the-palace-service-deno/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.10.1",
  "engineVersion": "aead147aa326ccb985dcfed5b065b4fdabd44b19",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgID0gIm1vbmdvZGIiCiAgdXJsICAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX1VSTCIpCn0KCm1vZGVsIFJlbGVhc2UgewogIGlkIEludCBAaWQgQG1hcCgiX2lkIikKfQo='
config.inlineSchemaHash = '3237226a0a20b1620a986460397c3f6ef9006e929ee76ffbab82ddf3cdcb0a5a'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}


const { warnEnvConflicts } = require('./runtime/data-proxy')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

