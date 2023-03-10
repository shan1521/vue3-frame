module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'build', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
                'feature', // 新功能（feature）
                'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
                'fix', // 修补bug
                'upd', // 更新某功能
                'ui', // 更新 ui
                'docs', // 文档（documentation）
                'style', // 格式（不影响代码运行的变动）
                'perf', // 性能优化
                'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
                'chore', // 构建过程或辅助工具的变动
                'merge', // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
                'revert' // 撤销 commit，回滚到上一个版本
            ]
        ],
        // <type> 格式 小写
        'type-case': [2, 'always', 'lower-case'],
        // <scope> 可以为空
        'scope-empty': [0, 'never'],
        // <scope> 范围格式
        'scope-case': [0],
        // <subject> 主要 message 可以为空
        'subject-empty': [0, 'never'],
        // <subject> 以什么为结束标志，禁用
        'subject-full-stop': [0, 'never'],
        // <subject> 格式，禁用
        'subject-case': [0, 'never'],
        // <body> 以空行开头
        'body-leading-blank': [1, 'always'],
        'header-max-length': [0, 'always', 72]
    }
};
