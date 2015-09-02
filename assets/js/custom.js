/**
 * Created by eldhose on 25/8/15.
 */
function show()
{
    //alert("test");
    var div=document.getElementById('hidden_menu');
    if (div.style.display !== 'none')
    {
        div.style.display = 'none';
        document.getElementById("button").innerHTML = "MENU";
    }
    else
    {
        div.style.display = 'block';
        document.getElementById("button").innerHTML = "X";
    }

}
function show_button()
{
    //alert("test");
    var div=document.getElementById('search_div');
    if (div.style.display !== 'none')
    {
        div.style.display = 'none';
        document.getElementById("search").innerHTML = "";
    }
    else
    {
        div.style.display = 'block';
        document.getElementById("search").innerHTML = "X";
    }

}