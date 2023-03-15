import { React, useState, useEffect } from 'react';
import { Search } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import OutlineInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import CardProfile from './CardProfile';

import './BasicModal.css'

const BasicModal = ({ open, handleClose }) => {

  const [fruits, setFruits] = useState([]);
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fecthData() {
      const response = await fetch('http://localhost:8000/api/fruits/');
      const data = await response.json();
      setFruits(data.fruits);
      setFilteredFruits(data.fruits);
    }

    fecthData();
  }, []);

  const handleSearchTermChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleFilter(term);
  };

  const handleFilter = (searchTerm) => {
    const filtered = fruits.filter((fruit) => {
      const nameMatch = fruit.name.toLowerCase().includes(searchTerm.toLowerCase());
      const descMatch = fruit.description.toLowerCase().includes(searchTerm.toLowerCase());
      return nameMatch || descMatch;
    });
    setFilteredFruits(filtered);
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box className='absolute w-[350px] lg:w-[800px] md:w-[700px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {/* Modal Header */}
          <div className='flex justify-between items-center bg-[#1C2536] rounded-tl-xl rounded-tr-xl p-3 px-5 h-12 w-[350px] lg:w-[800px] md:w-[700px]'>
            <h1 className='text-white'>Create New Pitch</h1>
            <Button
              variant='contained'
              sx={{ backgroundColor: '#6585BA', borderRadius: '20px' }}
            >
              <p className='px-0 text-sm lg:px-2 md:px-2'>Create</p>
            </Button>
          </div>
          {/* Modal Content */}
          <div className='bg-white max-h-[500px] lg:px-5 overflow-y-scroll custom-scrollbar'>
            <div className='px-5 lg:px-8 py-5'>
              {/* Create Title */}
              <div className='grid grid-cols-5 items-center'>
                <h3 className='col-span-2 md:col-span-1 lg:col-span-1 pl-4 md:pl-6 lg:pl-6 text-md font-semibold text-gray-500'>Pitch Title</h3>
                <OutlineInput
                  id="outline"
                  size="small"
                  placeholder='Create a title...'
                  className='bg-white rounded-2xl lg:col-span-4'
                  fullWidth
                  sx={{ borderRadius: '10px' }}
                />
              </div>
              {/* Content */}
              <div className='bg-[#e1e5ee] h-auto my-5 rounded-lg py-4 px-3'>
                <h1 className='font-bold text-gray-600 pl-4 text-xl'>Profiles</h1>
                {/* In profiles */}
                <div className='h-auto bg-[#d7dbe6] mt-3 rounded-3xl p-4 px-6'>
                  {/* Search profile */}
                  <div className='w-full pb-4'>
                    <OutlineInput
                      fullWidth
                      id="outline"
                      size="small"
                      onChange={handleSearchTermChange}
                      className='bg-white rounded-2xl'
                      sx={{ borderRadius: '10px' }}
                      startAdornment={
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      }
                    />
                  </div>
                  {/* Profiles */}
                  <div className='grid md:grid-cols-2 lg:grid-cols-2'>
                    {
                      filteredFruits.length > 0 ? (
                        filteredFruits.map(fruit => (
                          <CardProfile
                            key={fruit.id}
                            name={fruit.name}
                            description={fruit.description}
                          />
                        ))
                      ) : (
                        <div className='grid col-span-2 justify-center items-center p-10'>
                          <span className='text-gray-400 text-center font-bold text-xl'>Sin resultados</span>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal