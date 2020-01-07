import Layout from '../components/Layout'
import Link from 'next/link';

const Index = () => (
  <div>
    <Layout>
      <p>Hello there</p>
      <Link href="/first-post">
        <a>First Post</a>
    </Link>
    </Layout>
  </div>
);

export default Index;