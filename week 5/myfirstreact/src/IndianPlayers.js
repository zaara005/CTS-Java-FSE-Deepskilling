export function OddPlayers(props)
{
    const players = props.players.filter((player,index)=>index%2===0);

    return(
        <ul>
            {
                players.map((player,index)=>(
                    <li key={index}>{player}</li>
                ))
            }
        </ul>
    );
}

export function EvenPlayers(props)
{
    const players = props.players.filter((player,index)=>index%2!==0);

    return(
        <ul>
            {
                players.map((player,index)=>(
                    <li key={index}>{player}</li>
                ))
            }
        </ul>
    );
}

export function ListofIndianPlayers(props)
{
    return(
        <ul>
            {
                props.IndianPlayers.map((player,index)=>(
                    <li key={index}>{player}</li>
                ))
            }
        </ul>
    );
}