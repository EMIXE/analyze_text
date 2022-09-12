import React from 'react'
import './styles.css'
import {Button} from "@mui/material";

function Menu() {

    return (

        <div className="grid grid-rows-4 bg-gray-200 divide-y border-2 border-sky-500 m-8">
            <div className="my-2">
                <Button className="w-full" color="secondary"><p className="font-mono text-2xl">Выбор данных</p></Button>
            </div>
            <div className="my-2">
                <Button className="w-full" color="secondary"><p className="font-mono text-2xl">Анализ данных</p></Button>
            </div>
            <div className="my-2 ">
                <Button className="w-full" color="secondary"><p className="font-mono text-2xl">Выгрузка результатов</p></Button>
            </div>
            <div className="my-2">
                <Button className="w-full" color="secondary"><p className="font-mono text-2xl">История</p></Button>
            </div>
        </div>
    )
}

export default Menu;