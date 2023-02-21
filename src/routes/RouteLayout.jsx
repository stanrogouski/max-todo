import { Outlet } from "react-router-dom"

import MainHeader from "../components/MainHeader"

function RouteLayout(){
    return (
        <>
        <MainHeader />
        <Outlet />

        </>
    )

}

export default RouteLayout