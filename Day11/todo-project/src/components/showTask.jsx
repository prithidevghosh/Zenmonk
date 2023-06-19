import React, { useEffect, useState } from 'react';
import '../styles/showTask.css';
import { selectTask } from '../feature/taskSlice';
import { useSelector } from 'react-redux';
import { Avatar, List, Collapse, Badge, Space } from 'antd';

const { Panel } = Collapse;

export default function ShowTask() {
    const data = [
        {
            title: 'Ant Design Title 1',
        },
    ];

    const tasks = useSelector(selectTask);
    const [map, setMap] = useState(new Map());

    useEffect(() => {
        generateMap();
    }, [tasks]);

    const onChange = (key) => {
        console.log(key);
    };

    const renderListItems = () => {
        return tasks.map((task, index) => (
            <List.Item key={index}>
                <List.Item.Meta
                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                    title={<a href="https://ant.design">{task.user}</a>}
                    description={task.task_desc}
                />
                <p>{task.deadline}</p>
            </List.Item>
        ));
    };

    const items = [
        {
            key: '1',
            label: <strong>Assignment Holders</strong>,
            children: (
                <List itemLayout="horizontal" dataSource={data} renderItem={renderListItems} />
            ),
        },
    ];

    const generateMap = () => {
        const newMap = new Map();
        tasks.forEach((task) => {
            if (newMap.has(task.user)) {
                let val = newMap.get(task.user);
                newMap.set(task.user, val + 1);
            } else {
                newMap.set(task.user, 1);
            }
        });
        setMap(newMap);
    };

    return (
        <div className="result_container">
            <Collapse items={items} defaultActiveKey={['1']} onChange={onChange}></Collapse>

            <Space size="middle">
                {[...map.entries()].map(([key, value]) => (
                    <Badge className='m-3' count={value} key={key}>
                        <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${1}`} shape="square" size="large" />
                        {key}
                    </Badge>
                ))}
            </Space>
        </div>
    );
}
