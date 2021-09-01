import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import './bootstrap.min.css';
//components
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Upload  from '../components/upload/Upload';
//imgs
import Logo from '../imglogo.svg';


function Home() {
    return (
        <Fragment>
            <NavBar hide={true} />
                    <div className="flex flex-col place-content-between gap-10 h-full" style={{marginTop:"-100px",zIndex:'9'}}>
                     <div >
                        <h2 className=" text-9xl  text-center "style={{color:" #1E5F8E",fontSize:"50px",fontWeight:"bold"}}>File Manger Property</h2>
                     </div>
                        <div  className="jumbotron bg-light" style={{width:"49%",marginTop:"-60px",height:" 250px",display: "inline-block",margin:"0 auto"}}>
                                     <Upload ></Upload>
                     </div>
                     <div>
                        <Link to="/results" style={{ display:"flex",justifyContent:"center"}}>
                            <button
                                type="button"
                                className=" bg-gray-300 rounded px-16 w-15  focus:ring-3 focus:ring-indigo-900"style={{color:" #1E5F8E",fontWeight:"bold", border: "2px solid #1E5F8E"}}
                            >
                                Compare !
                            </button>
                        </Link>
                    </div>   
                    </div>
                    <div>
                    <div class="row">
                            <div class="col"></div>
                            <div class="col"></div>
                            <div class="col">
                            <div className="col-span-1 col-start-3">
                                    <div className="container flex " >
                                        <p className="text-2xl flex-1" style={{fontWeight:"700",marginTop:"-30px",marginLeft:"30px"}}>the zip folder must contain a <b>single commun</b> properties file .</p>
                                        <img style={{marginTop:"-50px"}} className="" src={Logo} width={130} height={130} alt="imglogo" s/>
                                    </div>
                                </div>
                            </div>
                    </div>
               
            </div>
          {/**<Footer></Footer> */} 
        </Fragment>
    )
}

export default Home
