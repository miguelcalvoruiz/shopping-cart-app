import './Header.css';

const Header = ({total}) => {

    return (
        <header className='header'>
            <div className='logo'>🛒</div>
            <div className='total'>Total: {total.toFixed(2)}€</div>
        </header>
    )
}

export default Header;