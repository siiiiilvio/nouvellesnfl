const React = require('react');
const { positions } = require('../utils/constants');

const PositionSelect = props => {
    return (
        <select name="pos" id="posSelect">
            <option value="default">Position</option>
            {positions.map((position, index) => (
                <option key={`${position.abbr}_${index}`} value={position.abrr}>
                    {position.name}
                </option>
            ))}
        </select>
    );
};

module.exports = PositionSelect;
