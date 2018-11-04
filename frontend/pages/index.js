import Link from 'next/link';
import Items from '../components/Items';

const Home = ({ query }) => {
  return (
    <div>
      <Items page={parseFloat(query.page) || 1} />
    </div>
  );
};

export default Home;