const React = require('react');
const { teams, positions } = require('../utils/constants');

const NewsFeed = props => {
    const { results } = props;
    return (
        <div className="news-wrapper col-xs-12">
            {results.map(result => (
                <div key={result._id} className="player-news row">
                    <div className="player-logo col-md-2 nopadding">
                        <img src={`/images/${result.teamAbbr}.png`} />
                    </div>
                    <div className="player-info col-md-10">
                        <div className="player">
                            <p className="name">
                                {result.player}{' '}
                                {result.injury ? (
                                    <button type="button" className="btn btn-danger float-right">
                                        {result.injury}
                                    </button>
                                ) : null}
                            </p>
                            <p className="position">
                                {positions.some(position => position.abbr === result.position)
                                    ? positions.find(position => position.abbr === result.position)
                                          .name
                                    : result.position}
                                {', '}
                                {teams.some(team => team.abbr === result.teamAbbr)
                                    ? teams.find(team => team.abbr === result.teamAbbr).name
                                    : result.teamAbbr}
                            </p>
                        </div>
                        <div className="news-content">
                            <p className="font-weight-bold">{result.headlineFR}</p>
                            <p>{result.newsFR}</p>
                        </div>
                        <div className="news-time">{result.date}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

module.exports = NewsFeed;
