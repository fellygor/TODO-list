
//our array
    let todos = [{
        id: 'id1',
        title: 'Wake up',
        dueDate: '2022-10-04'
     },
     {
        id: 'id2',
        title: 'Pray',
        dueDate: '2022-10-11'
     },
     {
        id: 'id3',
        title: 'Wash Utensils',
        dueDate: '2022-10-15'
     }];
      

    displayTodo();

    function addTodo(){
        const textbox = document.getElementById('todo-title');
        const title = textbox.value;

        const datePicker = document.getElementById('date-picker');
        const dueDate = datePicker.value;

        const id = '' + new Date().getTime();

        todos.push({
            id: id,
            title: title,
            dueDate: dueDate
        });

        displayTodo();

    }

    //function to delete todo
    function deleteTodo(event){
        const deleteButton = event.target;
        const idToDelete = deleteButton.id;
        //filter method works similarly to forEach function
        todos = todos.filter(function (todo){
            //if id of the todo matches idToDelete, return false
            //otherwise return true

            if (todo.id === idToDelete){
                return false;
            }
            else{
                return true;
            }
        });
        displayTodo();

    }

    
    function displayTodo(){
        //Reset our list 
        document.getElementById('todo-list').innerHTML = '';

        //display our list
        todos.forEach(function (todo){
        let element = document.createElement('div');
        element.innerText = todo.title + " " + todo.dueDate +" ";

        //creating a delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText ='Delete';
        element.appendChild(deleteButton);
        //adding styles to the button with js
        deleteButton.style='margin:12px';
        deleteButton.onclick= deleteTodo;
        deleteButton.id = todo.id;

        let todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    });
}
