import { supabase } from '../../api/supabase'
export default async function handler(req, res) {

    let statusCode = 200;
    let responseMessage = "Le commentaire a été créé !";
    let responseBody = null;

    
    const { data, error } = await supabase
        .from('comments')
        .insert({
            message: req.body.message,
            profile_id : req.body.user_id,
            post_id: Number(req.body.post_id),

        })
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