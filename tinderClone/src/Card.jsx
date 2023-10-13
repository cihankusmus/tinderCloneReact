import React from 'react';
import './tinder.css';
import heartBtn from '../public/heart.svg';
import xBtn from '../public/x.svg'
import './Tinder';
import renderPosts from './supaImg.js'

const Card = ({ user }) => {

  return (
    <div className="tinderCard" key={user.id}>
      <div className="tinderCardImg">
      <img src={renderPosts} />
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