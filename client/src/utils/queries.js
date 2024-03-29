import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query User($username: String!) {
  user(username: $username) {
    username
    favorites {
      name
    }
  }
}`;