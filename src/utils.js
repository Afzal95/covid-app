import axios from "axios";

const request = axios.create({
    baseURL:"https://cdn-api.co-vin.in/api/v2/appointment/sessions/public"
});

export {request};