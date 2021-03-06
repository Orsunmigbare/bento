import useDebounce from "../useDebounce"
import { useRequest } from "../useRequest/useRequest"

export const usePostalCode = (
  code,
  validator = value => value?.length === 4
) => {
  const [debouncedCode] = useDebounce(code?.toString(), 500)
  const { data, error } = useRequest(
    validator(debouncedCode)
      ? {
          url: `https://api.bring.com/shippingguide/api/postalCode.json`,
          params: {
            clientUrl: window.location.href,
            pnr: debouncedCode
          },
          transformRequest: [
            function(data, headers) {
              delete headers.common.Authorization
              return data
            }
          ]
        }
      : null
  )

  return [data, error]
}
