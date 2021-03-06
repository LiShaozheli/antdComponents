import { FC } from 'react';
import React from 'react';
import { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import VirtualTable from './components/VirtualTable';

interface Item {
  id: string;
  name: string;
  size: string;
  lll: string;
  www: string;
  expend?: boolean;
  children?: Item[];
}

function getData(count: number) {
  const data: Item[] = [];
  for (let i = 0; i < count; i += 1) {
    data.push({
      id: `${i}`,
      name: `${i}wdddd`,
      size: `${i}size`,
      lll: `${i}lll`,
      www: `${i}www`,
      children: [
        {
          id: `${i} - ${i}`,
          name: `${i}wdddd`,
          size: `${i}size`,
          lll: `${i}lll`,
          www: `${i}www`,
          children: [
            {
              id: `${i} - ${i} - ${i}`,
              name: `${i}wdddd`,
              size: `${i}size`,
              lll: `${i}lll`,
              www: `${i}www`,
            },
            {
              id: `${i} - ${i} - ${i}`,
              name: `${i}wdddd`,
              size: `${i}size`,
              lll: `${i}lll`,
              www: `${i}www`,
            },
            {
              id: `${i} - ${i} - ${i}`,
              name: `${i}wdddd`,
              size: `${i}size`,
              lll: `${i}lll`,
              www: `${i}www`,
            },
            {
              id: `${i} - ${i} - ${i}`,
              name: `${i}wdddd`,
              size: `${i}size`,
              lll: `${i}lll`,
              www: `${i}www`,
            },
            {
              id: `${i} - ${i} - ${i}`,
              name: `${i}wdddd`,
              size: `${i}size`,
              lll: `${i}lll`,
              www: `${i}www`,
            },
            {
              id: `${i} - ${i} - ${i}`,
              name: `${i}wdddd`,
              size: `${i}size`,
              lll: `${i}lll`,
              www: `${i}www`,
            },

            {
              id: `${i} - ${i} - ${i}`,
              name: `${i}wdddd`,
              size: `${i}size`,
              lll: `${i}lll`,
              www: `${i}www`,
            },
            {
              id: `${i} - ${i} - ${i}`,
              name: `${i}wdddd`,
              size: `${i}size`,
              lll: `${i}lll`,
              www: `${i}www`,
            },
            {
              id: `${i} - ${i} - ${i}`,
              name: `${i}wdddd`,
              size: `${i}size`,
              lll: `${i}lll`,
              www: `${i}www`,
            },
            {
              id: `${i} - ${i} - ${i}`,
              name: `${i}wdddd`,
              size: `${i}size`,
              lll: `${i}lll`,
              www: `${i}www`,
            },
            {
              id: `${i} - ${i} - ${i}`,
              name: `${i}wdddd`,
              size: `${i}size`,
              lll: `${i}lll`,
              www: `${i}www`,
            },
          ],
        },
      ],
    });
  }
  return data;
}

const VirtualList: FC = () => {
  const [data, setData] = useState(getData(500));

  const columns = [
    {
      title: '??????',
      children: [
        {
          key: 'id',
          dataIndex: 'id',
          title: 'ID',
          width: 200,
        },
        {
          key: 'name',
          dataIndex: 'name',
          title: '??????',
          width: 200,
        },
        {
          key: 'size',
          dataIndex: 'size',
          title: '??????',
          width: 200,
        },
      ],
    },
    {
      key: 'lll',
      dataIndex: 'lll',
      title: '?????????',
      width: 200,
    },
    {
      key: 'www',
      dataIndex: 'www',
      title: '?????????',
      width: 200,
    },
    {
      key: 'yyy',
      dataIndex: 'yyy',
      title: '?????????',
      width: 200,
    },
    {
      key: 'jjj',
      dataIndex: 'jjj',
      title: '?????????',
      width: 200,
    },
    {
      key: 'hhh',
      dataIndex: 'hhh',
      title: '?????????',
      width: 200,
    },
    {
      key: 'iii',
      dataIndex: 'iii',
      title: '?????????',
      width: 200,
    },
    {
      key: 'ttt',
      dataIndex: 'ttt',
      title: '?????????',
      width: 200,
    },
    {
      key: 'rrr',
      dataIndex: 'rrr',
      title: '?????????',
      width: 200,
    },
    {
      key: 'ppp',
      dataIndex: 'ppp',
      title: '?????????',
      width: 200,
    },
    {
      key: 'ooo',
      dataIndex: 'ooo',
      title: '?????????',
      width: 200,
    },
    {
      key: 'kkk',
      dataIndex: 'kkk',
      title: '?????????',
      width: 200,
    },
    {
      key: 'eee',
      dataIndex: 'eee',
      title: '?????????',
      width: 200,
    },
  ];

  return (
    <PageContainer>
      <VirtualTable  columns={columns} dataSource={data} expandRowByClick />
    </PageContainer>
  );
};

export default VirtualList;
