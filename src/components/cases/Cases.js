
import Cases1 from './Cases1';
import Cases2 from './Cases2';
import Cases3 from './Cases3';
import Cases4 from './Cases4';
import Cases5 from './Cases5';
import Cases6 from './Cases6';
import '../cases/Cases.css'

const Cases = () => {

    return (
        <div className="cases">
            <div className="  _container">
                <h2 className="cases_title">Кейсы</h2>
        <div className="cases_bloc block"> 
            <Cases1/>  
            <Cases2/> 
            <Cases3/> 
            <Cases4/> 
            <Cases5/> 
            <Cases6/>       
        </div>
        </div>
        </div>
    )

}

export default Cases;