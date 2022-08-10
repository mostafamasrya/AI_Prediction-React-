import React from 'react';
import './PagesStatic/home.css'
import { Link } from 'react-router-dom'




function Home(){
    return (
        <>
            <div className='p-5 my-3 '>
                <h1 className='my-2 p-2'>welcome to AI Prediction</h1>
                <div className='row p-3'>
                    <div className='col-6'>
                        <img src={require(`./PagesStatic/Ai2.png`)} alt="Ai" className='img1 rounded'/>


                    </div>
                    <div className='col-6 p-5'>
                         <p className='my-2  para mycolor '>You Can Predict Any Type Of Media With Our Professional Model </p>


                    </div>

                </div>
            </div>

            <div className='p-5 my-3 bg-light'>
                <i class="fa-solid fa-clipboard-check  p-4 icon1"></i>
  
                <span className='ms-5 para1'>Select Your Media</span>
                <br/>
                <div className='row my-3 p-3 border border-white border-2 rounded'>
                    <div className='col-3'>
                        <p className='fs-5 para2'>Upload Image</p>
                       <Link to={"/UploadImage"}> <button className='btn btn-primary'>Upload</button></Link>

                    </div>
                    <div className='col-3'>
                        <p className='fs-5 para2'>Upload Vedio</p>
                        <Link to={"/UploadVedio"}> <button className='btn btn-primary'>Upload</button></Link>


                    </div>
                    <div className='col-3'>
                        <p className='fs-5 para2'>Upload RTSB</p>
                        <Link to={"/UploadRTSB"}> <button className='btn btn-primary'>Upload</button></Link>


                    </div>
                    <div className='col-3'>
                        <p className='fs-5 para2'> Camera</p>
                        <Link to={"/Prediction/Camera"}> <button className='btn btn-primary'>Predict</button></Link>


                    </div>

                </div>

            </div>



        </>
        )
}

export default Home