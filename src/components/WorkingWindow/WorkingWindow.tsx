import React from 'react'
import {Button} from "@mui/material";

function WorkingWindow() {
    const handlerUpload = () => {

    }
    return (
        <div className="flex flex-nowrap w-3/5 bg-gray-200 divide-y border-2 border-sky-500 m-8">
            <div className="my-2 basis-1/2">
                <Button color="secondary" onSubmit={handlerUpload}><p className="font-mono text-2xl">Выбор данных</p></Button>

            </div>
            <div className="my-2 basis-1/2">
                <Button color="secondary"><p className="font-mono text-2xl">Выбор директории</p></Button>
            </div>
        </div>
    )
}

export default WorkingWindow;