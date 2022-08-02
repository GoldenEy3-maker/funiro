import { IEndpoint } from '../../typescript/interface'

const handler: IEndpoint = async (req, res) => {
  setTimeout(() => {
    try {
      return res.status(200).json({ success: true, data: null, message: 'Now you are aware of all events' })
    } catch (err: any) {
      return res.status(400).json({ success: false, data: null, message: err.message ?? 'Something wrong...' })
    }
  }, 2000)

}

export default handler