const routes = require('next-routes')()

const prefix = ''
routes
  .add(home, '/home')
  .add(login, '/login')
  .add(teacher, '/teacher')
