import * as React from 'react';
import { Box, Typography, Modal } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: '80vw',
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: '10px'
};

interface ModalProps {
  setCloseModal: any
}

const ExplanationModal: React.FC<ModalProps> = ({ setCloseModal }) => {
  const [open, setOpen] = React.useState(false);
  const [userName, setUserName] = React.useState('');

  React.useEffect(() => {
    setOpen(true)
    setUserName(localStorage.getItem('USER_NAME') || '')
  }, [])

  const handleClose = () => {
    setOpen(false);
    setCloseModal(true)
  };
  
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
            Como funciona este site:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Aqui, você encontrará nossa lista de itens para casa, separados por cômodos. Caso queira comprar algum dos itens listados, basta clicar no quadrado ao lado do nome do produto, e você poderá informar a quantidade comprada.
            <br />
            <br />
            **Nota:** As compras são feitas e gerenciadas pelo site do item. Este site serve apenas para centralizar os itens da lista.
            <br />
            <br />
            **Nota:** Abaixo, você encontrará um campo para informar seu nome ou o nome da sua família.
          </Typography>
          <Box className="input-group" sx={{ mt: 2 }}>
            <input 
              value={userName}
              placeholder="Informe seu nome" 
              style={{
                padding: '10px 15px',
                width: '90%',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.3s',
              }}
              onChange={(e) => {
                localStorage.setItem('USER_NAME', e.target.value);
                setUserName(e.target.value)
              }}
              onFocus={(e) => (e.target.style.borderColor = '#1976d2')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
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

export default ExplanationModal;
