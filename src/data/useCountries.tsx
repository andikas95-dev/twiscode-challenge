import { useQuery, UseQueryOptions } from 'react-query'
import ApiCall from 'services/ApiCall'
import useUrlQuery, {
  UseUrlQueryOptions,
} from '@nexys/hooks/useUrlQuery/useUrlQuery'
import { AxiosError } from 'axios'

// interface UseProfessionData {
//   id: string
//   name: string
//   createdAt: string
//   updatedAt: string
//   deletedAt: string
// }

type UseProfessionResult = {
  data: any
  total: number
}

type TQueryFnData = UseProfessionResult
type TError = AxiosError

function useCountries(
  urlOptions?: UseUrlQueryOptions,
  options?: UseQueryOptions<TQueryFnData, TError>,
) {
  const urlQuery = useUrlQuery(urlOptions)
  const query = useQuery<TQueryFnData, TError>(
    urlQuery.transformKey('/profession'),
    () =>
      ApiCall.api
        .get(urlQuery.transformUrl('https://restcountries.com/v2/all'))
        .then((res) => {
          return res.data
        }),
    {
      ...options,
    },
  )

  return {
    ...query,
    data: query.data,
    total: query.data?.total,
    helpers: urlQuery,
  }
}

export default useCountries
