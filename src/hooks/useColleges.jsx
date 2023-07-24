import { useEffect, useState } from "react";


const useColleges = () => {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://booking-college-server-side-nine.vercel.app/colleges')
            .then(res => res.json())
            .then(data => {
                setColleges(data);
                setLoading(false);
            })
    }, [])



    return [colleges, loading]
};

export default useColleges;