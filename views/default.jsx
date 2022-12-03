const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Home</title>

                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>

                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>


                <nav>
                    <ul>
                        <li>
                            <a href="/"> Home </a>
                        </li>
                        <li>
                            <a href="places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
