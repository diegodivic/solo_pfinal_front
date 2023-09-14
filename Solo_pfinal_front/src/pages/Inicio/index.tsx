import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function Inicio(){
    return  (
    <> 
    <Header />
    <h1>Inicio
        <Link to='/login'>Link para login</Link>
    </h1>
    
    <Footer />
    </>)
    

}