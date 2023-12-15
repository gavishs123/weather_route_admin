import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL,
})

export const mapBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_WHEATER_API_BASE_URL,
    headers: {
        'x-api-key': import.meta.env.VITE_APP_WHEATER_API_ACCESS_TOKEN
    }
})
export const mapImageQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_MAP_BASE_URL,
    headers: {
        'x-api-key': import.meta.env.VITE_APP_WHEATER_API_ACCESS_TOKEN
    }
})
