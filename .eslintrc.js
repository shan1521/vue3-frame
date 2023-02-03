module.exports = {
    // ESLint 会对代码进行校验，parser 的作用是将代码转换为 ESTree (AST)，ESLint 会对 ESTree 进行校验
    parser: 'vue-eslint-parser',
    // 解析器配置项
    parserOptions: {
        // es 的版本号，或者年份都可以
        ecmaVersion: '2020',
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
     * 扩展的 eslint 规范语法，可以被继承的规则，string[] 格式：每个配置继承它前面的配置
     * eslint-plugin-vue: plugin:vue/vue3-strongly-recommended
     * eslint-config-airbnb-base: airbnb-base
     * eslint-config-prettier: prettier
     * eslint-config- 前缀可以省略
     */
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    /**
     * eslint-plugin- 前缀可以省略
     * vue 官方提供 eslint-plugin-vue 插件，
     * 它提供了 parser 和 rules，parser 为 vue-eslint-parser 放在外层的 parser 字段中，rules 放在 extends 字段中，选择合适的规则
     */
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'no-console': 'off',
        'no-unused-vars': 'off'

        // '@typescript-eslint/ban-ts-ignore': 'off',
        // '@typescript-eslint/explicit-function-return-type': 'off',
        // '@typescript-eslint/no-explicit-any': 'off',
        // '@typescript-eslint/no-var-requires': 'off',
        // '@typescript-eslint/no-empty-function': 'off',
        // '@typescript-eslint/no-use-before-define': 'off',
        // '@typescript-eslint/ban-ts-comment': 'off',
        // '@typescript-eslint/ban-types': 'off',
        // '@typescript-eslint/no-non-null-assertion': 'off',
        // '@typescript-eslint/explicit-module-boundary-types': 'off',
        // '@typescript-eslint/no-unused-vars': [
        //     'error',
        //     {
        //         argsIgnorePattern: '^h$',
        //         varsIgnorePattern: '^h$'
        //     }
        // ],
        // // 'import/no-extraneous-dependencies': 0,
        // 'vue/custom-event-name-casing': 'off',
        // 'no-use-before-define': 'off',
        // 'space-before-function-paren': 'off',
        // quotes: ['error', 'single'],
        // 'comma-dangle': ['error', 'never'],
        // 'vue/require-default-prop': 'off',
        // 'vue/no-template-shadow': 'off'
    }
};
