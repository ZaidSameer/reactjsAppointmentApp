import React, {Component} from 'react';
import {CgClose} from 'react-icons/cg';
import Moment from 'react-moment';

class ListAppointments extends Component {
    render() {
        return (
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map(item => (
                    <div className="pet-item col media py-3" key={item.aptId}>
                    <div className="mr-3">
                      <button
                        className="pet-delete btn btn-sm btn-danger"
                        onClick={() => this.props.deleteAppointment(item)}>

                      <CgClose />
                      </button>
                    </div>

                    <div className="pet-info media-body">
                      <div className="pet-head d-flex">
                        <span className="pet-name display-4">{item.aptId}) {item.petName}</span>
                        <span className="apt-date ml-auto">
                            [<Moment
                                date={item.aptDate}
                                parse="YYYY-MM-DD hh:mm:ss"
                                format="MMM-d - h:mm a"
                            />]
                        </span>
                      </div>

                      <div className="owner-name">
                        <span className="label-item"><strong>Owner:</strong> </span>
                        <span>{item.ownerName}</span>
                      </div>
                      <div className="apt-notes">{item.aptNotes}</div>
                    </div>
                  </div>
                ))}
            </div>
        );
    }
}

export default ListAppointments;