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
        <div className='flex flex-col gap-7 items-center'>
            <h1 className={`text-3xl font-bold select-none cursor-pointer ${(count === 0 && action === 1) ? 'text-gray-800' : 'text-green-600'}`} onClick={handleReset} title='Click to Reset the app'>Counter App</h1>
            <div className="flex justify-center gap-4">
                <button
                    onClick={() => countHandeler(0)}
                    disabled={count <= 0}
                    className="bg-blue-400 hover:bg-blue-600 disabled:bg-blue-200 disabled:cursor-not-allowed text-white px-4 py-2 rounded cursor-pointer select-none"
                >
                    -
                </button>

                <div className="text-4xl font-bold  text-gray-800">{count}</div>

                <button
                    onClick={() => countHandeler(1)}
                    className="bg-blue-400 hover:bg-blue-600 text-white px-4 p-2 rounded cursor-pointer"
                >
                    +
                </button>
            </div>
            <div className="flex justify-center gap-4">
                <div className="text-xl font-semi-bold  text-gray-800">Increment/Decrement By</div>
                <input type='text' className='border-1 rounded p-1 w-10 text-center' value={action} onChange={actionHandler} />
            </div>
        </div>
    )
}

export default Counter
