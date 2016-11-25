function callRestApi(TypeRequest, Async, ApiUrl, ApiController, DataObject, TypeReturn, funcSuccess, funcFail, Params) {
  debugger;
    $.ajax({
        async: ((Async === true) ? true : false),
        type: TypeRequest,
        url:  ApiUrl + "/" + ApiController,
        data : DataObject,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success:   function(json) {
                        if(funcSuccess) funcSuccess(callBack(json, TypeReturn), Params);
                        else return callBack(json, TypeReturn);
                    },
        error:      function(xhr, status) {
                        if(funcFail) funcFail(ex, Params)
                    },
       complete : function(xhr, status) {
                        alert('Petición realizada');
                    }
    });
}

function callBack(json, TypeReturn){
    var retval
    if( $(json).find(TypeReturn).children().length == 0){retval = $(json).find(TypeReturn).text(); }
    else{ retval = json; }
    return retval;
}
