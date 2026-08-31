import { Suspense } from "react";
import SuspenseConcept from "./Child";

function App(){
    return(
        <>
            <Suspense fallback={<div>Loading!......</div>}>
                <SuspenseConcept/>
            </Suspense>
        </>
    )
}
export default App;