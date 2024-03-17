function PostCard({ content }) {
  return (
    <>
      {content.map((item) => (
        <div className="post__card" key={item.id}>
          <h2 className="post__title">{item.title}</h2>
          <p className="post__body">{item.body}</p>
        </div>
      ))}
    </>
  );
}
export default PostCard;
