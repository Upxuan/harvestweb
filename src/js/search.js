


//搜索：成果类型
function judgeType(data, types) {   
    let arr = [];
    // console.log(Object.keys(data).length);
    for(let i=0; i<data.length; i++) {
        for(let j=0; j<types.length; j++) {
            if(data[i].type == types[j]) {
                arr.push(data[i]);
            }
        }
    }
    return arr;
}

//搜索：标题
function judgeTitle(data, title) {   
    let arr = [];
    for(let i=0; i<data.length; i++) {
        if(data[i].title.search(title) != -1) {
            arr.push(data[i]);
        }
    }
    return arr;
}

//搜索：第一作者
function judgeFirstAuthor(data, firstAuthor) {   
    let arr = [];
    for(let i=0; i<data.length; i++) {
        for(let j=0; j<data[i].params.length; j++) {
            if(data[i].params[j].key == "第一作者" && data[i].params[j].value == firstAuthor) {
                arr.push(data[i]);
                break;
            }
        }
    }
    return arr;
}

//搜索：毕业条件归属者
function judgeBelongName(data, belongName) {   
    let arr = [];
    for(let i=0; i<data.length; i++) {
        for(let j=0; j<data[i].params.length; j++) {
            if(data[i].params[j].key == "毕业条件归属者" && data[i].params[j].value == belongName) {
                arr.push(data[i]);
                break;
            }
        }
    }
    return arr;
}

//搜索：提交审核者
function judgeSubmitName(data, submitName) {   
    let arr = [];
    for(let i=0; i<data.length; i++) {
        for(let j=0; j<data[i].params.length; j++) {
            if(data[i].params[j].key == "提交审核者" && data[i].params[j].value == submitName) {
                arr.push(data[i]);
                break;
            }
        }
    }
    return arr;
}

//搜索：审核人
function judgeReviseName(data, reviseName) {   
    let arr = [];
    // console.log(data);
    for(let i=0; i<data.length; i++) {
        for(let j=0; j<data[i].params.length; j++) {
            // console.log(data[i].params[j].key);
            // console.log(data[i].params[j].value);
            if(data[i].params[j].key == "审核人" && data[i].params[j].value == reviseName) {
                arr.push(data[i]);
                break;
            }
        }
    }
    return arr;
}
//搜索：作者
function judgeAuthors(data, authors) {
    let arr = [];
    for(let i=0; i<data.length; i++) {
        if(data[i].authors.search(authors) != -1) {
            arr.push(data[i]);
        }
    }
    return arr;
}

function HandeleStr(str) {
    if(str == null || typeof(str) == undefined || str.replace(/\s*/g, "") == "")
        return false;
    return str.replace(/\s*/g, "");
}

// function SearchHarvest(data, conds) {
//     // console.log(data);
//     // console.log(conds);
//     var result = data;
//     if(conds.types.length > 0) 
//         result = judgeType(result, conds.types);
//     if(HandeleStr(conds.title) != false) 
//         result = judgeTitle(result, conds.title);
//     if(HandeleStr(conds.firstAuthor) != false) 
//         result = judgeFirstAuthor(result, conds.firstAuthor);
//     if(HandeleStr(conds.belongName) != false) 
//         result = judgeBelongName(result, conds.belongName);
//     if(HandeleStr(conds.submitName) != false) 
//         result = judgeSubmitName(result, conds.submitName);
//     if(HandeleStr(conds.reviseName) != false) 
//         result = judgeReviseName(result, conds.reviseName);
//     return result;
// }

function searchHarvestDemo(data, cond) {
    // console.log(data);
    // console.log(cond);
    var key = cond.key
    var value = HandeleStr(cond.value);
    var result = data;
    
    if(value != false){
        // console.log(1)
        // console.log(value)
        switch(key) {
            case 1:
                result = judgeTitle(result, value);
                break;
            case 2: 
                result = judgeFirstAuthor(result, value);
                break;
            case 3: 
                result = judgeBelongName(result, value);
                break;
            case 4: 
                result = judgeSubmitName(result, value);
                break;
            case 5: 
                result = judgeReviseName(result, value);
                break;
            case 6: 
                result = judgeAuthors(result, value);
                break;
        }
    }
    return result;
}

function HandlePrefix(data, conds) {
    var result = data;
    if(conds.types.length > 0) {
        result = judgeType(result, conds.types);
        for(let i=0; i<conds.searchs.length; i++) {
            result = searchHarvestDemo(result, conds.searchs[i]);
            // console.log(result);
        }
    }else {
        return [];
    }
    return result;
}



export {HandlePrefix}