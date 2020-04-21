const React = require('react');
// const TeamSelect = require('./TeamSelect');
// const PositionSelect = require('./PositionSelect');
const NewsFeed = require('./NewsFeed');

class Index extends React.Component {
    render() {
        const { results } = this.props;
        return (
            <React.Fragment>
                {/* <TeamSelect />
                <PositionSelect /> */}
                <NewsFeed results={results} />
            </React.Fragment>
        );
    }
}

module.exports = Index;
