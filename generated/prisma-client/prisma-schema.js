module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateApartment {
  count: Int!
}

type AggregateInquiry {
  count: Int!
}

type AggregateOption {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type AggregateVotingPage {
  count: Int!
}

type Apartment {
  id: ID!
  handle: String!
}

type ApartmentConnection {
  pageInfo: PageInfo!
  edges: [ApartmentEdge]!
  aggregate: AggregateApartment!
}

input ApartmentCreateInput {
  id: ID
  handle: String!
}

input ApartmentCreateOneInput {
  create: ApartmentCreateInput
  connect: ApartmentWhereUniqueInput
}

type ApartmentEdge {
  node: Apartment!
  cursor: String!
}

enum ApartmentOrderByInput {
  id_ASC
  id_DESC
  handle_ASC
  handle_DESC
}

type ApartmentPreviousValues {
  id: ID!
  handle: String!
}

type ApartmentSubscriptionPayload {
  mutation: MutationType!
  node: Apartment
  updatedFields: [String!]
  previousValues: ApartmentPreviousValues
}

input ApartmentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ApartmentWhereInput
  AND: [ApartmentSubscriptionWhereInput!]
  OR: [ApartmentSubscriptionWhereInput!]
  NOT: [ApartmentSubscriptionWhereInput!]
}

input ApartmentUpdateDataInput {
  handle: String
}

input ApartmentUpdateInput {
  handle: String
}

input ApartmentUpdateManyMutationInput {
  handle: String
}

input ApartmentUpdateOneRequiredInput {
  create: ApartmentCreateInput
  update: ApartmentUpdateDataInput
  upsert: ApartmentUpsertNestedInput
  connect: ApartmentWhereUniqueInput
}

input ApartmentUpsertNestedInput {
  update: ApartmentUpdateDataInput!
  create: ApartmentCreateInput!
}

input ApartmentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  handle: String
  handle_not: String
  handle_in: [String!]
  handle_not_in: [String!]
  handle_lt: String
  handle_lte: String
  handle_gt: String
  handle_gte: String
  handle_contains: String
  handle_not_contains: String
  handle_starts_with: String
  handle_not_starts_with: String
  handle_ends_with: String
  handle_not_ends_with: String
  AND: [ApartmentWhereInput!]
  OR: [ApartmentWhereInput!]
  NOT: [ApartmentWhereInput!]
}

input ApartmentWhereUniqueInput {
  id: ID
  handle: String
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Inquiry {
  id: ID!
  createdAt: DateTime!
  apartment: Apartment!
  email: String!
}

type InquiryConnection {
  pageInfo: PageInfo!
  edges: [InquiryEdge]!
  aggregate: AggregateInquiry!
}

input InquiryCreateInput {
  id: ID
  apartment: ApartmentCreateOneInput!
  email: String!
}

type InquiryEdge {
  node: Inquiry!
  cursor: String!
}

enum InquiryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  email_ASC
  email_DESC
}

type InquiryPreviousValues {
  id: ID!
  createdAt: DateTime!
  email: String!
}

type InquirySubscriptionPayload {
  mutation: MutationType!
  node: Inquiry
  updatedFields: [String!]
  previousValues: InquiryPreviousValues
}

input InquirySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InquiryWhereInput
  AND: [InquirySubscriptionWhereInput!]
  OR: [InquirySubscriptionWhereInput!]
  NOT: [InquirySubscriptionWhereInput!]
}

input InquiryUpdateInput {
  apartment: ApartmentUpdateOneRequiredInput
  email: String
}

input InquiryUpdateManyMutationInput {
  email: String
}

input InquiryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  apartment: ApartmentWhereInput
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [InquiryWhereInput!]
  OR: [InquiryWhereInput!]
  NOT: [InquiryWhereInput!]
}

input InquiryWhereUniqueInput {
  id: ID
  email: String
}

scalar Long

type Mutation {
  createApartment(data: ApartmentCreateInput!): Apartment!
  updateApartment(data: ApartmentUpdateInput!, where: ApartmentWhereUniqueInput!): Apartment
  updateManyApartments(data: ApartmentUpdateManyMutationInput!, where: ApartmentWhereInput): BatchPayload!
  upsertApartment(where: ApartmentWhereUniqueInput!, create: ApartmentCreateInput!, update: ApartmentUpdateInput!): Apartment!
  deleteApartment(where: ApartmentWhereUniqueInput!): Apartment
  deleteManyApartments(where: ApartmentWhereInput): BatchPayload!
  createInquiry(data: InquiryCreateInput!): Inquiry!
  updateInquiry(data: InquiryUpdateInput!, where: InquiryWhereUniqueInput!): Inquiry
  updateManyInquiries(data: InquiryUpdateManyMutationInput!, where: InquiryWhereInput): BatchPayload!
  upsertInquiry(where: InquiryWhereUniqueInput!, create: InquiryCreateInput!, update: InquiryUpdateInput!): Inquiry!
  deleteInquiry(where: InquiryWhereUniqueInput!): Inquiry
  deleteManyInquiries(where: InquiryWhereInput): BatchPayload!
  createOption(data: OptionCreateInput!): Option!
  updateOption(data: OptionUpdateInput!, where: OptionWhereUniqueInput!): Option
  updateManyOptions(data: OptionUpdateManyMutationInput!, where: OptionWhereInput): BatchPayload!
  upsertOption(where: OptionWhereUniqueInput!, create: OptionCreateInput!, update: OptionUpdateInput!): Option!
  deleteOption(where: OptionWhereUniqueInput!): Option
  deleteManyOptions(where: OptionWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  updateManyVotes(data: VoteUpdateManyMutationInput!, where: VoteWhereInput): BatchPayload!
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
  createVotingPage(data: VotingPageCreateInput!): VotingPage!
  updateVotingPage(data: VotingPageUpdateInput!, where: VotingPageWhereUniqueInput!): VotingPage
  updateManyVotingPages(data: VotingPageUpdateManyMutationInput!, where: VotingPageWhereInput): BatchPayload!
  upsertVotingPage(where: VotingPageWhereUniqueInput!, create: VotingPageCreateInput!, update: VotingPageUpdateInput!): VotingPage!
  deleteVotingPage(where: VotingPageWhereUniqueInput!): VotingPage
  deleteManyVotingPages(where: VotingPageWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Option {
  id: ID!
  name: String!
  weight: Int!
}

type OptionConnection {
  pageInfo: PageInfo!
  edges: [OptionEdge]!
  aggregate: AggregateOption!
}

input OptionCreateInput {
  id: ID
  name: String!
  weight: Int!
}

input OptionCreateOneInput {
  create: OptionCreateInput
  connect: OptionWhereUniqueInput
}

type OptionEdge {
  node: Option!
  cursor: String!
}

enum OptionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  weight_ASC
  weight_DESC
}

type OptionPreviousValues {
  id: ID!
  name: String!
  weight: Int!
}

type OptionSubscriptionPayload {
  mutation: MutationType!
  node: Option
  updatedFields: [String!]
  previousValues: OptionPreviousValues
}

input OptionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OptionWhereInput
  AND: [OptionSubscriptionWhereInput!]
  OR: [OptionSubscriptionWhereInput!]
  NOT: [OptionSubscriptionWhereInput!]
}

input OptionUpdateDataInput {
  name: String
  weight: Int
}

input OptionUpdateInput {
  name: String
  weight: Int
}

input OptionUpdateManyMutationInput {
  name: String
  weight: Int
}

input OptionUpdateOneRequiredInput {
  create: OptionCreateInput
  update: OptionUpdateDataInput
  upsert: OptionUpsertNestedInput
  connect: OptionWhereUniqueInput
}

input OptionUpsertNestedInput {
  update: OptionUpdateDataInput!
  create: OptionCreateInput!
}

input OptionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  weight: Int
  weight_not: Int
  weight_in: [Int!]
  weight_not_in: [Int!]
  weight_lt: Int
  weight_lte: Int
  weight_gt: Int
  weight_gte: Int
  AND: [OptionWhereInput!]
  OR: [OptionWhereInput!]
  NOT: [OptionWhereInput!]
}

input OptionWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  apartment(where: ApartmentWhereUniqueInput!): Apartment
  apartments(where: ApartmentWhereInput, orderBy: ApartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Apartment]!
  apartmentsConnection(where: ApartmentWhereInput, orderBy: ApartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApartmentConnection!
  inquiry(where: InquiryWhereUniqueInput!): Inquiry
  inquiries(where: InquiryWhereInput, orderBy: InquiryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Inquiry]!
  inquiriesConnection(where: InquiryWhereInput, orderBy: InquiryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InquiryConnection!
  option(where: OptionWhereUniqueInput!): Option
  options(where: OptionWhereInput, orderBy: OptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Option]!
  optionsConnection(where: OptionWhereInput, orderBy: OptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OptionConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  votingPage(where: VotingPageWhereUniqueInput!): VotingPage
  votingPages(where: VotingPageWhereInput, orderBy: VotingPageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [VotingPage]!
  votingPagesConnection(where: VotingPageWhereInput, orderBy: VotingPageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VotingPageConnection!
  node(id: ID!): Node
}

type Subscription {
  apartment(where: ApartmentSubscriptionWhereInput): ApartmentSubscriptionPayload
  inquiry(where: InquirySubscriptionWhereInput): InquirySubscriptionPayload
  option(where: OptionSubscriptionWhereInput): OptionSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
  votingPage(where: VotingPageSubscriptionWhereInput): VotingPageSubscriptionPayload
}

type Vote {
  id: ID!
  createdAt: DateTime!
  apartment: String!
  choice: Option!
  remark: String
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  id: ID
  apartment: String!
  choice: OptionCreateOneInput!
  remark: String
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  apartment_ASC
  apartment_DESC
  remark_ASC
  remark_DESC
}

type VotePreviousValues {
  id: ID!
  createdAt: DateTime!
  apartment: String!
  remark: String
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  apartment: String
  choice: OptionUpdateOneRequiredInput
  remark: String
}

input VoteUpdateManyMutationInput {
  apartment: String
  remark: String
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  apartment: String
  apartment_not: String
  apartment_in: [String!]
  apartment_not_in: [String!]
  apartment_lt: String
  apartment_lte: String
  apartment_gt: String
  apartment_gte: String
  apartment_contains: String
  apartment_not_contains: String
  apartment_starts_with: String
  apartment_not_starts_with: String
  apartment_ends_with: String
  apartment_not_ends_with: String
  choice: OptionWhereInput
  remark: String
  remark_not: String
  remark_in: [String!]
  remark_not_in: [String!]
  remark_lt: String
  remark_lte: String
  remark_gt: String
  remark_gte: String
  remark_contains: String
  remark_not_contains: String
  remark_starts_with: String
  remark_not_starts_with: String
  remark_ends_with: String
  remark_not_ends_with: String
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
  apartment: String
}

type VotingPage {
  id: ID!
  title: String!
  body: String!
}

type VotingPageConnection {
  pageInfo: PageInfo!
  edges: [VotingPageEdge]!
  aggregate: AggregateVotingPage!
}

input VotingPageCreateInput {
  id: ID
  title: String!
  body: String!
}

type VotingPageEdge {
  node: VotingPage!
  cursor: String!
}

enum VotingPageOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  body_ASC
  body_DESC
}

type VotingPagePreviousValues {
  id: ID!
  title: String!
  body: String!
}

type VotingPageSubscriptionPayload {
  mutation: MutationType!
  node: VotingPage
  updatedFields: [String!]
  previousValues: VotingPagePreviousValues
}

input VotingPageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VotingPageWhereInput
  AND: [VotingPageSubscriptionWhereInput!]
  OR: [VotingPageSubscriptionWhereInput!]
  NOT: [VotingPageSubscriptionWhereInput!]
}

input VotingPageUpdateInput {
  title: String
  body: String
}

input VotingPageUpdateManyMutationInput {
  title: String
  body: String
}

input VotingPageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  AND: [VotingPageWhereInput!]
  OR: [VotingPageWhereInput!]
  NOT: [VotingPageWhereInput!]
}

input VotingPageWhereUniqueInput {
  id: ID
}
`
      }
    