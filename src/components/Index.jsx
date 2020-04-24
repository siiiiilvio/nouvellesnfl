const React = require('react');
// const TeamSelect = require('./TeamSelect');
// const PositionSelect = require('./PositionSelect');
const NewsFeed = require('./NewsFeed');
const Pagination = require('./Pagination');

class Index extends React.Component {
    render() {
        const { results, pagination } = this.props;
        return (
            <React.Fragment>
                {/* <TeamSelect />
                <PositionSelect /> */}
                <NewsFeed results={results} />
                <Pagination pagination={pagination} />
            </React.Fragment>
        );
    }
}

module.exports = Index;
