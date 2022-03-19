const serverURL = "http://localhost:8080";

async function getMolotowPictures() {
    const url = serverURL + "/molotow/images"
    const response = await fetch(url);
    const result = await response.json();

    return result;
}

export default {
    getMolotowPictures
}