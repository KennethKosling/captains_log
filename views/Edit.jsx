const React = require('react');

class Edit extends React.Component {
    render(){
        return(
            <div>
                <h1>Forget something, Captain?</h1>
                <form action={`/logs/${this.props.logs._id}?_method=PUT`} method='POST'>
                    Title:<br />
                    <input name="name" type="text" defaultValue={this.props.logs.name} />
                    <br />
                    Does the ship need repairs?:
                        {this.props.logs.shipIsBroken?
                            <input name="shipIsBroken" type="checkbox" defaultChecked />:
                            <input name="shipIsBroken" type="checkbox" />}
                    <br />
                    Entry:
                    <br />
                    <textarea name="entry" rows="5" cols="40" defaultValue={this.props.logs.entry}></textarea>
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </div>
        )
    }
}

module.exports = Edit