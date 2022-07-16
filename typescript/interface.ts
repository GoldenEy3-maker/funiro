import { NextApiRequest, NextApiResponse } from 'next'

import type { TChildrenProp } from './type'

export interface IChildrenProps {
  children?: TChildrenProp
}

export interface ISetStaticClasses {
  (classes: string[]): string
}

export interface ISetDynamicClasses {
  (args: {
    staticClasses: string[]
    dynamicClasses: string[][]
    conditions: boolean[]
  }): string
}

export interface IEndpoint<ResponseData = IResponseData> {
  (req: NextApiRequest, res: NextApiResponse<ResponseData>): Promise<void>
}

export interface IGenericRequestFn {
  <ResponseData = IResponseData>(url: string, options?: RequestInit): Promise<ResponseData>
}

export type IResponseData<DataType = null> = {
  success: boolean
  data: DataType
  message: string
}

export interface IProductsData {
  id: string
  title: string
}