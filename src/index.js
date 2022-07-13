import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const title = 'World’s Greatest Classics (Box Set of 4 Book)';
const author = 'Jane Austen F. Scott Fitzgerald, Oscar Wilde, Emily Brontë';
const img =
  'https://m.media-amazon.com/images/I/81j8i9slKIL._AC_UY327_FMwebp_QL65_.jpg';
function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="random title" number={22} />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="Book">
      <img src={img} alt="World's greatest Classics" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

// const Image = () => (
//   <img
//     src="https://m.media-amazon.com/images/I/81j8i9slKIL._AC_UY327_FMwebp_QL65_.jpg"
//     alt="World's greatest Classics"
//   />
// );

// const Title = () => <h1>World’s Greatest Classics (Box Set of 4 Books)</h1>;
// const Author = () => (
//   <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
//     Jane Austen F. Scott Fitzgerald, Oscar Wilde, Emily Brontë
//   </h4>
// );

ReactDOM.render(<BookList />, document.getElementById('root'));
// export default Greeting;
