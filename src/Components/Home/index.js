 
import {Link} from 'react-router-dom'


import {GrUser} from "react-icons/gr"
import {ImUserTie} from "react-icons/im"

import "./index.css"
const Home = () => (
    <div className="home-container">
        <Link className='link-ele' to = "/master-login">
            <div className="user-container">
                <ImUserTie className="icon"/>
                <h1 className="heading">Master -></h1>

            </div>
        </Link>
        <Link className='link-ele' to = "/student-login">
            <div className="user-container"> 
                <GrUser className="icon"/>
                <h1 className="heading">Student -></h1>
            </div>
        </Link>
    </div>
)

export default Home;

