import Button from "./Button";

function Header({ headerTitle }) {
    const onClick = () => {
        console.log('Clicked')
    }
    return (
        <header className='header'>
            <h1>{headerTitle}</h1>
            <Button
                color='green'
                text='Add'
                onClick={onClick}
            />
        </header>
    );
}


export default Header;