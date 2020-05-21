import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import HumanItem from './components/humanItem.jsx';
import { loadHumans, removeHuman } from './humansActions.jsx';
import "isomorphic-fetch";


class Humans extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: location.search };
        this.removeHuman = this.removeHuman.bind(this);
    }

    componentDidMount() {
        this.loadHumans();
    }

    removeHuman(humanId) {
        let pageIndex;
        const parsed = queryString.parse(location.search);
        if (parsed) {
            pageIndex = parsed['pageIndex'];
        }
        this.props.removeHuman(humanId, pageIndex);
        this.loadHumans();
    }

    loadHumans() {
        let pageIndex;
        const parsed = queryString.parse(location.search);
        if (parsed) {
            pageIndex = parsed['pageIndex'];
        }
        this.props.loadHumans(pageIndex);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.query != location.search) {
            this.setState({ query: location.search });
            this.loadHumans();
        }
    }

    render() {
        const total = this.props.humans.totalPages;
        const pageSize = this.props.humans.pageSize;
        const pageNumbers = [];
        let params = queryString.parse(location.search);
        let queryTrailer = '';
        for (let i = 1; i <= Math.ceil(total / pageSize); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className="listPageNumbers" key={number}>
                    <Link className="btn btn-dark" to={"/humans?pageIndex=" + (number - 1) + queryTrailer}>{number}</Link>
                </li>
            );
        });

        let humans = this.props.humans.records.map(item => {
            return (
                <HumanItem key={item.humanId} data={item} removeHuman={this.removeHuman} />
            )
        });

        return (
            <div id="projects">
                <br />
                <div className="row">
                    <div className="col">
                        <h3>Humans</h3>
                    </div>
                    <div className="col text-right">
                        <Link className="btn btn-primary" to={"/humans/new"}>Create Human</Link>
                    </div>
                </div>
                <br />
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Birth Day</th>
                            <th scope="col">Numbers of Arrests</th>
                            <th></th>
                        </tr>
                        {humans}
                    </tbody>
                </table>
                <div id="pagingNumber">
                    {renderPageNumbers}
                </div>
            </div>
        );
    }
};

let mapProps = (state) => {
    return {
        humans: state.humans.data,
        error: state.humans.error,
    }
}
let mapDispatch = (dispath) => {
    return {
        loadHumans: bindActionCreators(loadHumans, dispath),
        removeHuman: bindActionCreators(removeHuman, dispath)
    }
}

export default connect(mapProps, mapDispatch)(Humans)