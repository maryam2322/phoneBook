import './Header.style.css'

const Header = () => {
    return (
        <header className={'header'}>
            <div>
                <h1 className={'title'}>
                    Phone Book
                </h1>
            </div>
            <div>
                <form action="">
                    <img className={'img__search'} src="https://img.icons8.com/offices/40/000000/search-contacts.png"/>
                    <input className={'search'} type="text" placeholder={'Search your contact ...'}/>
                </form>
            </div>
        </header>
    );
}

export default Header