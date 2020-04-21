const React = require('react');
const { teams } = require('../utils/constants');

const TeamSelect = props => {
    return (
        <select name="team" id="teamSelect">
            <option value="default">Équipe</option>
            {teams.map((team, index) => (
                <option key={`${team.abbr}_${index}`} value={team.abrr}>
                    {team.name}
                </option>
            ))}
        </select>
    );
};

module.exports = TeamSelect;
