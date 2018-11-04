import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      email
      name
      permissions
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
        }
      }
    }
  }
`;

const User = props => {
  return (
    <Query query={CURRENT_USER_QUERY} {...props}>
      {payload => props.children(payload)}
    </Query>
  );
};

export default User;
export { CURRENT_USER_QUERY };
