import { useEffect } from "react"

const useTitle = title => {
    useEffect(() =>{
        document.title =    `${title} - Epic Fighters`;
    },[title])
}


export default useTitle;