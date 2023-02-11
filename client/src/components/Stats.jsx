function Stats(props) {

    const { kills, assists, deaths } = props.playerStats;

    return(
        <h1>K: {kills} A: {assists} D: {deaths}</h1>
    )
}

export default Stats;