import "isomorphic-fetch";

const middleware = store => next => action => {

    if (action.type !== 'PROMISE') {
        return next(action);
    }

    const [startAction, successAction, failureAction] = action.actions;
    const { url, method, data } = action;

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data
    }).then((r) => r.json())
        .then((data) => {
            store.dispatch({
                type: successAction,
                payload: data
            });
        }, (error) => {
            alert(error);
            store.dispatch({
                type: failureAction,
                error
            });            
        });

    store.dispatch({
        type: startAction
    });
}

export default middleware;
