import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function UserDashBoard() {
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [videos, setVideos] = useState([{VideoId:0, Title:'', Url:'', Description:'', Likes:0, Dislikes:0, Views:'', Comments:[''], CategoryId:0}]);
    let navigate = useNavigate();
    function handleSignout(){
        removeCookie('username');
        navigate('/user-login');
    }
    useEffect(()=>{
        axios.get(`http://127.0.0:5050/get-videos`)
        .then(response=>{
            setVideos(response.data);
        })
    },[])
  return (
    <div>
        <div className="bg-light p-2 m-2">
            <h3 className="d-flex justify-content-between"><div><span>{cookies['username']}</span> <span>Dashboard</span></div> <div><button onClick={handleSignout} className="btn btn-link">Signout</button></div> </h3>
            <div className="row">
                <div className="col-2">
                    <div className="mb-3">
                    <label className="form-label fw-bold">Search Videos</label>
                    <div className="input-group">
                        <input type="text" className="form-control" />
                        <button className="bi bi-search btn btn-warning"></button>
                    </div>
                    </div>
                    <div>
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select className="form-select">
                                <option>Select Category</option>
                                <option>Java</option>
                                <option>React</option>
                                <option>Cloud</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                <section className="mt-4 d-flex flex-wrap">
                {
                    videos.map(video=>
                    <div key={video.VideoId} className="card m-2" style={{width: '18rem'}}>
                        <video src={video.Url} controls width="100%"></video>
                        <div className="card-body">
                            <h5 className="card-title">{video.Title}</h5>
                            <p className="card-text">{video.Description}</p>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <span className="bi bi-hand-thumbs-up"></span> <span>{video.Likes}</span>
                                    <span className="bi bi-hand-thumbs-down"></span> <span>{video.Dislikes}</span>
                                    <span className="bi bi-eye"></span> <span>{video.Views}</span>
                                </div>
                                <div>
                                    <Link to={`/video-details/${video.VideoId}`} className="btn btn-warning">Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
                </section>
                </div>
            </div>
        </div>


    </div>
  )
}
