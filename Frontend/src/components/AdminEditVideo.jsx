import React from 'react'
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function AdminEditVideo() {
    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([{VideoId:0, Title:'', Url:'', Description:'', Likes:0, Dislikes:0, Views:'', Comments:[''], CategoryId:0}])

    let params = useParams();
    let navigate = useNavigate();   
    const formik = useFormik({
         initialValues: {
            VideoId: videos[0].VideoId,
            Title: videos[0].Title,
            Url: videos[0].Url,
            Description: videos[0].Description,
            Likes: videos[0].Likes,
            Dislikes: videos[0].Dislikes,
            Views: videos[0].Views,
            CategoryId: videos[0].CategoryId
         },
         onSubmit: (values)=>{
             axios.put(`http://127.0.0.1:5050/edit-video/${params.id}`, values);    
                alert('Video Edited Successfully..');
                navigate('/admin-dash');
            },
            enableReinitialize: true
        });
        function LoadCategories(){
            axios.put(`http://127.0.0.1:5050/edit-video/${params.id}`, values);
            alert('Video Edited Successfully..');
            navigate('/admin-dash');
        }
        useEffect(()=>{
            LoadCategories();
            axios.get(`http://127.0.0.1:5050/get-video/${params.id}`)
            .then(response=>{
                setVideos(response.data);
            })
        },[])       

  return (
    <div className="bg-light p-2 m-3 w-25">
        <h3>Edit Video</h3>
        <form onSubmit={formik.handleSubmit} style={{height:'400px'}} className="overflow-auto">
            <dl>
            <dt>Title</dt>
            <dd><input type="text" name="Title" value={formik.values.Title} onChange={formik.handleChange} className="form-control" /></dd>
            <dt>Url</dt>
            <dd><input type="text" name="Url" value={formik.values.Url} onChange={formik.handleChange} className="form-control" /></dd>
            <dt>Description</dt>
            <dd><textarea name="Description" value={formik.values.Description} onChange={formik.handleChange} className="form-control" /></dd>
            <dt>Likes</dt>
            <dd><input type="number" name="Likes" value={formik.values.Likes} onChange={formik.handleChange} className="form-control" /></dd>
            <dt>Dislikes</dt>
            <dd><input type="number" name="Dislikes" value={formik.values.Dislikes} onChange={formik.handleChange} className="form-control" /></dd>
            <dt>Views</dt>
            <dd><input type="text" name="Views" value={formik.values.Views} onChange={formik.handleChange} className="form-control" /></dd>
            <dt>Category</dt>
            <dd>
                <select name="CategoryId" value={formik.values.CategoryId} onChange={formik.handleChange} className="form-control">
                {categories.map((category, index)=>{
                    return <option key={index} value={category.CategoryId}>{category.CategoryName}</option>
                })}
                </select>
            </dd>
            </dl>
            <button type="submit" className="btn btn-primary">Edit Video</button>
            <Link to="/admin-dash" className="btn btn-secondary">Cancel</Link>
        </form>


    </div>
  )
}
