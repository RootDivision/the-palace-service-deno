const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
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
} from '.././runtime/edge-esm.js'

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


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ReleaseScalarFieldEnum = makeEnum({
  id: 'id',
  instance_id: 'instance_id'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  Release: 'Release'
});

const compressedDMMF = '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='
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

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibW9uZ29kYiIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgUmVsZWFzZSB7CiAgaWQgICAgICAgICAgSW50IEBpZCBAbWFwKCJfaWQiKQogIGluc3RhbmNlX2lkIEludAp9Cg=='
config.inlineSchemaHash = '81774e12f7630ba2382008938dd440c9c2ad422b75f2f1829ecf376a475a16d4'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }

