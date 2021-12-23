import './Form.style.css'

const makeUniqueID = () => {
    return parseInt(100000 * Math.random())
}

const Form = ({users, setUsers, user, setUser}) => {

    const handleAdd = (e) => {
        e.preventDefault()
        if (user.id) {
            setUsers(users.map(oldUser => user.id === oldUser.id ? user : oldUser))

        } else {
            setUsers([...users, {id: makeUniqueID(), ...user}])
        }
        setUser({firstName: '', lastName: '', email: '', phone: ''})
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }
    return (

        <div>
            <form onSubmit={handleAdd} className={'formInput'}>
                <div>
                    <label htmlFor="input1" className={'label'}>First Name:</label>
                    <input className={'inputContact'} onChange={handleChange} id={"input1"} type="text"
                           name={'firstName'} value={user.firstName} required={'Enter input'}/>
                </div>
                <div>
                    <label htmlFor="input2" className={'label'}>Last Name:</label>
                    <input className={'inputContact'} onChange={handleChange} id={"input2"} type="text"
                           name={'lastName'} value={user.lastName} required={'Enter input'}/>
                </div>
                <div>
                    <label htmlFor="input3" className={'label'}>Email:</label>
                    <input className={'inputContact'} onChange={handleChange} id={"input3"} type="text" name={'email'}
                           value={user.email} required={'Enter input'}/>
                </div>
                <div>
                    <label htmlFor="input4" className={'label'}>Phone Number:</label>
                    <input className={'inputContact'} onChange={handleChange} id={"input4"} type="text" name={'phone'}
                           value={user.phone} required={'Enter input'}/>
                </div>

                <input className={'submit'} type="submit" value={'Add'}/>
            </form>
        </div>
    )
}

export default Form