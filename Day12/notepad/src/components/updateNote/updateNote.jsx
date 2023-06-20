import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import "../../styles/updateNote.css"
import { useSelector, useDispatch } from 'react-redux';
import {
    addTask, editTask
} from '../../features/noteSlice';
import { Button, Space } from 'antd';
import { Input } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
export default function UpdateNote(props) {
    { console.log(props.data); }
    const dispatch = useDispatch();
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState("")
    const [error, setError] = useState("")
    const RemoveHTMLTags = (s) => {


        // Use regex_replace function in regex
        // to erase every tags enclosed in <>
        s = new String(s).replace(/<(.|\n)*?>/g, '');


        // let inputWithProperEntities = s.replaceAll('&amp;', '&');
        // console.log(inputWithProperEntities.);
        // Print string after removing tags


        return s;
    }
    const [num, setNum] = useState(1);
    const handleAddNoteButtonClick = (e) => {
        e.preventDefault();


        (content == "") ? setError("*content is required") : (title == "") ?
            setError("*title is required") :

            setNum(num + 1)
        dispatch(editTask({
            id: props.data,
            content: content,
            title: title
        }));
        setContent("")
        setTitle("")
        // console.log(RemoveHTMLTags(content));
    }
    return (
        <>

            <div className='updateNote_container'>
                <Title style={{ fontFamily: 'Oswald' }} level={3}>Enter title below</Title>
                <Input onChange={(e) => setTitle(e.target.value)} placeholder="Basic usage" />
                <Title style={{ fontFamily: 'Oswald' }} level={3}>Enter content below</Title>
                <JoditEditor
                    ref={editor}
                    value={content}

                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons

                ><input /></JoditEditor>
                <Button onClick={handleAddNoteButtonClick} style={{ marginTop: "8px" }} type="primary" block>
                    + update Note
                </Button>
                <i style={{ color: "red" }}>{error}</i>
            </div>
        </>
    )
}
