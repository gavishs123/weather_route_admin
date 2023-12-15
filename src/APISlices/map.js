import { createApi } from '@reduxjs/toolkit/query/react'
import { mapBaseQuery } from './baseQuery'
import { FORECAST_URL, LOCATION_URL, POLYLINE_URL } from '../constants/APIRoutes'

export const mapAPI = createApi({
    baseQuery: mapBaseQuery,
    reducerPath: 'mapAPI',
    endpoints: (build) => ({
        getPolyline: build.query({
            query: (data) => ({
                url: `${POLYLINE_URL}?point=${data.point[0]}&point=${data.point[1]}`,
                params: {
                    speed: 97000,
                    mode: 'car',
                    alternates: true,
                }
            }),
        }),
        getSinglePointForecast: build.query({
            query: (data) => ({
                url: `${FORECAST_URL}?point=${data.point[1]},${data.point[0]}&units=imperial&mode=car&s=vc`,
            }),
        }),
        getLocation: build.query({
            query: (data) => ({
                url: `${LOCATION_URL}?query=${data.point[1]},${data.point[0]}`,
            }),
        }),
    }),
})

export const { useLazyGetPolylineQuery, useLazyGetSinglePointForecastQuery, useLazyGetLocationQuery } = mapAPI