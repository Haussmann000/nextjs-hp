import { IconContext } from 'react-icons/lib';
import { FaGithub } from 'react-icons/fa'


const GithubIcon = () => {
    return(
      <IconContext.Provider value={{color: "black", size: "100px"}}>
        <h3><FaGithub /></h3>
      </IconContext.Provider>
    ) 
}

export default GithubIcon;