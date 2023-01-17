import React from 'react';

import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IResource } from '../models/IResource';

export const ResourcesPage = () => {
    const columns: ColumnsType<IResource> = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Категория',
            dataIndex: 'categoty',
            key: 'categoty',
        },
        {
            title: 'Краткое название',
            dataIndex: 'shortName',
            key: 'shortName',
        },
        {
            title: 'Ставка',
            dataIndex: 'rate',
            key: 'rate',
        },
        {
            title: 'Затраты на использование',
            dataIndex: 'usageCost',
            key: 'usageCost',
        },
    ];

    return <Table columns={columns} />;
};
