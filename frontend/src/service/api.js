import axios from "axios";

const API_URI = 'http://localhost:8000';

export const fetchDoctor = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/fetchdoctor`, data);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log("Error in calling fetchDoctor API", error.message);
    }
};