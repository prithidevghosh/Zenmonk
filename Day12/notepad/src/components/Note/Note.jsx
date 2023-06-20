import React from 'react'
import "../../styles/note.css"
import { Button, Space } from 'antd';
import { Modal } from 'antd';
import { useState } from 'react';
import { FullscreenOutlined } from "@ant-design/icons"
import { useSelector, useDispatch } from 'react-redux';
import {
    addTask, removeTask
} from '../../features/noteSlice';
import AddNote from '../AddNote/AddNote';
import UpdateNote from '../updateNote/updateNote';
export default function Note(props) {
    // { console.log(props.contentData.id); }

    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(removeTask(props.contentData.id))
    }
    const handleEdit = () => {

    }
    const [isViewMoreModalOpen, setViewMoreModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const showModal = () => {
        setViewMoreModalOpen(true);
    };
    const showEditModal = () => {
        setEditModalOpen(true);
    };
    const handleOk = () => {
        setViewMoreModalOpen(false);
    };
    const edithandleOk = () => {
        setEditModalOpen(false);
    };
    const handleCancel = () => {
        setViewMoreModalOpen(false);
    };
    const edithandleCancel = () => {
        setEditModalOpen(false);
    };

    return (
        <>
            <Modal title="Basic Modal" open={isViewMoreModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='header_note'>
                    <div className='header_note_top'>
                        <span>Title: </span> <div dangerouslySetInnerHTML={{ __html: props.contentData.title }}>

                        </div>
                    </div>

                    <div className='header_note_bottom'>
                        <span>Content: </span><div dangerouslySetInnerHTML={{ __html: props.contentData.content }}>
                        </div>


                    </div>
                </div>
            </Modal>
            <Modal title="Basic Modal" open={isEditModalOpen} onOk={edithandleOk} onCancel={edithandleCancel}>
                <UpdateNote data={props.contentData.id} />
            </Modal>
            <div className='header_note'>
                <div className='header_note_top'>
                    <span>Title: </span> <div dangerouslySetInnerHTML={{ __html: props.contentData.title }}>

                    </div>
                </div>

                <div className='header_note_bottom'>
                    <span>Content: </span><div dangerouslySetInnerHTML={{ __html: props.contentData.content }}>
                    </div>


                </div>
            </div>
            <div className='button_footer'>
                <Button onClick={handleDelete} style={{ margin: "2px" }} type="primary" danger>
                    Delete
                </Button>
                <Button onClick={showEditModal} style={{ margin: "2px" }} type="primary" >
                    Edit
                </Button>
                <Button onClick={showModal} style={{ margin: "2px" }} type="primary" >
                    <FullscreenOutlined />
                </Button>
            </div>
        </>
    )
}
