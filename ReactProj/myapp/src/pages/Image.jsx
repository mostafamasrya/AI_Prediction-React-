import React from 'react';
import { Link } from 'react-router-dom'


function UploadImage(){



    return(<>
            <div className='p-5 my-3'>
                <h3 style={{color:"rgb(46, 3, 46);"}} className='my-3'>You Can Upload Your Image Now</h3>
                <input type={"file"} placeholder="upload your Image"/>

            </div>

            <div className='p-3 my-2 bg-light'>
            <h3 style={{color:"rgb(46, 3, 46);"}} className='my-3'>Go To See Prediction</h3>
            <Link to={"/Prediction/image"}> <button className='btn btn-primary'>Predict</button></Link>



            </div>
        </>)
}
export default UploadImage