import React, {useState,useEffect} from 'react';
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";

function numb(no)  //check if all sequence numbers missing
{
    if (no === Number.MAX_VALUE)
    {
        return null;
    }
    else return no;
}

function seqmin(info) //find minimum sequence number 
{
    return (info.reduce((min, p) => p.seq < min ? p.seq : min, Number.MAX_VALUE));
}

export default () => {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[seq,setSeq]=useState(null);

useEffect(() => {
    fetch('http://ec2-13-126-90-72.ap-south-1.compute.amazonaws.com:8082/user/1/tasks/')
            .then((response) => {
            if (response.ok) {
            return response.json();
            }
            })
            .then((data) => {
              setData(data);
              const min=seqmin(data)  
              setSeq(min);}
            )
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
          seqno={numb(seq)}
       />
    </div>
  );
}