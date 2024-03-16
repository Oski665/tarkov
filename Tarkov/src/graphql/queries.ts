import {gql} from '@apollo/client';

export const GET_ITEMS_QUERY = gql`
  query GetItem {
    items {
      id
      shortName
      iconLink
      ergonomicsModifier
    }
  }
`;

export const GET_GUNS_QUERY = gql`
  query GetItems {
    items(type: gun) {
      id
      name
      iconLink
    }
  }
`;
