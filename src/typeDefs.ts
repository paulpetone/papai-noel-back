
import { gql } from "apollo-server";

const typeDefs = gql`
    type GetResult {
        message: String
        shouldReceivePresent: Boolean
    }
    type Query {
        getResult(cep: String!): GetResult
    }
`;

export default typeDefs