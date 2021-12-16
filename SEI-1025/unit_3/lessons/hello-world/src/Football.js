import React, { Component } from "react";


const player = {
    name: "Alexis Sanchez",
    team: "Inter",
};

const payload = [
    {
        name: "Player 2",
        team: "Team 2",
    },
    {
        name: "Player 3",
        team: "Team 3",
    },
    {
        name: "Player 4",
        team: "Team 4",
    },
    {
        name: "Player 5",
        team: "Team 5",
    },
];

const displayPlayers = payload.map((player, idx) => {
    return (
        <div key={idx}>
            <h1>Name {player.name}</h1>
            <p>Team {player.team}</p>
        </div>
    );
});

class Football extends Component {
    render() {
        return (
            <div>
                <h1>Football</h1>
                <div>
                    <h1>{player.name}</h1>
                    <p>{player.team}</p>
                </div>
                {displayPlayers}
            </div>
        );
    }
}

export default Football;