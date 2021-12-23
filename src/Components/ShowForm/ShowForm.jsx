import Form from "../Form/Form";
import {useState} from "react";
import './ShowForm.style.css'

const ShowForm = ({user, setUser, setUsers, users}) => {
  const [showForm, setShowForm] = useState(false)
    let formInput
  if (showForm) {
      formInput =
        <div className={'addForm'}>

          <Form user={user} setUser={setUser} setUsers={setUsers} users={users} setShowForm={setShowForm} showForm={showForm}/>
        </div>
  }
  return(
      <div>
        <div className={'add'}>
          <img onClick={() => setShowForm(!showForm)} className={'add__img'}
               src="https://img.icons8.com/fluency/70/000000/add-phone.png"/>
        </div>
        {formInput}

      </div>


  );
}
export default ShowForm