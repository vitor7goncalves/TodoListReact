import SecondComponent from "./SecondComponent"
function FirstComponent() {
    // Comentário no Javascript
    let name = "Vitor Gonçalves"
    return (
        <div className='firstcomponent'>
            {/* Comentário no JSX */}
            <p>Game Studio</p>
            <p>Autor: {name}</p>
            <SecondComponent />
        </div>
    )
}

export default FirstComponent