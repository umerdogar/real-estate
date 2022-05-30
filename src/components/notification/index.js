import React from "react"
import "./notification.css"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { toast } from 'react-toastify';


 function Notification( type, notify) {

       const icons = {
           error: ErrorIcon,
           success: CheckCircleIcon
       }
       const message =  (
        <div className="notification">
            {/* <img className='icon' src={icons[type]} alt="icon" /> */}
            {type == "error" && <ErrorIcon fontSize="large"/>}
            {/* {type == "success" && <CheckCircleIcon fontSize="large" />} */}
            {type == "success" && <CheckCircleIcon fontSize="large" />}

           

            <p className='message'>{notify}</p>
        </div>
      )

        switch (type) {
            case "error":
              return toast(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
            case "success":
            return toast(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            default:
            return;
          }
}

export default Notification;


