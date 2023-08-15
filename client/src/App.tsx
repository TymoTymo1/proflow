import './App.css'
import {useEffect, useState} from "react";

function App() {

    const [data, setData] = useState<{users:string[]|undefined}>({users:undefined});

    useEffect(() =>{
        fetch('/api').then(
            response => {
                return response.json()
            }
        ).then((data) => {
            setData(data);
        }).catch(error => {
            console.error('Error fetching data', error);
        })
    }, []);

    return ( <>
            <section>
                {data.users === undefined ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {data.users.map((user, index) => (
                            <li key={index}>{user}</li>
                        ))}
                    </ul>
                )}
            </section>
    </>
  )
}

export default App
