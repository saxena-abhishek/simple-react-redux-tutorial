export function addUserName(props) {
    console.log("Action file data is ", props);
    return {
        type: 'ADD_USER_NAME',
        payload: props
    }
}