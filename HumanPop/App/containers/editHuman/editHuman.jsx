import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { changeHuman, loadHuman } from './editHumanActions.jsx';

class EditHuman extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            surName: '',
            birthDate: null,
            numOfArrests: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { id, value } = event.currentTarget;
        this.setState({ [id]: event.target.value })
    }

    loadHuman() {
        const parsed = queryString.parse(location.search);
        if (parsed) {
            this.props.loadHuman(parsed['humanId']);
        }
    }

    componentDidMount() {
        this.loadHuman();
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.query != location.search) {
            this.setState({ query: location.search });
            this.loadHuman();
        }
        var now = new Date(this.props.data.human.birthDate);
        var month = (now.getMonth() + 1);
        var day = now.getDate();
        if (month < 10)
            month = "0" + month;
        if (day < 10)
            day = "0" + day;
        var today = now.getFullYear() + '-' + month + '-' + day;
        this.setState({
            firstName: this.props.data.human.firstName,
            surName: this.props.data.human.surName,
            birthDate: today,
            numOfArrests: '' + this.props.data.human.numOfArrests
        });
        if (this.props.data.isEdited) {
            window.history.back();
        }
    }

    render() {
        return (
            <div id="editHuman">
                <h3>Edit human</h3>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="input"
                        id="firstName"
                        className="form-control"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        plaseholder="Enter human First Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="surName">Surname</label>
                    <input
                        type="input"
                        id="surName"
                        className="form-control"
                        value={this.state.surName}
                        onChange={this.handleChange}
                        plaseholder="Enter human Surname"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="birthDate">Date of Birth</label>
                    <input
                        type="date"
                        id="birthDate"
                        className="form-control"
                        value={this.state.birthDate}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numOfArrests">Number of Arrests</label>
                    <input
                        type="number"
                        id="numOfArrests"
                        className="form-control"
                        value={this.state.numOfArrests}
                        onChange={this.handleChange}
                        plaseholder="Enter number of Arrests"
                    />
                </div>
                <input
                    type="button"
                    className="btn btn-primary"
                    value="Submit"
                    onClick={() => this.props.changeHuman(
                        this.props.data.human.humanId,
                        this.state.firstName,
                        this.state.surName,
                        this.state.birthDate,
                        this.state.numOfArrests
                    )}
                />
            </div>
        );
    }
}

let mapProps = (state) => {
    return {
        data: state.editHuman
    }
}

let mapDispatch = (dispatch) => {
    return {
        changeHuman: bindActionCreators(changeHuman, dispatch),
        loadHuman: bindActionCreators(loadHuman, dispatch),
    }
}

export default connect(mapProps, mapDispatch)(EditHuman)