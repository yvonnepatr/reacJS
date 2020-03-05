class HelloMessage extends React.Component {
    render() {
        const { user, flag, items } = this.props;
        const { name, lastname } = user;

        return (
            <div>
                Hola {name} {lastname}
                <p>
                    2 + 2 = { 2 + 2 }
                </p>
                <p>
                    { flag ? 'verdadero' : 'falso'}
                </p>
                <ul>
                    { items.map(item => <Item value={item} />)}
                </ul>
            </div>
        );
    }
}

function Item(props) {
    return <li>{ props.value }</li>
}

const user = {
    name: "Manuel",
    lastname: "Del Pozo"
};
const items = ['producto 1', 'producto 2', 'producto 3'];

ReactDOM.render(
    <HelloMessage user={user} flag={true} items={items} />,
    root
);
