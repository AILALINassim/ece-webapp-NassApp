import { useRouter } from 'next/router'

const Article = () => {
    let articles = [
        {
            id : 0,
            name : "Ukraine - The New York Times",
            subject : "Iran Sends Drone Trainers to Crimea to Aid Russian Military",
            date : "Oct. 18, 2022" 
        },
        {
            id : 1,
            name : "Pentest Magazine",
            subject : "PowerShell for Pentesters",
            date : "Oct. 07, 2022" 
        },
        {
            id : 2,
            name : "UPA Pink October",
            subject : "Pink October 2022 Donation",
            date : "Sept. 29, 2022" 
        }
    ]

  const router = useRouter()
  const { articleId } = router.query

  const article = articles.find((article)=> article.id == articleId)

  return (
    <div>
        {article != null ? (
            <>
             <h1>{article.name}</h1>
             <p>{article.subject}</p>
             <p>{article.date}</p>
            </>
        ) : <p>NO ARTICLE FOUND WITH ID {articleId}</p> }
       
    </div>
  )
}

export default Article