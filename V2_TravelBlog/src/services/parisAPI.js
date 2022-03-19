const serverURL = "http://localhost:8080";

async function getParisDetails() {
    const url = serverURL + "/paris"
    const response = await fetch(url);
    const result = await response.json();

    return result;
}

export default {
    getParisDetails
}