import { client } from '../../../api/client'
import { API_URL } from '../../../api/config'
import { SampleType } from '../models'

export const fetchSample = async () => {
  return await client<SampleType[]>(API_URL.GET_SAMPLE)
}
