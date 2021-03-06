/// <reference path="../jqwidgets.d.ts" />
import { AfterViewInit, AfterViewChecked, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxDataTableComponent implements OnChanges, AfterViewInit, AfterViewChecked {
    attrAltRows: boolean;
    attrAutoRowHeight: boolean;
    attrAggregatesHeight: number;
    attrAutoShowLoadElement: boolean;
    attrColumnsHeight: number;
    attrColumns: Array<jqwidgets.DataTableColumns>;
    attrColumnGroups: Array<jqwidgets.DataTableColumnGroups>;
    attrColumnsResize: boolean;
    attrColumnsReorder: boolean;
    attrDisabled: boolean;
    attrEditable: boolean;
    attrEditSettings: jqwidgets.DataTableEditSettings;
    attrExportSettings: jqwidgets.DataTableExportSettings;
    attrEnableHover: boolean;
    attrEnableBrowserSelection: boolean;
    attrFilterable: boolean;
    attrFilterHeight: number;
    attrFilterMode: any;
    attrGroups: Array<any>;
    attrGroupsRenderer: (value: any, rowData?: any, level?: number) => string;
    attrInitRowDetails: (id: number, row?: any, element?: any, rowInfo?: any) => void;
    attrIncrementalSearch: boolean;
    attrLocalization: any;
    attrPagerHeight: number;
    attrPageSize: number;
    attrPageSizeOptions: Array<string | number>;
    attrPageable: boolean;
    attrPagerPosition: any;
    attrPagerMode: any;
    attrPagerButtonsCount: number;
    attrPagerRenderer: () => any;
    attrReady: () => void;
    attrRowDetails: boolean;
    attrRenderToolbar: (toolbar: any) => void;
    attrRenderStatusBar: (statusbar: any) => void;
    attrRendering: () => void;
    attrRendered: () => void;
    attrRtl: boolean;
    attrSource: any;
    attrSortable: boolean;
    attrShowAggregates: boolean;
    attrShowToolbar: boolean;
    attrShowStatusbar: boolean;
    attrStatusBarHeight: number;
    attrScrollBarSize: number | string;
    attrSelectionMode: any;
    attrServerProcessing: boolean;
    attrShowHeader: boolean;
    attrTheme: string;
    attrToolbarHeight: number;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxDataTable;
    content: String;
    container: HTMLDivElement;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    altRows(arg?: boolean): any;
    autoRowHeight(arg?: boolean): any;
    aggregatesHeight(arg?: number): any;
    autoShowLoadElement(arg?: boolean): any;
    columnsHeight(arg?: number): any;
    columns(arg?: Array<jqwidgets.DataTableColumns>): any;
    columnGroups(arg?: Array<jqwidgets.DataTableColumnGroups>): any;
    columnsResize(arg?: boolean): any;
    columnsReorder(arg?: boolean): any;
    disabled(arg?: boolean): any;
    editable(arg?: boolean): any;
    editSettings(arg?: jqwidgets.DataTableEditSettings): any;
    exportSettings(arg?: jqwidgets.DataTableExportSettings): any;
    enableHover(arg?: boolean): any;
    enableBrowserSelection(arg?: boolean): any;
    filterable(arg?: boolean): any;
    filterHeight(arg?: number): any;
    filterMode(arg?: string): any;
    groups(arg?: Array<any>): any;
    groupsRenderer(arg?: (value: any, rowData?: any, level?: number) => string): any;
    height(arg?: number | string): any;
    initRowDetails(arg?: (id: number, row?: any, element?: any, rowInfo?: any) => void): any;
    incrementalSearch(arg?: boolean): any;
    localization(arg?: any): any;
    pagerHeight(arg?: number): any;
    pageSize(arg?: number): any;
    pageSizeOptions(arg?: Array<string | number>): any;
    pageable(arg?: boolean): any;
    pagerPosition(arg?: string): any;
    pagerMode(arg?: string): any;
    pagerButtonsCount(arg?: number): any;
    pagerRenderer(arg?: () => any): any;
    ready(arg?: () => void): any;
    rowDetails(arg?: boolean): any;
    renderToolbar(arg?: (toolbar: any) => void): any;
    renderStatusBar(arg?: (statusbar: any) => void): any;
    rendering(arg?: () => void): any;
    rendered(arg?: () => void): any;
    rtl(arg?: boolean): any;
    source(arg?: any): any;
    sortable(arg?: boolean): any;
    showAggregates(arg?: boolean): any;
    showToolbar(arg?: boolean): any;
    showStatusbar(arg?: boolean): any;
    statusBarHeight(arg?: number): any;
    scrollBarSize(arg?: number | string): any;
    selectionMode(arg?: string): any;
    serverProcessing(arg?: boolean): any;
    showHeader(arg?: boolean): any;
    theme(arg?: string): any;
    toolbarHeight(arg?: number): any;
    width(arg?: string | number): any;
    addRow(rowIndex: number, rowData: any, rowPosition: any): void;
    addFilter(dataField: string, filerGroup: any): void;
    applyFilters(): void;
    beginUpdate(): void;
    beginRowEdit(rowIndex: number): void;
    beginCellEdit(rowIndex: number, dataField: string): void;
    clearSelection(): void;
    clearFilters(): void;
    clear(): void;
    destroy(): void;
    deleteRow(rowIndex: number): void;
    endUpdate(): void;
    ensureRowVisible(rowIndex: number): void;
    endRowEdit(rowIndex: number, cancelChanges: boolean): void;
    endCellEdit(rowIndex: number, dataField: string): void;
    exportData(exportDataType: any): any;
    focus(): void;
    getColumnProperty(dataField: string, propertyName: string): any;
    goToPage(pageIndex: number): void;
    goToPrevPage(): void;
    goToNextPage(): void;
    getSelection(): Array<any>;
    getRows(): Array<any>;
    getView(): Array<any>;
    getCellValue(rowIndex: number, dataField: string): any;
    hideColumn(dataField: string): void;
    hideDetails(rowIndex: boolean): void;
    isBindingCompleted(): boolean;
    lockRow(rowIndex: number): void;
    refresh(): void;
    render(): void;
    removeFilter(dataField: string): void;
    scrollOffset(top: number, left: number): void;
    setColumnProperty(dataField: string, propertyName: string, propertyValue: any): void;
    showColumn(dataField: string): void;
    selectRow(rowIndex: number): void;
    showDetails(rowIndex: number): void;
    setCellValue(rowIndex: number, dataField: string, value: any): void;
    sortBy(dataField: string, sortOrder: any): void;
    updating(): boolean;
    updateBoundData(): void;
    unselectRow(rowIndex: number): void;
    updateRow(rowIndex: number, rowData: any): void;
    unlockRow(rowIndex: number): void;
    onBindingComplete: EventEmitter<{}>;
    onCellBeginEdit: EventEmitter<{}>;
    onCellEndEdit: EventEmitter<{}>;
    onCellValueChanged: EventEmitter<{}>;
    onColumnResized: EventEmitter<{}>;
    onColumnReordered: EventEmitter<{}>;
    onSort: EventEmitter<{}>;
    onFilter: EventEmitter<{}>;
    onPageChanged: EventEmitter<{}>;
    onPageSizeChanged: EventEmitter<{}>;
    onRowClick: EventEmitter<{}>;
    onRowDoubleClick: EventEmitter<{}>;
    onRowSelect: EventEmitter<{}>;
    onRowUnselect: EventEmitter<{}>;
    onRowBeginEdit: EventEmitter<{}>;
    onRowEndEdit: EventEmitter<{}>;
    onRowExpand: EventEmitter<{}>;
    onRowCollapse: EventEmitter<{}>;
    __wireEvents__(): void;
}
