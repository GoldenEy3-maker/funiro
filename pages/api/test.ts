import { IEndpoint, IProductsData, IResponseData } from '../../typescript/interface'

import { v4 as uuidV4 } from 'uuid'


const handler: IEndpoint<IResponseData<IProductsData[] | null>> = async (req, res) => {
  const PRODUCTS_DATA = [
    {
      id: uuidV4(),
      title: 'Product 1'
    }, {
      id: uuidV4(),
      title: 'Product 2'
    }, {
      id: uuidV4(),
      title: 'Product 3'
    }, {
      id: uuidV4(),
      title: 'Product 33'
    },
    {
      id: uuidV4(),
      title: 'Product 4'
    }, {
      id: uuidV4(),
      title: 'Product 5'
    }, {
      id: uuidV4(),
      title: 'Product 6'
    }, {
      id: uuidV4(),
      title: 'Product 7'
    }
  ]

  try {
    const searchString = req.body

    const result = PRODUCTS_DATA.filter(product => product.title.trim().toUpperCase().includes(searchString.trim().toUpperCase()))

    return res.status(200).json({ success: true, data: result, message: 'Endpoint is working' })

  } catch (err: any) {
    return res.status(400).json({ success: false, data: null, message: err.message ?? 'Something wrong...' })
  }

}

export default handler