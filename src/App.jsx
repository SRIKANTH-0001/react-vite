import FlowerNames from "./Child";
import { lazy, Suspense } from "react";

function App(){
    const Flower=lazy(()=>import('./Child.jsx'))
    return(
        <Suspense fallback={<div>Component Fetching is going on in the background!.....</div>}>
            <Flower/>
        </Suspense>
    )
}
export default App;