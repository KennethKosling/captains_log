const React = require('react')

class Show extends React.Component {
    render(){
        const log = this.props.logs;
        return(
            <div>
                <h1>Showing Captain's Log: {log.name}</h1>
                <h3>Entry Date: {log.createdAt.toLocaleDateString()}</h3>
                <p>{log.entry}</p>
                <h4>{log.shipIsBroken? 'The ship is in dire need of repairs' : 'The ship is not in need of repairs at this time'}</h4>
                <a href={'/logs'}>Back to Logs</a>
            </div>
        )
    }
}

module.exports = Show;