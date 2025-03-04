import { API_IMAGE_BASE_URL } from '@/app/lib/constants'
import { Images } from '@/app/lib/service/models/image'

export function toImages(path: string): Images {
  return {
    small: `${API_IMAGE_BASE_URL}w200${path}`,
    big: `${API_IMAGE_BASE_URL}w400${path}`,
  }
}
