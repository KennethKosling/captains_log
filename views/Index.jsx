const React = require('react')

class Index extends React.Component{
    render(){
        const caplogs = this.props.logs
        return(
            <div>
                <ul>
                {
                    caplogs.map((log) => {
                        return (
                            <li key={`${log._id}`}>
                                <a href={`/logs/${log._id}`}>{log.name}</a>
                                <form action={`/logs/${log._id}/edit`}method='GET'>
                                    <input type='submit' value={`Edit ${log.name}`} />
                                </form>
                                <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                                    <input type='submit' value={`Delete ${log.name}`} />
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