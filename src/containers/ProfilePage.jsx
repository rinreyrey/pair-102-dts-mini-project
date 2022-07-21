import * as React from "react";
import { Button,Typography,Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keluarDariApps } from "../authentication/firebase";
import ProfileOther from '../assets/ProfileOther.svg';
import ProfilePicture from '../assets/ProfilePicture.svg';
import ProfilePicture1 from '../assets/ProfilePicture1.svg';
import ProfilePicture2 from '../assets/ProfilePicture2.svg';
import ProfilePicture3 from '../assets/ProfilePicture3.svg';
import Logom from '../assets/logom.svg';
export default function ProfilePage() {
    const navigate = useNavigate();
    const buttonLogoutOnClickHandler = async () => {
        // Kita akan memanggil fungsi keluarDariApps di sini
        await keluarDariApps();
        navigate("/");
      };
    return (
        <>
        <img src={Logom} className="logo-Mmovies" alt="Logo"></img>
        <Card className="profile-page">
            <div className="profile-box">
                <Typography variant="h3" align="center">Who's Watching?</Typography>
                <div style={{display:"flex",justifyContent:"space-evenly",gap:"7%",width:"100%",alignItems:"center"}}>
                    <div className="profile-container" onClick={buttonLogoutOnClickHandler}>
                    <img src={ProfilePicture3} alt="Profile"/>
                    <Typography variant="body1">Murat</Typography>
                    </div>
                    <div className="profile-container" onClick={buttonLogoutOnClickHandler}>
                    <img src={ProfilePicture2} alt="Profile"/>
                    <Typography variant="body1">Umut</Typography>
                    </div>
                    <div className="profile-container" onClick={buttonLogoutOnClickHandler}>
                    <img src={ProfilePicture1} alt="Profile" />
                    <Typography variant="body1">Kemal</Typography>
                    </div>
                    <div className="profile-container" onClick={buttonLogoutOnClickHandler}>
                    <img src={ProfilePicture} alt="Profile" />
                    <Typography variant="body1">Cocuk</Typography>
                    </div>
                    <div className="profile-container">
                    <img src={ProfileOther} alt="Profile" />
                    <Typography variant="body1">Other</Typography>
                    </div>
                </div>
                <Button variant="outlined" size="medium" style={{width:"200px"}}>MANAGE PROFILE</Button>
            </div>
        </Card>
        </>
    );
}