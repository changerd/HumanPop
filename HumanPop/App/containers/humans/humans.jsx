import React from 'react';
import { Link } from 'react-router-dom';

export default class  Huamns extends React.Component {
    render() {
        return(
            <div>
                <br />
                <div className="row">
                    <div className="col">
                        <Link className="btn btn-dark" to={ '/humans/new' }>Add Human</Link>
                    </div>
                </div>
                <h1>Hello world!</h1>
            </div>            
        );
    }
}