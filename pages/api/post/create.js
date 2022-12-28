import { supabase } from '../../api/supabase'

export default async function handler(req, res) {

  console.log(req.body);

  let statusCode = 200;
  let responseMessage = "Le post a été créé !";
  let responseBody = null;
  let dataToInsert = {};
  if (req.file !== undefined) {
    dataToInsert = {
      message: req.body.message,
      imageUrl: `/images/posts/${req.file.filename}`,
      profile_id: req.body.user_id,
    };
    

  } else {
    dataToInsert = {
      message: req.body.message,
      profile_id : req.body.user_id,
    };
  }

  const { data, error } = await supabase
      .from('posts')
      .insert(dataToInsert)
      .eq('profile_id', req.body.user_id)

  if (error) {
    statusCode = 500;
    responseMessage = error;
    responseBody = []
  } else {
    responseBody = data;
  }

  res.status(statusCode).json({ responseBody, responseMessage });

}