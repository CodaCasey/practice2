import {useState, useEffect} from 'react';

// remember this is just a basic routing and to convert to react router later
const Route = ({path, children})=> {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
      const onLocationChange = () =>{
          setCurrentPath(window.location.pathname);
      };
      window.addEventListener('popstate', onLocationChange);
      return () => {
          window.removeEventListener('popstate', onLocationChange)
      }
  }, [])
    return currentPath=== path ? children : null

}

export default Route
