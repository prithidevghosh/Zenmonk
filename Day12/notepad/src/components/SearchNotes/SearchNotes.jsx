import React, { useEffect, useState } from 'react'
import "../../styles/searchNote.css"
import { Input } from 'antd';
import { addTask } from "../../features/tempNoteSlice"
import { useSelector, useDispatch } from 'react-redux';
export default function SearchNotes(props) {
    const [searchValue, setSearchValue] = useState("");
    const contentData = useSelector((state) => state.notes.value)
    const dispatch = useDispatch();
    const [arr, setArr] = useState([]);




    // useEffect(() => {
    //     dispatch(addTask(arr))
    // }, [])


    useEffect(() => {
        searchfunc()
    }, [searchValue])
    const searchfunc = () => {
        let output = contentData.filter((item) => {
            return item.content.includes(searchValue) || item.title.includes(searchValue);
        })

        // console.log("output", output);
        // dispatch(addTask(output))
        props.state(output);

    }
    return (

        <>
            {console.log(searchValue)}
            <Input onChange={(e) => setSearchValue(e.target.value)} style={{ width: "40%" }} placeholder="Search Notes" />
        </>
    )
}
