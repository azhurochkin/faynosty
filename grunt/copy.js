module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['libraries/**','styles/**','*.html','*.css','*.json','scripts/**','views/**','data/**'],
            dest: 'dist/'
        },
            {
                expand: true,
                cwd: 'node_modules/',
                src: ['angular/**','angular-route/**'],
                dest: 'dist/libraries/'
            }]
    }

};