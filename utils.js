function showList(list) {
    document.getElementById('list').textContent = list;
}
function addToList() {
    var newitem = document.getElementById('newitem').value;
    list.push(newitem);
    console.log("Added ", newitem, "to the list")
    showList(list);
}
function removeFromList(){
    var index = document.getElementById('removeitem').value - 1;
    if(index < list.length && index >= 0){
        list.splice(index, 1);
        showList(list);
    } else {
        console.log("There is no item in position:", index + 1);
    }
}