'use server'
import db from '@/lib/db'
import { Product, ProductsResponse } from '@/types/global'

export async function productsAction(): Promise<ProductsResponse> {
  const products = await db.query('SELECT * FROM products') as Product[]
  return {
    status: 200,
    data: products,
    body: 'get products success'
  }
}