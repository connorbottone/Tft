import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FAV = gql`
mutation AddFavorite($username: String!, $name: String!) {
  addFavorite(username: $username, name: $name) {
    favorites {
      name
    }
  }
}`;

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
    }
  }
}`;