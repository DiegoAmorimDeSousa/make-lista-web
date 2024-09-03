import * as React from 'react';
import { Box, Typography, Modal } from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: '10px'
};

interface ModalProps {
  item: {
    title: string,
    price: string,
    quantity: number,
  },
  setShowModal: any
}

const ChooseProductModal: React.FC<ModalProps> = ({ item, setShowModal }) => {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    setOpen(true);
  }, [])

  const handleClose = () => {
    setOpen(false);
    setShowModal(false)
  };

  const handleSave = async () => {
    if(inputValue){
      await axios.put('http://localhost:4000/itens', {
        name: item.title,
        quantity: inputValue
      });
    }
    window.location.reload();
    handleClose();
  }
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, position: 'relative' }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Você está escolhendo o seguinte item:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Produto: {item.title}
            <br />
            Quantidade: {item.quantity}
            <br />
            <br />
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Informe abaixo qual a quantidade de produtos que você comprou:
          </Typography>
          <Box className="input-group" sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <input 
              placeholder="Informe a quantidade" 
              style={{
                padding: '10px 15px',
                width: '70%',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.3s',
                marginRight: '10px',
              }}
              onFocus={(e) => {
                (e.target as HTMLInputElement).style.borderColor = '#1976d2';
              }}
              onBlur={(e) => {
                (e.target as HTMLInputElement).style.borderColor = '#ccc';
              }}
              onChange={(e) => { setInputValue(e.target.value) }}
            />
            <button 
              onClick={handleSave} 
              style={{
                padding: '10px 20px',
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#45a049';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#4caf50';
              }}
            >
              Salvar
            </button>
          </Box>
          <button 
            onClick={handleClose} 
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#f50057',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            &times;
          </button>
        </Box>
      </Modal>
    </div>
  );
  
}

export default ChooseProductModal;
