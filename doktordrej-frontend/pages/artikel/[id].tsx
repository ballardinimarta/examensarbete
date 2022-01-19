import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Loader from 'react-loader-spinner';
import Article from '../../components/Article';
import Footer from '../../components/Footer';
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
        <Nav dark={true} title={data?.data.attributes.name}/>
        <div>
            {data ? 
                data.data ? <Article article={data.data} />: null
            :null}
            {loading ? 
        <div className="loaderContainer"><Loader type="TailSpin" color="#1e1e24" height={80} width={80} /></div>: 
        null
        }
           
        </div>
        <Footer/>

        </>
    )
}

export default Artikel