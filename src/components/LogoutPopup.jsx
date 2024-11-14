'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import axios from 'axios';
import { useToken } from '../context/TokenContext';
import { useNavigate } from 'react-router-dom';

const LogoutPopup = () => {
  const [openModal, setOpenModal] = useState(true);
  const { token, setToken } = useToken();
  const navigate = useNavigate();

  const logout = async () => {
    console.log('logout');
    try {
      const response = await axios.post('https://localhost:7276/api/Auth/Logout', token, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      setToken(null);
      navigate('/login');
      // ;
    } catch (error) {
      alert('Network error. Please try again later.', error);
      console.error('Logout error:', error);
    }
  };

  return (
    <>
      <Modal show={openModal} size="md" onClose={() => {}} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want logout?</h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => logout}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => {}}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default LogoutPopup;
