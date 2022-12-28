import { supabase } from '../../api/supabase'

export default async function handler(req, res) {

  let statusCode = 200;
  let responseMessage = "Le post a été modifié !";
  let responseBody = null;
  let dataToUpdate = {};
  console.log("Req:", req.body);

  const { data, error } = await supabase
    .from('posts')
    .select(`*`)
    .eq('id', req.body.post_id)

  if (error) {
    statusCode = 500;
    responseBody = [];
    responseMessage = error;
  } else {

    if (req.file !== undefined) {

      if (data[0].imageurl !== null) {
        const filename = data[0].imageurl.split("/images/")[1];
        fs.unlinkSync(`images/${filename}`);
      }

      dataToUpdate = {
        imageUrl: `/images/posts/${req.file.filename}`,
        message: req.body.message
      }

    } else {
      dataToUpdate = {
        message: req.body.message
      }
    }

    // Update the post with the new image
    const { dataUpdate ,errorUpdate } = await supabase
      .from('posts')
      .update(dataToUpdate)
      .eq('id', req.body.post_id)

    if (errorUpdate) {
      statusCode = 500;
      responseBody = [];
      responseMessage = error;
    } else {
      responseBody = dataUpdate;
    }

  }

  res.status(statusCode).json({ responseBody, responseMessage });

}