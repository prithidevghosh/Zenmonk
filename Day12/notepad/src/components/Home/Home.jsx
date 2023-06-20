import React, { useEffect } from 'react'
import AddNote from '../AddNote/AddNote'
import "../../styles/home.css"
import { Button, Modal } from 'antd';
import { useState } from 'react';
import DisplayNotes from '../DisplayNotes/DisplayNotes'
import SearchNotes from '../SearchNotes/SearchNotes';
export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [array, setArray] = useState([]);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        <DisplayNotes state={array} />
    }, [array])
    return (
        <div >


            <Button style={{ marginTop: "3em", width: "20%", height: "50px" }} type="primary" onClick={showModal}>
                +  Add Notes
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]}>
                <AddNote />
            </Modal>


            <DisplayNotes state={array} />
            <SearchNotes state={setArray} />

        </div>
    )
}
