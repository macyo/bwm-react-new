import React, {useEffect} from 'react'
import CounterApp from './CounterApp'

const CounterView = (props) => {

    const { countValue,handleIncrement } = props

    const generateColor = ()  =>{
        return '#' + (Math.random() * 0xFFFFFF<<0).toString(16)
    }
    useEffect(() => {
        console.log('hello')
    })

    return (
        <div style= {{background: generateColor()}} >
            <h2 className="value">{countValue}</h2>
            <button onClick={handleIncrement(1) }>Increment</button>
            <button onClick={handleIncrement(2) }>Decrement</button>
        </div>
    )
}

export default CounterView