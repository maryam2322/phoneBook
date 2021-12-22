import {useState} from 'react'
import './App.css';
import {Table} from './Components/Table/Table';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header'

const usersList = [
    {id: 1, firstName: 'Taha', lastName: 'Ghasemi', email: 'tara@gamil.com', phone: '+989101234567'},
    {id: 2, firstName: 'Maryam', lastName: 'Ghasemi', email: 'maryam@yahoo.com', phone: '+98220123455'},
    {id: 3, firstName: 'Ali', lastName: 'Ghasemi', email: 'ali@gamil.com', phone: '+989121234567'},
    {id: 4, firstName: 'Sara', lastName: 'Ghasemi', email: 'Maede@gmail.com', phone: '+9113214579'},
]

function App() {
    const [showForm, setShowForm] = useState(false)
    const [users, setUsers] = useState(usersList)
    const [user, setUser] = useState({firstName: '', lastName: '', email: '', phone: ''})
    let formInput
    if (showForm) {
        formInput =
            <div className={'addForm'} onClick={() => setShowForm(false)}>
                <Form user={user} setUser={setUser} setUsers={setUsers} users={users}/>

            </div>
    }
    return (
        <div className={'phonebook'}>
            <Header/>
            <Table user={user} setUser={setUser} setUsers={setUsers} users={users} />

            {/*add button*/}
            <div className={'add'}>
                <img onClick={() => setShowForm(!showForm)} className={'add__img'}
                     src="https://img.icons8.com/fluency/70/000000/add-phone.png"/>
            </div>

            {formInput}
        </div>
    );
}

export default App;