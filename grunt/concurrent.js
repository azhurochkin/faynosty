module.exports = {

    // Настройки задач
    options: {
        limit: 3
    },

    // Задачи для разработки
    devFirst: [
        'clean',
        'jshint'
    ],
    devSecond: [
        'sass:dev',
        'uglify'
    ],

    // Задачи для продакшна
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        //'sass:prod',
        //'uglify',
        'copy'
    ],

    // Image tasks
    imgFirst: [
        'imagemin'
    ]
};