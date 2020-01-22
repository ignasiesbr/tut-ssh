module.exports = {
    apps: [{
      name: 'tut-ssh',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-3-14-144-254.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/minimal-tracker.pem',
        ref: 'origin/master',
        repo: 'git@github.com:ignasiesbr/tut-ssh.git',
        path: '/home/ubuntu/tut-ssh',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }