const serverURL = "http://localhost:8080";

async function getGreeceDetails() {
    const url = serverURL + "/greece"
    const response = await fetch(url);
    const result = await response.json();

    return result;
}

export default {
    getGreeceDetails
}