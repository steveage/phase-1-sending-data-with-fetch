// Add your code here
function submitData(name, email) {
    const uri = "http://localhost:3000/users";

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };
    
    const userInfo = {
        name: name,
        email: email
    };

    const userInfoString = JSON.stringify(userInfo);

    const config = {
        method: "POST",
        headers: headers,
        body: userInfoString
    };

    return fetch(uri, config)
    .then(response => response.json())
    .then(json => appendId(json))
    .catch(handleError);
}

function appendId(json) {
    appendToBody(json.id);
}

function appendToBody(text) {
    document.body.innerHTML+= text;
}

function handleError(error) {
    appendToBody(error.message);
}