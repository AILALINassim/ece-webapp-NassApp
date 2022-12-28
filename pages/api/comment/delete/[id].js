import { supabase } from '../../../api/supabase'


export default async function handler(req, res) {

  let statusCode = 200;
  let responseMessage = "Le commentaire a été surprimé !";
  let responseBody = null;
  
  const { data, error } = await supabase
      .from('comments')
      .delete()
      .eq('id', req.query.id)

  if (error) {
      statusCode = 500;
      responseMessage = error;
      responseBody = []
  } else {
      responseBody = data;
  }

  res.status(statusCode).json({ responseBody, responseMessage });


}