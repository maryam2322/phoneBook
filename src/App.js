import {useState} from 'react'
import './App.css';
import { Table } from './Components/Table/Table';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
const usersList = [
    { id: 1, firstName: 'Tara', lastName: 'Ghasemi', phone: 'developer' },
    { id: 2, firstName: 'Maryam', lastName: 'Ghasemi', phone: 'Designer' },
    { id: 3, firstName: 'Ali', lastName: 'Ghasemi', phone: 'programmer' },
    { id:4, firstName: 'Ali', lastName: 'Ghasemi', phone: 'programmer' },
]
function App() {
    const [users, setUsers] = useState(usersList)
    const [user, setUser] = useState({ firstName: '', lastName: '', phone: '' })
    return (
        <div>
            <Header/>
            <Table user={user} setUser={setUser} setUsers={setUsers} users={users}/>
            {/*<Form user={user} setUser={setUser} setUsers={setUsers} users={users}/>*/}
            <Footer/>
        </div>
    );
}

export default App;