import { gql } from "../__generated__/gql";
export const SIGN_IN = gql(`
    mutation signIn(
      $password: String!
      $email: String!
      ){
        signIn(email:$email,password:$password) {
        token
      }
    }
  `);

export const SIGN_UP = gql(`
    mutation signup($data: UserCreateInput!) {
      signup(data: $data) {
        token
      }
    }
  `);
