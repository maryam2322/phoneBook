import {useState} from 'react'
import './App.css';
import {Table} from './Components/Table/Table';
import Header from './Components/Header/Header';
import ShowForm from "./Components/ShowForm/ShowForm";

const usersList = [
    {id: 1, firstName: 'Taha', lastName: 'Hoseini', email: 'tara@gamil.com', phone: '+989101234567'},
    {id: 2, firstName: 'Maryam', lastName: 'Akbari', email: 'maryam@yahoo.com', phone: '+98220123455'},
    {id: 3, firstName: 'Ali', lastName: 'Ghasemi', email: 'ali@gamil.com', phone: '+989121234567'},
    {id: 4, firstName: 'Sara', lastName: 'Rezaei', email: 'Maede@gmail.com', phone: '+9113214579'},
]

function App() {
    const [users, setUsers] = useState(usersList)
    const [user, setUser] = useState({firstName: '', lastName: '', email: '', phone: ''})
    const [filter, setFilter] = useState('')

    return (
        <div className={'phonebook'}>
            <Header filter={filter} setFilter={setFilter}/>
            <Table user={user} setUser={setUser} setUsers={setUsers} users={users} filter={filter} setFilter={setFilter}/>
            <ShowForm user={user} setUser={setUser} setUsers={setUsers} users={users}/>
        </div>
    );
}

export default App;