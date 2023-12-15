import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from './baseQuery'
import { SUPPORT_URL } from '../constants/APIRoutes'

export const supportAPI = createApi({
    baseQuery: baseQuery,
    reducerPath: 'supportAPI',
    endpoints: (build) => ({
        sendSupport: build.query({
            query: (data) => ({
                url: SUPPORT_URL,
                params: data
            }),
        }),
    }),
})

export const { useLazySendSupportQuery } = supportAPI