import client from "../../api/client";

const advertsBaseUrl = '/api'; 

export const getLatestAdverts = () => {
    const url = `${advertsBaseUrl}/adverts`;
    return client.get(url);
};