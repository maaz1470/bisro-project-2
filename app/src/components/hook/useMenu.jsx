import { useEffect, useState } from "react";

const useMenu = () => {

    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(response => {
            setMenu(response)
            setLoading(false)
        })
    },[])
    return [menu, loading]

}

export default useMenu;