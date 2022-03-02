const React = require('react')

class Show extends React.Component {
    render(){
        const log = this.props.logs;
        return(
            <div>
                <h1>Captain's Log: {log.createdAt.toLocaleDateString()}</h1>
                <h2>Entry: {log.name}</h2>
                <h3>{log.entry}</h3>
                <p>{log.shipIsBroken? 'The ship is in dire need of repairs' : 'The ship is not in need of repairs at this time'}</p>
                <a href={'/logs'}>Back to Logs</a>
            </div>
        )
    }
}

module.exports = Show;