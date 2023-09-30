import './Thirdapp.css';
import img1 from './images/python.jpeg';
import img2 from './images/pythonfullstack.jpeg';
import img3 from './images/devops.jpeg';
import img4 from './images/java.jpeg';
import img5 from './images/javafullstack.jpeg';

function Thirdapp(){
    return(<>

    <div className="head">
        <center><h1> Our Courses</h1> </center>
    </div>
    <div className='python'>
        <img src={img1} alt=''/>
    </div>
    <div className='pythonfull'>
        <img src={img2} alt=''/>
    </div>
    <div className='devops'>
        <img src={img3} alt=''/>
    </div>
    <div className='java'>
        <img src={img4} alt=''/>
    </div>
    <div className='javafull'>
        <img src={img5} alt=''/>
    </div>

        <div><button className='fmc'> For More Courses</button></div>

    </>);
}

export default Thirdapp;