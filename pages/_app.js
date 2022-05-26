import 'bootstrap/dist/css/bootstrap.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// import '../styles/globals.css';
import './globals.css';


import Layout from '../components/layout/Layout';


function MyApp({ Component, pageProps }) {
  return  (
    <Layout>
        <Component {...pageProps} /> 
    </Layout>
  );
}

export default MyApp
