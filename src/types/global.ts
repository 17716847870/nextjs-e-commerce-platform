import { SortList } from "@/lib/constants"

export type SortValue = (typeof SortList)[number]['value']

export type Product = {
  id: number
  name: string
  price: number
  description: string
  image: string
  variant: string[]
}

export type Response<T> = {
  status: number
  data: T
  body: string
}

export type ProductsResponse = Response<Product[]>