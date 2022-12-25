let input = document.querySelector('#input'),
    addBtn = document.querySelector('#addBtn'),
    list = document.querySelector('#list'),
    list_el = document.querySelector('#list_el');

addBtn.addEventListener('click', addNewTask)
function addNewTask () {
    const newTask = document.createElement('div')
    newTask.classList.add('list_el')
    newTask.innerHTML = `<div class="list_el-title">${input.value}</div>`


    const deleteBTN = document.createElement('button');
    deleteBTN.classList.add('del', 'list_el-btns');
    deleteBTN.innerHTML = '<img class="list_el-btns-img" src="/img/delete.png" alt="delete">'

    const editBTN = document.createElement('button')
    editBTN.classList.add('edit', 'list_el-btns')
    editBTN.innerHTML = '<img class="list_el-btns-img" src="/img/edit.png" alt="edit">'

    const save = document.createElement('button');
    save.innerHTML = 'Cохранить';
    save.classList.add('button-save')

    const newTodoText = document.createElement('input')
    newTodoText.classList.add('input-edit-text')

    const btns = document.createElement('div')
    btns.classList.add('li_el_btns')

    const isCheck = document.createElement('input')
    isCheck.type = 'checkbox'
    isCheck.classList.add('checkbox')
    

    list.append(newTask);
    newTask.append(btns)
    btns.append(isCheck)
    btns.append(editBTN)
    btns.append(deleteBTN)
    deleteBTN.addEventListener('click', deleteTask)
    editBTN.addEventListener('click', editTask)
    isCheck.addEventListener('click', isCheckFunc)

    function isCheckFunc() {
        newTask.classList.toggle('check')
    }

    function editTask () {
    
        save.addEventListener('click', saveEditTODO)
        function saveEditTODO() {
            niv = newTodoText.value
            newTask.innerHTML = `<div class="list_el-title">${niv}</div>`
            newTask.append(btns)
            btns.append(editBTN)
            btns.append(deleteBTN)
        }
        const modalForEdit = document.createElement('div')
        modalForEdit.classList.add('modal-for-edit')
        modalForEdit.append(newTodoText)
        modalForEdit.append(save)
        newTask.append(modalForEdit)
        console.log(newTask);
    }
    
    function deleteTask() {
        btns.parentNode.remove()
    }
    input.value = ''
}



// `<div id="list_el" class="list_el">
//     <div class="list_el-title">${input.value}</div>
//         <div class="list_el-btns">
//             <button><img class=" " src="/img/check.png" alt="check"></button>
//             <button><img class="list_el-btns-img" src="/img/edit.png" alt="edit"></button>
//             <button onclick="deleteTask()"><img class="list_el-btns-img" src="/img/delete.png" alt="delete"></button>
//         </div>
//     </div>`