import React from 'react';
import './tinder.css';
import heartBtn from './assets/heart.svg';
import xBtn from './assets/x.svg'

const Card = ({ user }) => {

  return (
    <div className="tinderCard" key={user.id}>
      <div className="tinderCardImg">
      <img src={user.image.publicUrl} />
      </div>
      <div className="userInfo">
        <h3>
          {user.name} {user.age}
        </h3>
      </div>
        <div className="subIcon">
            <button className="nope"><img src={xBtn} alt="" /></button>
            <button className="love"><img src={heartBtn} alt="" /></button>
        </div>
    </div>
  );
};

export default Card;
