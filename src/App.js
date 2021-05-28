import React, {useState,useEffect} from 'react';
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";

export default () => {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[seq,setSeq]=useState(1);

useEffect(() => {
    fetch('http://ec2-13-126-90-72.ap-south-1.compute.amazonaws.com:8082/user/1/tasks/')
            .then((response) => {
            if (response.ok) {
            return response.json();
            }
            })
            .then((data) => {
              setData(data);
            })
            .catch((error) => {
            console.error("Error fetching data: ", error);
            setError(error);
            })
            .finally(() => {
            setLoading(false);
            });
            }, []);

if (loading) return "Loading...";
if (error) return "Error!";

  return (
    <div className="App">
      <Sidebar data={data} setSeq={setSeq} />
     <Map data={data}   
          seqno={seq}
       />
    </div>
  );
}