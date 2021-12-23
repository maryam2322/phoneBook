import './Header.style.css'
import {useState} from "react";
import {Table} from "../Table/Table";
import './Header.style.css'
const Header = ({filter, setFilter}) => {
    return(
      <header className={'header'}>
          <div>
              <h1 className={'title'}>
                  Phone Book
              </h1>
          </div>
          <div>
              <form action="">
                  <img className={'search__img'}
                       src="https://img.icons8.com/offices/30/000000/search-contacts.png"/>
                  <input onChange={e => setFilter(e.target.value)} className={'search__input'} type="text"
                         placeholder={'Search your contact ...'}/>
              </form>
          </div>
      </header>

  );
}

export default Header


