import React from "react";

// HOC
function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        console.log('LLama a HOC');
        const [storageChange, setStorageChange] = React.useState(false);

        React.useEffect(() => {
            const onChange = (change) => {
                if(change.key === 'TODOS_V1') {
                    console.log('Hubo cambios en TODOS_V1');
                    setStorageChange(true);
                }
            };    
            window.addEventListener('storage', onChange);

            
        }, []);
        
        const toggleShow = () => {
            props.sincronize();
            setStorageChange(false);
        };

        return <WrappedComponent show={storageChange} toggleShow={toggleShow}/>;
    };

}

export {withStorageListener};