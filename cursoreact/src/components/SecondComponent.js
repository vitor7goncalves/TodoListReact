const SecondComponent = () => {
    const handleClick = () => {
        console.log("Clicou");
    };
    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Clique aqui</button>
            <hr />
            <button onClick={() => console.log("Outro Exemplo")}>Outro Exemplo</button>
        </div>

    );
};

export default SecondComponent;