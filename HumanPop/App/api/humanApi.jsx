import { Redirect } from 'react-router-dom'
import 'isomorphic-fetch';


export function getHumans(pageIndex = 0) {
    let queryTrailer = '?pageIndex=' + pageIndex;
    return fetch(window.constants.page + queryTrailer).then((r) => r.json());
}

export function addHuman(firstName, surName, birthDate, numOfArrests, historyObject) {
    if (firstName, surName, birthDate, numOfArrests) {
        return fetch(constants.human, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "firstName": firstName, "surName": surName, "birthDate": birthDate, "numOfArrests": numOfArrests })
        }).then((response) => {
            if (response.ok) {
                historyObject.push('/');
            } else {
                alert('Some error...');
            }
        }).catch((ex) => {
            alert(ex);
        });
    }
    else {
        if (!firstName) {
            alert('Enter First Name');
        } else
            if (!surName) {
                alert('Enter Surname');
            }
            else
                if (!birthDate) {
                    alert('Enter Date of Birth');
                }
                else
                    if (!numOfArrests) {
                        alert('Enter Number of Arrests');
                    }
    }
}

export function deleteHuman(humanId, returnPageIndex) {
    return fetch(window.constants.human + '?humanId=' + humanId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if (response.ok) {
            <Redirect to={"/humans?pageIndex=" + returnPageIndex} />
        } else {
            alert('Some delete error...');
        }
    });
}

export function getHuman(humanId) {
    return fetch(window.constants.human + '?humanId=' + humanId).then((r) => r.json());
}

export function editHuman(humanId, firstName, surName, birthDate, numOfArrests) {
    if (firstName, surName, birthDate, numOfArrests) {
        return fetch(window.constants.human, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "humanid": humanId, "firstName": firstName, "surName": surName, "birthDate": birthDate, "numOfArrests": numOfArrests })
        }).then((response) => {
            if (response.ok) {
                historyObject.push('/');
            } else {
                alert('Some error...');
            }
        }).catch((ex) => {
            alert(ex);
        });
    }
    else {
        if (!firstName) {
            alert('Enter First Name');
        } else
            if (!surName) {
                alert('Enter Surname');
            }
            else
                if (!birthDate) {
                    alert('Enter Date of Birth');
                }
                else
                    if (!numOfArrests) {
                        alert('Enter Number of Arrests');
                    }
    }
}