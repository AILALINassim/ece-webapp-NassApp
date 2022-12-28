import { supabase } from '../../../api/supabase'


export default async function handler(req, res) {

  let statusCode = 200;
  let responseMessage = "Tous les likes ont été récupérés !";
  let responseBody = null;

  const { data, error } = await supabase
    .from('likes')
    .select(`*`)
    .eq('post_id', req.body.post_id,'profile_id', req.body.user_id)

  if (data.length > 0) {
    await supabase
      .from('likes')
      .delete(`*`)
      .eq('post_id', req.body.post_id,'profile_id', req.body.user_id)
  } else {
    const { error } = await supabase
      .from('likes')
      .insert(
        {
          profile_id: req.body.user_id,
          post_id: req.body.post_id,
        }
      )
      statusCode = 500;
      responseBody = [];
      responseMessage = error;
  }
  res.status(statusCode).json({ responseBody, responseMessage });


}