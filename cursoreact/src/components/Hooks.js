import {useState} from "react";
const Hooks = () => {
    let age = 30;
    const [newAge, setnewAge] = useState(40);
    const changeAge = () => {
        age = 31;
        console.log(age);
    }

    const changeNewAge = () =>{
        setnewAge(41);
    }
    return (
        < div >
            <p>Idade: {age}</p>
            <button onClick={changeAge}>Mudar Idade</button>
            <p>Age: {newAge}</p>
            <button onClick={changeNewAge}>New Age</button>
        </div >
    )
}

export default Hooks;