import React from 'react';
import { Link } from 'react-router-dom'


function RTSB(){



    return(<>
            <div className='p-5 my-3'>
                <h3 style={{color:"rgb(46, 3, 46);"}} className='my-3'>You Can Upload Your RTSB Now</h3>
                <input type="url"  placeholder='http/www.link.com'/>
                

            </div>

            <div className='p-3 my-2 bg-light'>
            <h3 style={{color:"rgb(46, 3, 46);"}} className='my-3'>Go To See Prediction</h3>
            <Link to={"/Prediction/RTSB"}> <button className='btn btn-primary'>Predict</button></Link>



            </div>
        </>)
}
export default RTSB