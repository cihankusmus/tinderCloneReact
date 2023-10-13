import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://mavnvirtkvhbnvtmiddk.supabase.co';
const secretKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hdm52aXJ0a3ZoYm52dG1pZGRrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzUwMDYyOSwiZXhwIjoyMDA5MDc2NjI5fQ.cWFtEEnx4NWVVH3gmSDbHZ4hgi5ZJ4mZmKQkChz-e9o';

const supabase = createClient(supabaseUrl, secretKey);

const renderPosts = async () => {
    const response = await fetch(`${supabaseUrl}/rest/v1/users`, {
        headers: {
            'Content-Type': 'application/json',
            'apikey': secretKey,
            'Authorization': `Bearer ${secretKey}`
        }
    }).then(x => x.json());
    

    for (const responseData of response) {
        const image = await supabase
            .storage
            .from('image')
            .getPublicUrl(responseData.image);

            const card = document.createElement('div');
            card.classList.add('tinderCard');
            card.innerHTML = `
                
                <div class="tinderCardImg">
                    <img src="${image.data.publicUrl}" alt="${responseData.name}">
                </div>
                <div class="userInfo">
                    <h3>${responseData.name} ${responseData.age}</h3>
                </div>
                <div class="subIcon">
                    <button class="nope"><img src="assets/img/x.svg" class="xBtn"></button>
                    <button class="love"><img src="assets/img/heart.svg"></button>
                </div>
                
            `;
        
         
        
        }
    }

export default renderPosts();
