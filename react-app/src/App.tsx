

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import {useState} from "react";

function App() {
    const [alertVisible,setAlertVisible] = useState(false)

    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
    const handleSelectItem = (item: string) => {
        console.log(item)
    }

    return (
        <div>
            <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>

            {
                alertVisible &&
                <Alert onClose={() => {
                    setAlertVisible(false)
                }}>
                    Hello <span>Alert</span>
                </Alert>
            }


            <h2 className='my-5'>Button Component:</h2>
            <Button
                color="primary"
                onClick={() => setAlertVisible(!alertVisible)}>
                My Button
            </Button>
        </div>
    )
}

export default App;