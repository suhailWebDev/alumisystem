import React, { useEffect } from 'react';
import { logoutRoute } from '../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate=useNavigate();
  return (
    <div>
      Logout successfully
    </div>
  )
}

export default Logout
