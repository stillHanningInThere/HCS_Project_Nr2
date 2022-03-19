const serverURL = "http://localhost:8080";

async function getMolotowDetails() {
    const url = serverURL + "/molotow"
    const response = await fetch(url);
    const result = await response.json();

    return result;
}

export default {
    getMolotowDetails
}