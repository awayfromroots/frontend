import Layout from "../components/Layout";
import {
  getFeaturedPosts,
  getPopularPosts,
  getRecentPosts,
} from "../actions/post";
import FeaturedPosts from "../components/FeaturedPosts";
import RecentPosts from "../components/RecentPosts";
import PopularPosts from "../components/PopularPosts";

const Index = ({ featuredPosts, recentPosts, popularPosts }) => {
  return (
    <Layout>
      <FeaturedPosts posts={featuredPosts} />
      <RecentPosts posts={recentPosts} />
      <PopularPosts posts={popularPosts} />
    </Layout>
  );
};

Index.getInitialProps = async () => {
  try {
    const [featuredPosts, recentPosts, popularPosts] = await Promise.all([
      getFeaturedPosts(),
      getRecentPosts(),
      getPopularPosts(),
    ]);
    return { featuredPosts, recentPosts, popularPosts };
  } catch (e) {
    console.error(e);
  }
};

export default Index;
