class List {
    constructor(){
        this.__items = [];
    }

    add(item){
        // Only add non empty string items
        if(!!item.trim()) {
            this.__items.push(item);
        }
    }

    get items(){
        return this.__items;
    }
}

export default List;