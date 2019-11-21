const jsonServer = require('json-server');
const middlewares = jsonServer.defaults();
const path = require('path')


const conferenceServer = jsonServer.create();
const conferenceRouter = jsonServer.router(path.join(__dirname, 'conferences.json'));

conferenceServer.use(middlewares);
conferenceServer.use('/api', conferenceRouter);
conferenceServer.listen(5000, () => {
    console.log('Conference Server is running at port 5000');
});

const sessionServer = jsonServer.create();
const sessionRouter = jsonServer.router(path.join(__dirname, 'sessions.json'));

sessionServer.use(middlewares);
sessionServer.use('/api', sessionRouter);
sessionServer.listen(5001, () => {
    console.log('Session Server is running at port 5001');
});
