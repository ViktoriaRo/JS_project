import React from 'react'

const FeedbackContainer = ({feedback}) => {

  return (
    <div className="ninja-list">
      { 
        feedback.map(feed => {
          return feed.content !== '' ? (
            <div className="feed" key={feed.id}>
              <div  className="weather__key">{ feed.name } { feed.surname }</div>
              <div className="weather__value">{ feed.content }</div>
            </div>
          ) : (<div  className="weather__key"> nodfndun fkjh </div>)
        })
      }
    </div>
  );

}

export default FeedbackContainer