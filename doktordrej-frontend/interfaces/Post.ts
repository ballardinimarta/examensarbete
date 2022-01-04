interface IChildrenData {
    id:string
}
interface IPost {
    caption: string,
    media_url: string,
    id: string
    media_type:string
    children?: {
        data: IChildrenData[]
    }
}


export default IPost