import Link from "next/link";
import moment from "moment";

const FeaturedPosts = ({ posts }) => {
  return (
    <section>
      <h1>Featured Posts</h1>
      {posts.map((post) => (
        <div>
          <Link href={`/article/${post.slug}`}>
            <a>
              <h2>{post.article.title}</h2>
            </a>
          </Link>
          <p>{post.article.excerpt}</p>
          <p>
            by {post.firstName} {post.lastName} | Published{" "}
            {moment(post.publishedAt).fromNow()}
          </p>
        </div>
      ))}
    </section>
  );
};
export default FeaturedPosts;
