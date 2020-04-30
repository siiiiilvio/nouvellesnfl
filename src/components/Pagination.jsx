const React = require('react');
const { getPaginationURL } = require('../utils/url.js')

const Pagination = props => {
    const { pagination } = props;
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {[...Array(pagination.pages)].map((page, index) => (
                    <li
                        key={index}
                        className={`page-item ${
                            parseInt(pagination.currentPage) === index + 1 ? 'active' : ''
                        }`}
                    >
                        <a className="page-link" href={getPaginationURL({ 
                            type: pagination.type, 
                            params: pagination.params, 
                            index
                        })}>
                            {index + 1}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

module.exports = Pagination;
