import React, { Component } from "react";


const volleyBallPlayer = {
    name: "Jordan Larson",
    team: "National Team",
};

const vbPayload = [
    {
        name: " Volleyball Player 2",
        team: "Team 2",
    },
    {
        name: "Volleyball Player 3",
        team: "Team 3",
    },
    {
        name: "Volleyball Player 4",
        team: "Team 4",
    },
    {
        name: "Volleyball Player 5",
        team: "Team 5",
    },
];

const displayVolleyball = vbPayload.map((player, idx) => {
    return (
        <div key={idx}>
            <h1>Name {player.name}</h1>
            <p>Team {player.team}</p>
        </div>
    );
});

class Volleyball extends Component {
    render() {
        return (
            <div>
                <h1>Volleyball</h1>
                <div>
                    <h1>{volleyBallPlayer.name}</h1>
                    <p>{volleyBallPlayer.team}</p>
                </div>
                {displayVolleyball}
            </div>
        )
    }
}

export default Volleyball;