import React, {Fragment} from 'react'

//components
import NavBar from '../components/NavBar';
import Result from './Result';

function Table() {
    return (
        <Fragment>
            <NavBar hide={false}/>
            <div className="flex flex-col place-content-between h-full">
                <div className="w-full p-3" style={{backgroundColor: " #1E5F8E"}}>
                    <h1 className="text-4xl text-start font-bold">Dashboard</h1>
                </div>
                {/*<div className=" container place-content-center w-full">*/}
                <div className="container place-content-center w-full">
                    <br/>
                    <Result />
                </div>
                <div></div>
            </div>
        </Fragment>
    )
}

export default Table
