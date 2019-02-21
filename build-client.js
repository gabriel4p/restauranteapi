const args = [ 'install && npm run build && mv build ../public' ]
const opts = { stdio: 'inherit', cwd: 'client', shell: true }
require('child_process').spawn('npm', args, opts)