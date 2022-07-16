import React from 'react';

// HOC
function useStorageListener(sincronize) {
  console.log('LLama a hook');
  const [storageChange, setStorageChange] = React.useState(false);

  React.useEffect(() => {
    const onChange = (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en TODOS_V1');
        setStorageChange(true);
      }
    };
    window.addEventListener('storage', onChange);
  }, []);

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return { show: storageChange, toggleShow: toggleShow };
}

export { useStorageListener };
