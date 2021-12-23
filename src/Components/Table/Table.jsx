import {useState} from "react";
import './Table.style.css'
import Button from '../Button/Button'
import Form from "../Form/Form";


export const Table = ({users, setUsers, user, setUser, filter, setFilter}) => {
    const [showEditForm, setShowEditForm] = useState(false)

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }
    let formEdit
    if (showEditForm) {
        formEdit =
            <div className={'addForm'}>
                <Form user={user} setUser={setUser} setUsers={setUsers} users={users}/>
            </div>
    }
    return (
        <div className={'body'}>

            <img src="https://img.icons8.com/plasticine/60/000000/address-book--v1.png"/>

            <table className={'table'}>
                <tbody>

                {users.filter(item => item.firstName.toLowerCase().includes(filter.toLowerCase()) || item.lastName.toLowerCase().includes(filter.toLowerCase()) || item.email.toLowerCase().includes(filter.toLowerCase()) || item.phone.toLowerCase().includes(filter.toLowerCase())).length === 0 ?
                    <h1>There is no <strong className={'failContact'}>CONTACT</strong> in list :|</h1> :
                    users.filter(item => item.firstName.toLowerCase().includes(filter.toLowerCase()) || item.lastName.toLowerCase().includes(filter.toLowerCase()) || item.email.toLowerCase().includes(filter.toLowerCase()) || item.phone.toLowerCase().includes(filter.toLowerCase()))
                        .map(item => (
                            <tr key={item.id} className={'row'}>
                                <div className={'contact'}>
                                    <img className={'contact__img'}
                                         src={'https://joeschmoe.io/api/v1/' + item.firstName}
                                         alt="avatar"/>
                                    <div className={'details'}>
                                        <h3 className={'contact__name'}>{item.firstName} {item.lastName}</h3>
                                        <h5>{item.email}</h5>
                                        <h6>{item.phone}</h6>
                                    </div>
                                </div>
                                <div>
                                    <Button onClick={() => {
                                        setUser(item)
                                        setShowEditForm(!showEditForm)
                                    }}>
                                        <img
                                            src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/25/000000/external-edit-miscellaneous-kiranshastry-lineal-color-kiranshastry.png"/>
                                    </Button>
                                    <Button onClick={() => handleDelete(item.id)}>
                                        <img
                                            src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/25/000000/external-delete-miscellaneous-kiranshastry-lineal-color-kiranshastry.png"/>
                                    </Button>
                                </div>
                            </tr>
                        ))}

                </tbody>
            </table>
            {formEdit}
        </div>
    )
}