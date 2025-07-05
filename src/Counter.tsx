import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [action, setAction] = useState(1);
    const countHandeler = (flag: number) => {
        if (flag) {
            setCount(count => count + action);
        } else {
            setCount(count => count - action);
        }
    }

    const actionHandler = (e: any) => {
        let value = +e.target.value;
        value = value >= 0 ? value : 1;
        setAction(value);
    }

    const handleReset = () => {
        setCount(0);
        setAction(1)
    }

    return (
        <div className='flex flex-col gap-4 md:gap-7 items-center p-4 min-h-screen'>
            <h1 
                className={`text-2xl md:text-3xl lg:text-4xl font-bold select-none ${(count === 0 && action === 1) ? 'text-gray-800' : 'text-green-600 cursor-pointer'}`} 
                onClick={handleReset} 
                title='Click to Reset the app'
            >
                Counter App
            </h1>
            <div className="flex justify-center gap-6 md:gap-8">
                <button
                    onClick={() => countHandeler(0)}
                    disabled={count <= 0}
                    className="bg-blue-400 hover:bg-blue-600 disabled:bg-blue-200 disabled:cursor-not-allowed text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-xl md:text-2xl cursor-pointer select-none"
                >
                    -
                </button>

                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 select-none flex items-center">
                    {count}
                </div>

                <button
                    onClick={() => countHandeler(1)}
                    className="bg-blue-400 hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-xl md:text-2xl cursor-pointer select-none"
                >
                    +
                </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-4">
                <div className="text-lg md:text-xl font-semibold text-gray-800 select-none">Increment/Decrement By</div>
                <input 
                    type='text' 
                    className='border rounded-lg p-2 w-16 text-center select-none text-lg' 
                    value={action} 
                    onChange={actionHandler} 
                />
            </div>
        </div>
    )
}

export default Counter
