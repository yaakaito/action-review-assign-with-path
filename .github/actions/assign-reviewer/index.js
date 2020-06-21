const core = require('@actions/core')
const github = require('@actions/github')

try {
    const team = core.getInput('team')
    console.log(`team = ${team}`)
    const context = github.context
    console.log(`context = ${JSON.stringify(context, null, 2)}`)
}
catch(e) {
    core.setFailed(e.message)
}
