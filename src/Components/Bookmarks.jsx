import React from 'react';
import './Modal.css';
import demoImg from '../assets/images/demo.jpg';
import './Bookmarks.css';
import noImg from '../assets/images/no-img.png';

const Bookmarks = ({
  show,
  bookmarks,
  onClose,
  onSelectArticle,
  onDeleteBookmarks,
}) => {
  if (!show) {
    return null;
  }
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <span className='close-button' onClick={onClose}>
          <i className='fa-solid fa-xmark'></i>
        </span>
        <h2 className='bookmarks-heading'>Bookmarked News</h2>
        <div className='bookmarks-list'>
          {bookmarks.map((article, index) => (
            <div
              className='bookmark-item'
              key={index}
              onClick={() => onSelectArticle(article)}
            >
              <img src={article.image || noImg} alt={article.title} />
              <h3>{article.title}</h3>
              <span
                className='delete-button'
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteBookmarks(article);
                }}
              >
                <i className='fa-regular fa-circle-xmark'></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
