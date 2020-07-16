import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addHuman } from './newHumanActions.jsx'
import { Redirect } from 'react-router-dom';

class NewHuman extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            surName: '',
            birthDate: '',
            numOfArrests: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { id, value } = event.currentTarget;
        this.setState({ [id]: event.target.value })
    }

    /*componentWillReceiveProps() {
        if (this.props.isSaved) {
            <Redirect to="/"/>
        }
    }*/

    render() {
        return (
            <div id="newProject">
                <h3>Add new human</h3>
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
                    onClick={() => this.props.addHuman(
                        this.state.firstName,
                        this.state.surName,
                        this.state.birthDate,
                        this.state.numOfArrests
                    )}
                />
            </div>

        )
    }
};

let mapProps = (state) => {
    return {
        data: state.newHuman,
    }
}

let mapDispatch = (dispatch) => {
    return {
        addHuman: bindActionCreators(addHuman, dispatch),
    }
}

export default connect(mapProps, mapDispatch)(NewHuman)