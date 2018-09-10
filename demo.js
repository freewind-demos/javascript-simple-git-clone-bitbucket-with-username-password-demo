const workingDirPath = './local-repo'
const simpleGit = require('simple-git')(workingDirPath)

const username = process.argv[2]
const password = process.argv[3]
console.log(`username: ${username}`)
console.log(`password: ${password}`)

if (username && password) {
    const gitUrl = `https://${username}:${password}@bitbucket.org/Freewind/java-hello-world-demo.git`

    simpleGit.clone(gitUrl, 'demo-project')
        .exec(function () {
            console.log('cloned to: local-repo/demo-project')
        })
}

