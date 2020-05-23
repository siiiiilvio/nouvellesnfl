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
        return specialEncodeURI(
            `/joueur?name=${params.player}&pos=${params.position}&team=${params.team}&page=${
                index + 1
            }`
        );
    } else if (type === 'team') {
        return specialEncodeURI(`/equipe?team=${params.team}&page=${index + 1}`);
    }
};

const specialEncodeURI = url => {
    const encodedURL = url.replace(/\s/g, '+');
    return encodeURI(encodedURL);
};

const replacePlusChar = (req, res, next) => {
    req.url = req.url.replace(/\+/g, ' ');
    next();
};

module.exports = {
    getQueryParams,
    getPaginationURL,
    specialEncodeURI,
    replacePlusChar,
};
