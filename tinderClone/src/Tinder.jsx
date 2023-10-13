import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Card from './Card';
import './App.css';

const supabaseUrl = 'https://mavnvirtkvhbnvtmiddk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hdm52aXJ0a3ZoYm52dG1pZGRrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzUwMDYyOSwiZXhwIjoyMDA5MDc2NjI5fQ.cWFtEEnx4NWVVH3gmSDbHZ4hgi5ZJ4mZmKQkChz-e9o';

const supabase = createClient(supabaseUrl, supabaseKey);

const Tinder = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsersAndImages = async () => {
      try {
        const { data: users, error: userError } = await supabase.from('users').select('*');
        if (userError) {
          throw new Error('Error fetching users');
        }

        const cardJSXArray = [];

        for (const userData of users) {
          const { data: image, error: imageError } = await supabase
            .storage
            .from('image')
            .getPublicUrl(userData.image);

          if (imageError) {
            throw new Error('Error fetching image');
          }

          const cardJSX = (
            <Card key={userData.id} user={userData}>
              <div className="tinderCardImg">
                <img src={image} alt={`Image of ${userData.name}`} />
              </div>
            </Card>
          );

          cardJSXArray.push(cardJSX);
        }

        setCards(cardJSXArray);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching and rendering users:', error);
        setLoading(false);
      }
    };

    fetchUsersAndImages();
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="tinder">
          <div className="tinderCards">{cards}</div>
        </div>
      )}
    </div>
  );
};

export default Tinder;
