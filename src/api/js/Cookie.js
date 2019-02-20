function setCookie(name,value){
    var exp = new Date();
    exp.setTime(exp.getTime() + 12*60*60*1000);
    document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
}

function getCookie(name)
{
    var _name = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
    {
        var c = ca[i].trim();
        if (c.indexOf(_name)==0) return c.substring(_name.length,c.length);
    }
    return "";
}

function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var val=getCookie(name);
    if(val!=null)
        document.cookie= name + "="+val+";expires="+exp.toGMTString();
}

export {setCookie, getCookie, updateCookie, delCookie}
