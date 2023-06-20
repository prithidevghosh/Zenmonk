import React from 'react'
import "../../styles/displayNote.css"
import { useSelector, useDispatch } from 'react-redux';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch } from 'antd';
import { getTasks } from "../../features/noteSlice"
import { useState } from 'react';
import Note from '../Note/Note';
import SearchNotes from '../SearchNotes/SearchNotes';
import { Empty } from 'antd';
const { Meta } = Card;
export default function DisplayNotes(props) {
    const contentData = useSelector((state) => state.notes.value)
    const tempContentData = useSelector((state) => state.tempnote.value)
    const [loading, setLoading] = useState(true);
    const onChange = (checked) => {
        setLoading(!checked);
    };
    return (
        <div className='displayNote_container'>



            {
                props.state.length == 0 ? <>
                    {contentData.length == 0 ? <Empty /> : contentData.map((data) => {

                        return (
                            <div className='note'>
                                <Note contentData={data} />

                            </div>
                        )
                    })}
                </>

                    :

                    <>
                        {props.state.length == 0 ? <Empty /> : props.state.map((data) => {

                            return (
                                <div className='note'>
                                    <Note contentData={data} />

                                </div>
                            )
                        })}
                    </>
            }







        </div>
    )
}
