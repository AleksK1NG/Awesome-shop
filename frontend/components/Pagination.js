import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import Head from 'next/head';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';
import PaginationStyles from './styles/PaginationStyles';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = ({ page }) => {
  return (
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading ...</p>;
        if (error) return <DisplayError error={error} />;
        const count = data.itemsConnection.aggregate.count;
        const pages = Math.ceil(count / perPage);
        return (
          <PaginationStyles>
            <Head>
              <title>
                Sick Fits ! Page {page} of {pages}
              </title>
            </Head>
            <Link
              prefetch
              href={{
                pathname: '/items',
                query: { page: page - 1 }
              }}
            >
              <a className="prev" aria-disabled={page <= 1}>
                ← Prev
              </a>
            </Link>
            <p>
              Page {page} of {pages} !
            </p>
            <p>{count} Items Total</p>
            <Link
              prefetch
              href={{
                pathname: '/items',
                query: { page: page + 1 }
              }}
            >
              <a className="next" aria-disabled={page >= pages}>
                Next →
              </a>
            </Link>
          </PaginationStyles>
        );
      }}
    </Query>
  );
};

export default Pagination;
