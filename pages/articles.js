function Articles(){
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
    return(
        <div>
            <h1>Articles Page</h1>
            <div>
                {articles.map((article,index)=>{ 
                    return(
                    <ul>
                        <li>Name : {article.name}</li>
                        <li>Subject : {article.subject}</li>
                        <li>Name : {article.date}</li>
                    </ul>
                )})}
            </div>
        </div>
        

    ) 
}
export default Articles