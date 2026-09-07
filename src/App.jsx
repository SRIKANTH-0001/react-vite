import { useReducer } from "react";
import './style.css'

const initialScore=[
    {
        id:1,
        score:0,
        name:"SRIKANTH K"
    },
    {
        id:2,
        score:0,
        name:"GOWTHAM"
    }
]

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREASE":
            return state.map((player)=>{
                if(player.id===action.id){
                    return {...player,score:player.score+1};
                }else{
                    return player;
                }
            })
        default:
            return state;
    }
}

function App(){

    const [score,dispatch]=useReducer(reducer,initialScore);

    const handleClick=(player)=>{
         dispatch({type:"INCREASE",id:player.id});
    }

    return(
        <>
            <div className="score-box">
                {score.map((player)=>(
                <div key={player.id} className="player-row">
                    <label>
                        <input type="button" value={player.name} onClick={()=>handleClick(player)}/>
                    </label>
                    {player.score}
                </div>
            ))}
            </div>
        
        </>
    )
}

export default App