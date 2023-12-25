import Button from "./Button";

function Header({ headerTitle, onAdd, textButton, buttonColor }) {
    // const onClick = () => {
    //     console.log('Clicked')
    // }
    return (
        <header className='header'>
            <h1>{headerTitle}</h1>
            <Button
                color={buttonColor}
                text={textButton}
                onClick={onAdd}
            />
        </header>
    );
}


export default Header;