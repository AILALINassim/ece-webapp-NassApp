function Contacts(){
    let contacts = {
            firstname : "NASSIM",
            lastname : "AILALI",
            email : "nasslamenace@gmail.com",
            phone : "0748956232",
        }
    

    console.log(contacts)
    return (
    <div>
        <h1>Contacts Page</h1>
        <div>
            <div>
                <ul>
                    <li>Firstname : {contacts.firstname}</li>
                    <li>Lastname : {contacts.lastname}</li>
                    <li>Email : {contacts.email}</li>
                    <li>Phone : {contacts.phone}</li>
                </ul>
            </div>
        </div>
    </div>
    )
}
export default Contacts