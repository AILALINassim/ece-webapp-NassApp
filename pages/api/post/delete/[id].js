import { supabase } from '../../../api/supabase'

export default async function handler(req, res) {


  let statusCode = 200;
  let responseMessage = "Le post a été surprimé !";
  let responseBody = null;

  const { data, error } = await supabase
    .from('posts')
    .select(`*`)
    .eq('id', req.query.id)

  if (error) {
    console.log("Err 1 ",error);
    statusCode = 500;
    responseBody = [];
    responseMessage = error;
  } else {

    if (data[0].imageurl !== null) {
      const filename = data[0].imageurl.split("/images/")[1];
      fs.unlinkSync(`images/${filename}`);
    }
    
    const { errorDelete } = await supabase
      .from('posts')
      .delete()
      .eq('id', req.query.id)

    if (errorDelete) {
      console.log("Err 1 ",errorDelete);
      statusCode = 500;
      responseBody = [];
      responseMessage = errorDelete;
    }else{
      console.log("deleted");
    }
    
  }

  res.status(statusCode).json({ responseBody, responseMessage });

}