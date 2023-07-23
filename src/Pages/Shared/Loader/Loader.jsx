import { PacmanLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className='h-[70vh] flex flex-col justify-center items-center'>

            <PacmanLoader color="#5717be" />
        </div>
    );
};

export default Loader;