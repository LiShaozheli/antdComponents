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
      title: '分组',
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
          title: '名字',
          width: 200,
        },
        {
          key: 'size',
          dataIndex: 'size',
          title: '大小',
          width: 200,
        },
      ],
    },
    {
      key: 'lll',
      dataIndex: 'lll',
      title: '啦啦啦',
      width: 200,
    },
    {
      key: 'www',
      dataIndex: 'www',
      title: '哇哇哇',
      width: 200,
    },
    {
      key: 'yyy',
      dataIndex: 'yyy',
      title: '有有有',
      width: 200,
    },
    {
      key: 'jjj',
      dataIndex: 'jjj',
      title: '急急急',
      width: 200,
    },
    {
      key: 'hhh',
      dataIndex: 'hhh',
      title: '哈哈哈',
      width: 200,
    },
    {
      key: 'iii',
      dataIndex: 'iii',
      title: '哎哎哎',
      width: 200,
    },
    {
      key: 'ttt',
      dataIndex: 'ttt',
      title: '突突突',
      width: 200,
    },
    {
      key: 'rrr',
      dataIndex: 'rrr',
      title: '热热热',
      width: 200,
    },
    {
      key: 'ppp',
      dataIndex: 'ppp',
      title: '呃呃呃',
      width: 200,
    },
    {
      key: 'ooo',
      dataIndex: 'ooo',
      title: '突突突',
      width: 200,
    },
    {
      key: 'kkk',
      dataIndex: 'kkk',
      title: '热热热',
      width: 200,
    },
    {
      key: 'eee',
      dataIndex: 'eee',
      title: '呃呃呃',
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
