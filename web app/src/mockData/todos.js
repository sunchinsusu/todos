const todos = [
    {
        id : '1',
        title : 'Todo 1',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 1
    },
    {
        id : '2',
        title : 'Todo 2',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 2
    },
    {
        id : '3',
        title : 'Todo 3',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 3
    },
    {
        id : '4',
        title : 'Todo 4',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 4
    },
    {
        id : '5',
        title : 'Todo 5',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 3
    },
    {
        id : '6',
        title : 'Todo 6',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 3
    },
    {
        id : '7',
        title : 'Todo 7',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 1
    },
    {
        id : '8',
        title : 'Todo 8',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 4
    },
    {
        id : '9',
        title : 'Todo 9',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 2
    },
    {
        id : '10',
        title : 'Todo 1',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 4
    },
    {
        id : '11',
        title : 'Todo 2',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 2
    },
    {
        id : '12',
        title : 'Todo 3',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 4
    },
    {
        id : '13',
        title : 'Todo 4',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 3
    },
    {
        id : '14',
        title : 'Todo 5',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 1
    },
    {
        id : '15',
        title : 'Todo 6',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 2
    },
    {
        id : '16',
        title : 'Todo 7',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 2
    },
    {
        id : '17',
        title : 'Todo 8',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 1
    },
    {
        id : '18',
        title : 'Todo 9',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 4
    },
    {
        id : '19',
        title : 'Todo 1',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 1
    },
    {
        id : '20',
        title : 'Todo 2',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 1
    },
    {
        id : '21',
        title : 'Todo 3',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 1
    },
    {
        id : '22',
        title : 'Todo 4',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 1
    },
    {
        id : '23',
        title : 'Todo 5',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 1
    },
    {
        id : '24',
        title : 'Todo 6',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 1
    },
    {
        id : '25',
        title : 'Todo 7',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 1
    },
    {
        id : '26',
        title : 'Todo 8',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 1
    },
    {
        id : '27',
        title : 'Todo 9',
        date : '2020-01-08',
        dueDate : '2020-30-08',
        des : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        status : 1
    }
]

export default todos;