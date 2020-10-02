let Todos = [
    
];
const addItem = (todo) => {
    Todos.push(todo);
};
const deleteItem = (id) => {
    const i = Todos.findIndex((value) => value.id === Number(id));
    Todos.splice(i, 1);
};
const compliteItem = (id) => {
    const i = Todos.findIndex((value) => value.id === Number(id));
    Todos[i].complited = !Todos[i].complited;
};
export {Todos, deleteItem, addItem, compliteItem};