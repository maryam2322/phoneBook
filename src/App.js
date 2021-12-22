import {useState} from 'react'
import './App.css';
import {Table} from './Components/Table/Table';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

const usersList = [
    {id: 1, firstName: 'Taha', lastName: 'Ghasemi', email: 'tara@gamil.com', phone: '+989101234567'},
    {id: 2, firstName: 'Maryam', lastName: 'Ghasemi', email: 'maryam@yahoo.com', phone: '+98220123455'},
    {id: 3, firstName: 'Ali', lastName: 'Ghasemi', email: 'ali@gamil.com', phone: '+989121234567'},
    {id: 4, firstName: 'Sara', lastName: 'Ghasemi', email: 'Maede@gmail.com', phone: '+9113214579'},
]

function App() {
    const [users, setUsers] = useState(usersList)
    const [user, setUser] = useState({firstName: '', lastName: '', email:'', phone: ''})
    return (
        <div className={'body'}>
            <Header/>
            <Table user={user} setUser={setUser} setUsers={setUsers} users={users}/>
            {/*<Form user={user} setUser={setUser} setUsers={setUsers} users={users}/>*/}
            <Footer/>
        </div>
    );
}

export default App;