var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        pic: 'https://ocdn.eu/pulscms-transforms/1/I43ktkpTURBXy8yMWY5NzM4Njc4MDdkYmI4N2RkYTFmODRhOTg4OTAyYi5qcGeTlQMAWs0CaM0BWpMFzQMUzQG8lQfZMi9wdWxzY21zL01EQV8vMjMzN2M5ZmQ2YjkzMWVlNmNiMGQyM2RjYmEyNThhOWQucG5nAMIA'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        pic: 'https://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
    },
    {
        id: 3,
        title: 'Opowieści z Narnii: lew, czarownica i stara szafa',
        desc: 'Film o przygodach dzieci w świecie w którym zwierzęta mówią',
        pic: 'https://1.fwcdn.pl/po/27/61/112761/7527057.3.jpg'

    }
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {
            src: movie.pic
        })
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));