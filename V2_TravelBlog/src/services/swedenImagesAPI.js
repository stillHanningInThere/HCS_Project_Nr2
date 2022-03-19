const serverURL = "http://localhost:8080";

async function getSwedenPictures() {
    const url = serverURL + "/sweden/images"
    const response = await fetch(url);
    const result = await response.json();

    return result;
}

export default {
    getSwedenPictures
}