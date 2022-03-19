const serverURL = "http://localhost:8080";

async function getParisPictures() {
    const url = serverURL + "/paris/images"
    const response = await fetch(url);
    const result = await response.json();

    return result;
}

export default {
    getParisPictures
}