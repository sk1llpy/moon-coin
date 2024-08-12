import { useState, useEffect } from "react";
import moonImage from '../assets/moon.png';
import coinLogoImage from '../assets/mini_moon.png'

const Home = () => {
    const initialBalance = parseInt(localStorage.getItem("balance") || "0", 10);
    
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);
    const [balance, setBalance] = useState(initialBalance);
    const [maxEnergy, setMaxEnergy] = useState(5000);
    const [energy, setEnergy] = useState(maxEnergy);

    const clickButton = () => {
        setBalance(prevBalance => {
            const newBalance = prevBalance + 1;
            localStorage.setItem("balance", newBalance);
            return newBalance;
        });

        setEnergy(prevEnergy => {
            const newEnergy = prevEnergy - 1;
            return newEnergy;
        });

        if (1 >= energy) {
            const buttonDiv = document.getElementById("button-div");
            buttonDiv.className = "hidden";
        };

    };

    useEffect(() => {
        const handleResize = () => setWidthWindow(window.innerWidth);
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container mx-auto p-4">
            {widthWindow <= 576 && (
                <div className="container">
                    <div className="flex justify-between bg-gray-800 p-[15px] rounded-[10px] pl-[20px] pr-[20px] mt-2">
                        <div className="flex">
                            <p className="text-white">Clan Name</p>
                        </div>
                        <div className="flex">
                            <img src={coinLogoImage} alt="" className="w-[23px] h-[23px]"/>
                            <p className="text-white">100 000 000</p>
                        </div>
                    </div>
                    <div className="mt-7">
                        <h1 className="text-center text-[40px] font-bold text-white">{balance}</h1>
                        <div className="flex justify-center">
                            <p className="text-center text-white p-[5px] bg-slate-500 w-[110px] rounded-[20px] text-[13px]">Rating #1</p>
                        </div>
                    </div>
                    <div className="mt-1 flex justify-center" id="button-div">
                        <button onClick={clickButton}>
                            <img src={moonImage} alt="" />
                        </button>
                    </div>
                    <div>

                    </div>
                    <div className={ energyDivClass } id="energy-div">
                        <div className="flex">
                            <p className="text-gray-300 text-[15px]">
                                <span className="text-white">{ energy }</span> / { maxEnergy }
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {widthWindow > 576 && (
                <div className="flex justify-center">
                    <h1 className="text-white text-[40px] font-bold mt-5">Please open in your mobile.</h1>
                </div>
            )}
        </div>
    );
};

export default Home;
