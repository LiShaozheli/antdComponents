import React, { useEffect, useRef, useState } from 'react';
import type { ListRef } from 'rc-virtual-list';
import List from 'rc-virtual-list';
import type { ReactNode, FC } from 'react';
import type { ColumnProps } from 'antd/lib/table';
import ResizeObserver from 'rc-resize-observer';

interface VirtualTableProps<T> {
  columns?: ColumnProps<T>[];
  dataSource?: T[];
  defaultExpandedRowKeys?: string[];
  childrenColumnName?: string;
  expandRowByClick?: boolean;
  indentSize?: number;
}

const VirtualTable: FC<VirtualTableProps> = (props) => {
  const {
    columns,
    dataSource,
    defaultExpandedRowKeys,
    childrenColumnName = 'children',
    expandRowByClick = false,
    indentSize = 15,
  } = props;
  const [expandedRowKeys, setExpandedRowKeys] = useState(defaultExpandedRowKeys || []);
  const [originalColumns, setOriginalColumns] = useState(columns);
  const listRef = useRef<ListRef>();

  const isOrNotExpend = (id: string, expendArray: string[]) => {
    if (expendArray.includes(id)) {
      const newExpendArray = expendArray.filter((item) => item !== id);
      setExpandedRowKeys(newExpendArray);
      return;
    }
    const newExpendArray = [...expendArray];
    newExpendArray.push(id);
    setExpandedRowKeys(newExpendArray);
  };

  const expandColum = {
    width: 100,
    render: (value, record, index, expanded, Layer) => {
      return (
        <div
          onClick={() => isOrNotExpend(record.id, expanded)}
          style={{ paddingLeft: Layer * indentSize, width: 70 }}
        >
          {record.children ? (expanded.includes(record.id) ? '∨' : '＞') : '-'}
        </div>
      );
    },
  };

  useEffect(() => {
    if (expandRowByClick) {
      const Columns = [expandColum, ...originalColumns];
      setOriginalColumns(Columns);
    }
  }, []);

  const renderColums = (oldColumns) => {
    return (
      <div style={{ whiteSpace: 'nowrap', backgroundColor: '#fafafa',  }}>
        {oldColumns.map((column) => (
          <span key={column.key} style={{ display: 'inline-block', }}>
            <div
              style={{
                borderBottom: '1px solid #e8e8e8',
                borderRight: '1px solid #f0f0f0',
                width: column.width,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 54,
              }}
            >
              {column.title}
            </div>
            {column.children?.length > 0 && renderColums(column.children)}
          </span>
        ))}
      </div>
    );
  };

  const getCol = (oldCcolumns: any[]): any[] => {
    let cols: any[] = [];
    oldCcolumns.forEach((column) => {
      column.children?.length > 0
        ? (cols = [...cols, ...getCol(column.children)])
        : cols.push(column);
    });
    return cols;
  };

  const renderRow = (
    dataItem: object,
    newColumns,
    index: number,
    expanded: string[],
    Layer: number,
  ): ReactNode => {
    return (
      <>
        <div
          style={{
            whiteSpace: 'nowrap',
            borderBottom: '1px solid #e8e8e8',
          }}
        >
          {newColumns.map((column) => (
            <span key={column.key} style={{ display: 'inline-block' }}>
              <div
                style={{
                  width: column.width,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 54,
                }}
              >
                {column.render
                  ? column.render(
                      dataItem[column.dataIndex] ?? dataItem,
                      dataItem,
                      index,
                      expanded,
                      Layer,
                    )
                  : dataItem[column.dataIndex] || '-'}
              </div>
            </span>
          ))}
        </div>
        {expanded.includes(dataItem.id) &&
          dataItem[childrenColumnName]?.length > 0 &&
          dataItem[childrenColumnName].map((item, ind) =>
            renderRow(item, newColumns, ind, expanded, Layer + 1),
          )}
      </>
    );
  };

  const newColumn = getCol(originalColumns);

  return (
    <ResizeObserver
      onResize={({ width, height }) => {
        console.log(width, height);
      }}
    >
      <div style={{ overflowX: 'scroll' }}>
        <div style={{ minWidth: 'max-content', backgroundColor: 'white' }}>
          {renderColums(originalColumns)}
          <List
            ref={listRef}
            data={dataSource}
            height={0}
            itemHeight={54}
            itemKey="id"
          >
            {(item, index) => renderRow(item, newColumn, index, expandedRowKeys, 0)}
          </List>
        </div>
      </div>
    </ResizeObserver>
  );
};

export default VirtualTable;
