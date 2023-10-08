import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://mavnvirtkvhbnvtmiddk.supabase.co';
const secretKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hdm52aXJ0a3ZoYm52dG1pZGRrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzUwMDYyOSwiZXhwIjoyMDA5MDc2NjI5fQ.cWFtEEnx4NWVVH3gmSDbHZ4hgi5ZJ4mZmKQkChz-e9o';

const supabase = createClient(supabaseUrl, secretKey);


    const response = await fetch(`${supabaseUrl}/rest/v1/users`, {
        headers: {
            'Content-Type': 'application/json',
            'apikey': secretKey,
            'Authorization': `Bearer ${secretKey}`
        }
    })
    for (const responseData of response) {
             await supabase
            .storage
            .from('image')
            .getPublicUrl(responseData.image);

               
    }
export default supabase;
