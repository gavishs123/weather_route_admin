import { createApi } from '@reduxjs/toolkit/query/react'
import { mapImageQuery } from './baseQuery'
import { CAMERA_URL, CITY_URL } from '../constants/APIRoutes'

export const locationIconAPI = createApi({
    baseQuery: mapImageQuery,
    reducerPath: 'locationIconAPI',
    endpoints: (build) => ({
        getLocationIcon: build.query({
            query: (data) => ({
                url: `${CAMERA_URL}/${data.point[1]},${data.point[0]}`,
            }),
        }),
        getCityData: build.query({
            query: (data) => ({
                url: `${CITY_URL}/${data}`,
            }),
        }),
    }),
})

export const { useLazyGetLocationIconQuery, useGetCityDataQuery } = locationIconAPI