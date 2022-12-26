
import { useContext } from 'react'
import {supabase} from '../api/supabase'


export default async function handler(req, res) {
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

    if(error){
        console.log(error);
    }
    if(data){
        console.log(data);
    }

    res
        .status(200)
        .json({ data, message: "Tous les posts ont été récupérés !" });

}