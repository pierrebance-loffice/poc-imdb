import { Images } from '@/app/lib/service/models/image'

export const mockImage = (type: string, id: string, size: string) => `http://localhost:3000/${type}/${id}/${size}`

export const mockImages = (type: string, id: string): Images => {
  return {
    small: mockImage(type, id, 'small'),
    big: mockImage(type, id, 'big'),
  }
}
