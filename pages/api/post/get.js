import { supabase } from '../../api/supabase'

export default async function handler(req, res) {

  let statusCode = 200;
  let responseMessage = "Tous les posts ont été récupérés !";
  let responseBody = null;

  const { data, error } = await supabase
    .from('posts')
    .select(`*,
    likes (
     *,
     profiles (
       *
   )
    ),
    comments (
        *,
        profiles (
          *
      )
    ),
    profiles (
        *
    )`
    )

  if (error) {
    statusCode = 500;
    responseMessage = "Error while fetching api."
    responseBody = error;
  }
  if (data) {
    responseBody = data;
  }

  res.status(statusCode).json({ responseBody, responseMessage });

}