"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Inquiry",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  },
  {
    name: "Apartment",
    embedded: false
  },
  {
    name: "Option",
    embedded: false
  },
  {
    name: "VotingPage",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
