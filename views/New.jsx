const React = require('react');

class New extends React.Component {
    render(){
        return(
        <div>
            <h1>How was your day, Captain?</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/logs" method="POST">
                Title:<br /><input name="name" type='text' /><br/>
                Date:<br /><input name="date" type="date" /><br/>
                Entry:<br />
                <textarea id="story" name="story" rows="5" cols="40" /><br/>
                In need of repairs: <input name="shipIsBroken" type="checkbox" /><br/>
                <input type="submit" value="Submit Entry" />
            </form>
            <nav>
                <a href="/logs">Back to the Index</a>
            </nav>
        </div>
        )
    }
}

module.exports = New;