import { useContext } from "react";

export const SingPage = () =>{
    return(
        <>
        <div className="body">
           <div className="container">
                <img className="gatito" src="https://th.bing.com/th/id/OIP.1KDZqB3HA2VLADdCA6AL-AHaHa?rs=1&pid=ImgDetMain" width={200}></img>
                    <div className="name">
                        <h1>Jael Santos</h1>
                        <h3>Web Developer / Designer</h3>
                        <br/>
                        <div className="info">
                            <img src="https://cdn-icons-png.flaticon.com/128/619/619153.png" width={20}/>
                            <p>Sinalo Lazaro Cardenas del Rio, Ampliación #41</p>
                        </div>
                            <div className="info">
                                <img src="https://cdn-icons-png.flaticon.com/128/916/916922.png" width={20}/>
                                <p>(+52) 777 427 6154</p>
                            </div>
                            <div className="info">
                                <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" width={20}/>
                                <p><u>20223tn110@utez.edu.mx</u></p>
                            </div>
                            <div className="info">
                                <img src="https://cdn-icons-png.flaticon.com/128/3003/3003511.png" width={20}/>
                                <p><u>www.miprimerapagina.com</u></p>
                            </div>
                            <div className="info">
                                <img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" width={20}/>
                                <p>@Jaely Sanz</p>
                            </div>
                    </div>
            </div>
            </div>   
        </>
    )
};

export default SingPage;