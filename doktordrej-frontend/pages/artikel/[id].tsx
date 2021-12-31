import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Article from '../../components/Article';
import Nav from '../../components/Nav';
import useFetch from '../../hooks/useFetch'

const Artikel: NextPage = () => {
    const router = useRouter()
    const { id } = router.query  
    const {data , error, loading} = useFetch('/api/articles/'+id+'?populate=*')
    console.log(data)
    console.log(error)
   
    return (
        <>
        <Nav dark={true}/>
        <div>
            {data ? 
                data.data ? <Article article={data.data} />: null
            :null}
           
        </div>
        </>
    )
}

export default Artikel