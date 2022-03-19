const serverURL = "http://localhost:8080";

async function getGreecePictures() {
    const url = serverURL + "/greece/images"
    const response = await fetch(url);
    const result = await response.json();

    return result;
}

export default {
    getGreecePictures
}