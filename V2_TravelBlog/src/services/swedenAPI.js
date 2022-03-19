const serverURL = "http://localhost:8080";

async function getSwedenDetails() {
    const url = serverURL + "/sweden"
    const response = await fetch(url);
    const result = await response.json();

    return result;
}

export default {
    getSwedenDetails
}