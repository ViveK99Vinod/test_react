import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div style={{ textAlign: 'center' }} className='usercard' >
          <img style={{ width: '100px', height: '100px' }} src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="" />
          <h4>USER NAME</h4>
          <span>USER@gmail.com</span>
        </div>
        <br />
        {[
          { text: 'Dashboard', image: 'https://cdn-icons-png.flaticon.com/512/8899/8899687.png' },

          { text: 'Perks', image: 'https://cdn-icons-png.flaticon.com/512/11264/11264745.png' },

          { text: 'Addon', image: 'https://cdn3.iconfinder.com/data/icons/neptune-basis-1/48/001_039_plugin_extension_addon_new-512.png' },

          { text: 'Faq', image: 'https://static.vecteezy.com/system/resources/thumbnails/019/872/929/small/3d-minimal-faq-sign-answers-to-frequently-asked-questions-message-icon-with-a-faq-text-3d-illustration-free-png.png' },

          { text: 'Support', image: 'https://www.pngall.com/wp-content/uploads/4/Support-PNG-Image-HD.png' },

        ].map(({ text, icon, image }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={`/${text}`}>
              <ListItemIcon>
                {icon}
                <img src={image} alt={`${text} Image`} style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List style={{ position: 'absolute', bottom: 0 }}>
        {['Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>


              </ListItemIcon>
              <ListItemText primary={text} />
              <img src="https://cdn-icons-png.freepik.com/512/1053/1053210.png" alt="Logout Image" style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>

          <IconButton onClick={toggleDrawer(anchor, true)}>

            <img src="https://images.vexels.com/media/users/3/209994/isolated/preview/f04d0613dd5ea3eb46e88d902c6110d4-sale-shop-now-label-colorful.png" alt="Toggle Icon" style={{ width: '140px', height: '130px', marginTop: '0px', marginLeft: '20px' }} />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
