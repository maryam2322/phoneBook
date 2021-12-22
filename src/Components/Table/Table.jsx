import './Table.style.css'
import Button from '../Button/Button'

export const Table = ({users, setUsers, setUser}) => {
    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }
    return (
        <div className={'body'}>
            <img src="https://img.icons8.com/plasticine/60/000000/address-book--v1.png"/>
            <table className={'table'}>
                <tbody>
                {users.map(item => (
                    <tr key={item.id} className={'row'}>
                        <div className={'contact'}>
                            <img className={'contact__img'} src={'https://joeschmoe.io/api/v1/' + item.firstName}
                                 alt=""/>
                            <h3 className={'contact__name'}>{item.firstName} {item.lastName}</h3>
                            <h6>{item.phone}</h6>
                        </div>
                        <div>
                            <Button onClick={() => {
                                setUser(item)
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

            <div className={'add'}>
                <img className={'add__img'} src="https://img.icons8.com/fluency/70/000000/add-phone.png"/>
            </div>

        </div>

    )
}