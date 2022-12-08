import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return (
          Component.getLayout(<Component {...pageProps} />)
      )
  }else{
    return (
      <> 
        <NavBar />
          <Component {...pageProps} />
        <Footer/>
      </>
      )
  }
 
}

export default MyApp
