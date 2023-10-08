import { useState, useEffect } from 'react';
import supabase from './supabase'; // Import the Supabase client
import Card from './Card'; // Import Card component
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';



const Tinder = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data: users, error } = await supabase.from('users').select('*');
        if (error) {
          throw new Error('Error fetching users');
        }

        const shuffledResponse = shuffleArray(users);

        const cardsJSX = shuffledResponse.map((user) => (
          <Card key={user.id} user={user} />
        ));

        setCards(cardsJSX);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching and rendering posts:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide><div className="app">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="tinder">
          <div className="tinderCards">{cards}</div>
        </div>
      )}
    </div></SwiperSlide>
    
  </Swiper>
    
  );
};

export default Tinder;
