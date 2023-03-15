import React, { useState } from 'react'
import Button from '@mui/material/Button'
import BasicModal from './components/BasicModal'

const App = () => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <Button
        onClick={handleOpen}
        variant="contained"
      >
        Show
      </Button>

      <BasicModal open={open} handleClose={handleClose} />
    </div>
  )
}

export default App
