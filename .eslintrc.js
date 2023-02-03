module.exports = {
    // 环境 浏览器 最新 es 语法，node 环境
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    /**
     * 扩展的 eslint 规范语法，可以被继承的规则，string[] 格式：每个配置继承它前面的配置
     * eslint-plugin-vue: plugin:vue/vue3-strongly-recommended
     * eslint-config-airbnb-base: airbnb-base
     * eslint-config-prettier: prettier
     * eslint-config- 前缀可以省略
     */
    extends: ['plugin:vue/vue3-strongly-recommended', 'airbnb-base', 'prettier'],
    // ESLint 会对代码进行校验，parser 的作用是将代码转换为 ESTree (AST)，ESLint 会对 ESTree 进行校验
    parser: 'vue-eslint-parser',
    // 解析器配置项
    parserOptions: {
        // es 的版本号，或者年份都可以
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        // 源码类型 默认是 script，es 模块使用 module
        sourceType: 'module',
        // 额外的语言类型
        ecmaFeatures: {
            jsx: true,
            tsx: true
        }
    },
    /**
     * eslint-plugin- 前缀可以省略
     * vue 官方提供 eslint-plugin-vue 插件，
     * 它提供了 parser 和 rules，parser 为 vue-eslint-parser 放在外层的 parser 字段中，rules 放在 extends 字段中，选择合适的规则
     */
    plugins: ['vue', '@typescript-eslint'],
    settings: {
        // 设置项目中的别名
        'import/resolver': {
            alias: {
                map: [['@', './src']]
            }
        },
        // 允许的扩展名
        'import/extensions': ['.js', '.ts', '.jsx', '.tsx', '.mjs']
    },
    // 自定义规则，覆盖上边 extends 继承的第三方库的规则，可灵活定义
    rules: {
        'import/no-extraneous-dependencies': 0,
        'no-param-reassign': 0,
        'vue/multi-word-component-names': 0,
        'vue/attribute-hyphenation': 0,
        'vue/v-on-event-hyphenation': 0
    }
};
