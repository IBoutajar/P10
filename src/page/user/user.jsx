import "../user/user.scss";
import { useState } from "react";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import Account from "../../component/account/account";
import EditName from "../../component/editName/editName";
import UserName from "../../component/userName/userName";


const User = ({accountData}) => {

      // Utilisation de useState pour contrôler si l'utilisateur est en mode édition du nom.
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditClick = () => {
        // Inverse l'état de isEditing
        setIsEditing(!isEditing); 
    }



    return (
        <div className="userWrapper">
            <Header />

            <div className="userContent">
                {/* Condition pour afficher EditName si en mode édition, sinon affiche UserName */}
                {isEditing ? <EditName onCancel={toggleEditClick} /> : <UserName onEditClick={toggleEditClick} />}
                <Account accountData={accountData} />
            </div>

            <Footer />
        </div>
    )
}

export default User