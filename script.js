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

var Movie = React.createClass({
    propTypes: {
        data: React.PropTypes.object.isRequired,

    },
    render: function () {
        return React.createElement('li', {},
            React.createElement('h2', {}, this.props.data.title),
            React.createElement('p', {}, this.props.data.desc),
            React.createElement('img', {
                src: this.props.data.pic
            }))
    }
});

var moviesElements = movies.map(function (movie) {
    return React.createElement(Movie, {
        key: movie.id,
        data: movie
    });
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));