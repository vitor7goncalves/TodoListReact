const RenderCond = (props) => {
    //const x = 7;
    return (
        <div>
            {props.x > 5 && <p>X é mairo que 5</p>}
            {props.x > 5 ? <p>X é um número alto</p> : <p>X é um número baixo</p>}
        </div>
    );
};

export default RenderCond;