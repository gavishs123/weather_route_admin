import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from './baseQuery'
import { ANALYTICS_URL } from '../constants/APIRoutes'

export const analyticsAPI = createApi({
    baseQuery: baseQuery,
    reducerPath: 'analyticsAPI',
    endpoints: (build) => ({
        sendAnalytics: build.mutation({
            query: (data) => ({
                url: ANALYTICS_URL,
                method: 'POST',
                body: data,
            }),
        }),
    }),
})

export const { useSendAnalyticsMutation } = analyticsAPI