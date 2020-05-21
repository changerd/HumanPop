import React from 'react';
import { Link } from 'react-router-dom';

export default class HumanItem extends React.Component {
    render() {
        const deleteBlock =
            <button className="btn btn-dark" onClick={() => {
                if (confirm('Delete human?')) {
                    this.props.removeHuman(this.props.data.humanId);
                }
            }}>
                Delete
           </button>

        const editBlock =
            <Link className="btn btn-dark" to={"/humans/edit?humanId=" + this.props.data.humanId} >Edit</Link>


        return(
            <tr id="humanItem">
                <td>{this.props.data.firstName}</td>
                <td>{this.props.data.surName}</td>
                <td>{this.props.data.birthDate}</td>
                <td>{this.props.data.numOfArrests}</td>
                <td>
                    {editBlock} {deleteBlock}
                </td>
            </tr>
        )
    }
}