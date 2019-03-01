
$(function () {
    //1.初始化Table
    var oTable = new TableInit();
    oTable.Init();

});

// 物料质量
function quality(value, row, index) {
    if (value === '货损') {
        return '<span class="pt-warn">'+value+'</span>'
    }
    if (value === '箱损') {
        return '<span class="pt-warn">'+value+'</span>'
    }
    if (value === '正常品') {
        return '<span class="pt-success">'+value+'</span>'
    }
    return value
}
//删除操作
function operateFormatter(value, row, index) {
    return [
        '<button type="button" class="RoleOfdelete btn btn-xs btn-default btn-link" onclick="deleteItem('+index+')">删除</button>',
    ].join('');
}
var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#add_godow_list').bootstrapTable({
            //添加url
            method: 'get',                      //请求方式（*）
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            search: false,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: false,
            showRefresh: false,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle:false,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            showColumns:false,
            columns: [

                [
                    {
                    field: 'index',
                    title: '序号'
                },{
                    field: 'good_code',
                    title: '物料编码',
                },{
                    field: 'good_name',
                    title: '物料名称'
                },{
                    field: 'good_en_name',
                    title: '英文名称'
                },{
                    field: 'num',
                    title: '数量'
                },{
                    field: 'weight',
                    title: '重量(kg)',
                },{
                    field: 'volume',
                    title: '体积(m³)',
                },{
                    field: 'good_quality',
                    title: '物料质量',
                    formatter:quality
                },{
                    field: 'deposit_company',
                    title: '存放单位',
                },{
                    field: 'plant_name',
                    title: '目标仓库',
                },{
                    field: 'area_name',
                    title: '目标库区',
                },{
                    field: 'loc_name',
                    title: '目标库位',
                },{
                    field: 'id',
                    title: '批次',
                },
                ]
            ],
        });
    };

    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
        };
        return temp;
    };
    return oTableInit;
};
//删除
function deleteItem(e) {
    alert('删除操作，序号' + e)
}

$.fn.bootstrapTable.locales['zh-CN'] = {
    formatLoadingMessage: function () {
        return '正在努力地加载数据中，请稍候……';
    },
    formatRecordsPerPage: function (pageNumber) {
        return '每页显示 ' + pageNumber + ' 条记录';
    },
    formatShowingRows: function (pageFrom, pageTo, totalRows) {
        return '显示第 ' + pageFrom + ' 到第 ' + pageTo + ' 条记录，总共 ' + totalRows + ' 条记录';
    },
    formatSearch: function () {
        return '搜索';
    },
    formatNoMatches: function () {
        return '没有找到匹配的记录';
    },
    formatPaginationSwitch: function () {
        return '隐藏/显示分页';
    },
    formatRefresh: function () {
        return '刷新';
    },
    formatToggle: function () {
        return '切换';
    },
    formatColumns: function () {
        return '列';
    },
    formatExport: function () {
        return '导出数据';
    },
    formatClearFilters: function () {
        return '清空过滤';
    }
};

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);