import conferenceResolvers from './conferenceResolvers';
import sessionResolvers from './sessionResolvers';

process.on('SIGINT', () => {
    process.exit();
});

export default [conferenceResolvers, sessionResolvers];
