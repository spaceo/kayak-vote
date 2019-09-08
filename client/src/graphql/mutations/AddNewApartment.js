import { gql } from 'graphql-tag';

export default gql`mutation AddApartment(
    $handle: String!
) {
    createApartment(
        data: {
            hande: $handle
        }
    ) {
        id
    }
}`;