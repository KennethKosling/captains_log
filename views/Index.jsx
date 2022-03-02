const React = require('react')

class Index extends React.Component{
    render(){
        const caplogs = this.props.logs
        return(
            <div>
                <h1>Welcome, Captain.</h1>
                <ul>
                {
                    caplogs.map((log) => {
                        return (
                            <li key={`${log._id}`}>
                                <a href={`/logs/${log._id}`}>{log.name}</a><br />
                                <a href={`/logs/${log._id}/edit`}>Edit</a>
                                <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                                    <input type='submit' value={`Delete`} />
                                </form>
                            </li>
                        )
                    })
                }
                </ul>
                <nav>
                    <a href='/logs/new'>Go to the New Page</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index