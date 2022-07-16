import { Button, Drawer } from 'antd';
import React from 'react';
import { useStorageListener } from './useStorageListener';

function ChangeAlert({ sincronize }) {  
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <>
        <Drawer
          title=""
          placement="bottom"
          closable={false}
          visible={show}
          key="bottom"
          height={200}          
          style={{ zIndex: 1 }}
        >
          <p>Hubo cambios</p>          
          <Button type="primary" onClick={() => toggleShow(false)}>
            Refrescar la información..
          </Button>
        </Drawer>
      </>
    );
  }
  return null;
}

export { ChangeAlert };
