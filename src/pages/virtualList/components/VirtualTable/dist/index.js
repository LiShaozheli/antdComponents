"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var rc_virtual_list_1 = require("rc-virtual-list");
var VirtualTable = function (props) {
    var columns = props.columns, dataSource = props.dataSource, defaultExpandedRowKeys = props.defaultExpandedRowKeys, _a = props.childrenColumnName, childrenColumnName = _a === void 0 ? 'children' : _a, _b = props.expandRowByClick, expandRowByClick = _b === void 0 ? false : _b, _c = props.indentSize, indentSize = _c === void 0 ? 15 : _c;
    var _d = react_1.useState(defaultExpandedRowKeys || []), expandedRowKeys = _d[0], setExpandedRowKeys = _d[1];
    var _e = react_1.useState(columns), originalColumns = _e[0], setOriginalColumns = _e[1];
    var isOrNotExpend = function (id, expendArray) {
        if (expendArray.includes(id)) {
            var newExpendArray_1 = expendArray.filter(function (item) { return item !== id; });
            setExpandedRowKeys(newExpendArray_1);
            return;
        }
        var newExpendArray = __spreadArrays(expendArray);
        newExpendArray.push(id);
        setExpandedRowKeys(newExpendArray);
    };
    var expandColum = {
        width: 50,
        render: function (value, record, index, expanded, Layer) {
            return (react_1["default"].createElement("div", { onClick: function () { return isOrNotExpend(record.id, expanded); }, style: { paddingLeft: Layer * indentSize } }, record.children && (expanded.includes(record.id) ? '∨' : '＞')));
        }
    };
    react_1.useEffect(function () {
        if (expandRowByClick) {
            var Columns = __spreadArrays([expandColum], originalColumns);
            setOriginalColumns(Columns);
        }
    }, []);
    var renderColums = function (oldColumns) {
        return (react_1["default"].createElement("tr", null, oldColumns.map(function (column) {
            var _a, _b;
            return (react_1["default"].createElement("td", { key: column.key },
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("td", { colSpan: (_a = column.children) === null || _a === void 0 ? void 0 : _a.length, style: {
                            borderBottom: '1px solid #f0f0f0',
                            borderRight: '1px solid #f0f0f0',
                            width: column.width
                        } }, column.title)),
                ((_b = column.children) === null || _b === void 0 ? void 0 : _b.length) > 0 && renderColums(column.children)));
        })));
    };
    var getCol = function (oldCcolumns) {
        var cols = [];
        oldCcolumns.forEach(function (column) {
            var _a;
            ((_a = column.children) === null || _a === void 0 ? void 0 : _a.length) > 0
                ? (cols = __spreadArrays(cols, getCol(column.children)))
                : cols.push(column);
        });
        return cols;
    };
    var renderRow = function (dataItem, newColumns, index, expanded, Layer) {
        var _a;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("tr", null, newColumns.map(function (column) {
                var _a;
                return (react_1["default"].createElement("td", { key: column.key, style: { width: column.width } }, column.render
                    ? column.render((_a = dataItem[column.dataIndex]) !== null && _a !== void 0 ? _a : dataItem, dataItem, index, expanded, Layer)
                    : dataItem[column.dataIndex]));
            })),
            expanded.includes(dataItem.id) &&
                ((_a = dataItem[childrenColumnName]) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
                dataItem[childrenColumnName].map(function (item, ind) {
                    return renderRow(item, newColumns, ind, expanded, Layer + 1);
                })));
    };
    var newColumn = getCol(originalColumns);
    return (react_1["default"].createElement("div", { style: { overflowX: 'scroll' } },
        renderColums(originalColumns),
        react_1["default"].createElement(rc_virtual_list_1["default"]
        // ref={listRef}
        , { 
            // ref={listRef}
            data: dataSource, height: 0, itemHeight: 54, itemKey: "id", style: {
                border: '1px solid block'
            } }, function (item, index) { return renderRow(item, newColumn, index, expandedRowKeys, 0); })));
};
exports["default"] = VirtualTable;
