const serverURL = "http://localhost:8080";

async function getMallorcaDetails() {
    const url = serverURL + "/mallorca"
    const response = await fetch(url);
    const result = await response.json();

    return result;
}

export default {
    getMallorcaDetails
}