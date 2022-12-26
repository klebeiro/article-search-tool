import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import ChainIcon from '@mui/icons-material/Link';
import "../../styles/articleComponent.css"

const Article = (props) => {
  const { author, title, url } = props;

  return (
    <div className="article">
      <h2>
        <BookIcon /> {title}
      </h2>
      <p>
        <PersonIcon /> {author}
      </p>
      <a href={url}>
        <ChainIcon /> {url}
      </a>
    </div>
  );
};

export default Article;