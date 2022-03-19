const serverURL = "http://localhost:8080";

async function getAllDestinations() {
    const url = serverURL + "/destinations"
    const response = await fetch(url);
    const result = await response.json();

    return result;
}

async function getDestinationID(locationID) {
    const url = serverURL + "/destinations/" + locationID
    const response = await fetch(url);
    const result = await response.json()

    return result;
}


export default {
    getAllDestinations,
    getDestinationID
}