import { gql } from 'apollo-boost'

export default gql `query {
    options {
        id,
        name
    }
}`;
