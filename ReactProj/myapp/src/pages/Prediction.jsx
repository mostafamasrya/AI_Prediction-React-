import React from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


function Prediction(){
    const mediaType=useParams().mytype
    console.log(mediaType)



    return(<>
            <div className='p-5 mt-3'>
                <h3 style={{color:"rgb(46, 3, 46);"}} className='my-3'>Your Prediction</h3>
                {mediaType === "image" ? (<>
                    <div className='row my-2 p-2'>
                    <div className='col-6 p-5 fs-5 fw-bold'>
                        <ul className='p-5'>
                            <li className='p-2 my-3'>Human</li>
                            <li className='p-2 my-3'>Car</li>
                            <li className='p-2 my-3'>Dog</li>
                  
                        </ul>

                    </div>
                    <div className='col-6 p-5'>
                        <img className="rounded" src={require(`./PagesStatic/Ai2.png`)} alt="myimage" height={400} width={400}/>

                    </div>
                </div>



                </>):(<>
                    <div className='row my-2 p-2'>
                    <div className='col-6 p-5 fs-5 fw-bold'>
                        <ul className='p-5'>
                            <li className='p-2 my-3'>Human</li>
                            <li className='p-2 my-3'>Car</li>
                            <li className='p-2 my-3'>Dog</li>
                  
                        </ul>

                    </div>
                    <div className='col-6 p-5'>
                            <video width="320" height="240" controls>
                            <source src={require(`./PagesStatic/video.mp4`)} type="video/mp4"/>
                        

                            </video>

                    </div>
                </div>
                </>)}
 
                

            </div>

            <div className='mb-3'>
           
                <Link to={"/"}> <button className='p-2 btn btn-primary'>Back To Home</button></Link>



            </div>
        </>)
}
export default Prediction