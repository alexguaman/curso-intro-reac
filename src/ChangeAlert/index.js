import { Button, Drawer } from 'antd';
import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert(props) {
  const { show, toggleShow } = props;
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
