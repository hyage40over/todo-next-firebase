import * as React from 'react';
import Router from 'next/router'

import Container from '@mui/material/Container';
import { useAuthContext } from "../src/context/AuthContext"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';

import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

import AccountDelDialog from "../components/AccountDelDialog"




function InputWithIcon() {
  const { user } = useAuthContext()
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField
        id="outlined-read-only-input"
        label="アカウント"
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        //userがない場合は代入しない
        value={user?.email}
      />
    </Box>
  );
}

export default function Setting() {
  const { user } = useAuthContext()
  const [openAccountDel, setOpenAccountDel] = React.useState(false);
  const handleClickHome = () => {
    Router.push("/home");
  };
  const handleCloseAccontDel = () => {
    setOpenAccountDel(false);
    //ErrorMessageAlert("")    
  };
  const handleClickAccountDelOpen = () => {
    setOpenAccountDel(true);
  };
  return (
    <Container>
        <div align="right">
          <InputWithIcon />
        </div>
        <AccountDelDialog isOpen={openAccountDel} onClickClose={handleCloseAccontDel} />
        <div align="center">
          <h1 id="Setting-text">
            {user?.email}のアカウント設定
          </h1>
          <Stack spacing={7} dirction = "row">
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                p: 5,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 5,
                border: '1px dashed grey'
              }}
            >
              <div>
                <InputLabel>E-Mailの設定</InputLabel>
              </div>
              <div>
                <TextField id="email" variant="outlined" InputProps={{readOnly: true}} value={user?.email} />
              </div>
              <div>
                <Button variant="contained">E-MAIl 変更</Button>        
              </div>
            </Box>
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                p: 5,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 5,
                border: '1px dashed grey'
              }}
            >
              <div>
                <InputLabel>パスワードの設定</InputLabel>
              </div>
              <div>
                <TextField id="password" variant="outlined" type="password" InputProps={{readOnly: true}} value="dmy" />
              </div>
              <div>
                <Button variant="contained">password 変更</Button>        
              </div>
            </Box>
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                p: 5,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 5,
                border: '1px dashed grey'
              }}
            >
              <div>
                <Button variant="contained" onClick={handleClickAccountDelOpen}>アカウント 削除</Button>        
              </div>
              <div>
                <Button variant="contained" onClick={handleClickHome}>閉じる</Button>        
              </div>
            </Box>
          </Stack>
        </div>
    </Container>
  );
}