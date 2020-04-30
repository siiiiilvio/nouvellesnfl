const getQueryParams = (params, url) => {
    let href = url;
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
};

const getPaginationURL = ({ type, params, index }) => {
    if (type === 'page') {
        return index === 0 ? `/` : `/page/${index + 1}`;
    } else if (type === 'player') {
        return encodeURI(
            `/joueur?name=${params.player}&pos=${params.position}&team=${params.team}&page=${
                index + 1
            }`
        );
    } else if (type === 'team') {
        return encodeURI(`/equipe?team=${params.team}&page=${index + 1}`);
    }
};

module.exports = {
    getQueryParams,
    getPaginationURL,
};
