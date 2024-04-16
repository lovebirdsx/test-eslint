/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable spellcheck/spell-checker */

module.exports = {
    ignorePatterns: ['./Tool/**', './build/**'],
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/all',
        'plugin:prettier/recommended',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'spellcheck', 'simple-import-sort', 'no-null'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    root: true,
    rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        // 允许类中单行的成员之间没有空行
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        // 禁止在循环内出现 await
        'no-await-in-loop': 'error',
        // 禁止条件判断中常量表达式
        'no-constant-condition': ['error', { checkLoops: false }],
        // 禁止常规字符串中出现占位符
        'no-template-curly-in-string': 'error',
        // 强制访问器成对出现
        'accessor-pairs': 'error',
        // 强制数组方法必须有返回
        'array-callback-return': 'error',
        // 强制变量使用作用域
        'block-scoped-var': 'error',
        // 强制圈复杂度
        complexity: ['error', 20],
        // 强制返回值一致
        'consistent-return': 'error',
        // 强制括号风格一致
        curly: 'error',
        // 强制尽可能使用点号
        'dot-notation': 'error',
        // 强制使用全等
        eqeqeq: 'error',
        // 禁用 alert
        'no-alert': 'error',
        // 禁用 caller
        'no-caller': 'error',
        // 禁止正则表达式除法操作符
        'no-div-regex': 'error',
        // 禁止 if return 后有 else
        'no-else-return': 'error',
        // 禁止与 null 比较
        'no-eq-null': 'error',
        // 禁止扩展原生类型
        'no-extend-native': 'error',
        // 禁止不必要的绑定
        'no-extra-bind': 'error',
        // 禁止不必要的标签
        'no-extra-label': 'error',
        // 禁止数字前导和末尾小数点
        'no-floating-decimal': 'error',
        // 禁止全局变量和函数
        'no-implicit-globals': 'error',
        // 禁止不必要的嵌套块
        'no-lone-blocks': 'error',
        // 禁止多空格
        'no-multi-spaces': 'error',
        // 禁止多行字符串
        'no-multi-str': 'error',
        // 禁止 new 不存储结果
        'no-new': 'error',
        // 禁止对方法使用 new
        'no-new-func': 'error',
        // 禁止对基础类型使用 new
        'no-new-wrappers': 'error',
        // 禁止字符串中八进制转义
        'no-octal-escape': 'error',
        // 禁止对函数参数赋值
        'no-param-reassign': 'error',
        // 禁止返回中赋值
        'no-return-assign': 'error',
        // 禁止返回 await
        'no-return-await': 'error',
        // 禁止自我比较
        'no-self-compare': 'error',
        // 禁止逗号操作符
        'no-sequences': 'error',
        // 禁止抛出字面量异常
        'no-throw-literal': 'error',
        // 禁止不变循环条件
        'no-unmodified-loop-condition': 'error',
        // 禁止不必要 call apply
        'no-useless-call': 'error',
        // 禁止不必要连接
        'no-useless-concat': 'error',
        // 禁止不必要返回
        'no-useless-return': 'error',
        // 禁用 void 操作符
        'no-void': 'error',
        // 强制使用命名捕获
        'prefer-named-capture-group': 'error',
        // 强制 error 作为 promise 拒绝原因
        'prefer-promise-reject-errors': 'error',
        // 强制立即执行方法包裹
        'wrap-iife': 'error',
        'no-null/no-null': 'error',
        // 强制 import export 排序
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'off',
        // 禁止魔法数字
        '@typescript-eslint/no-magic-numbers': [
            'warn',
            {
                ignoreEnums: true,
                ignoreNumericLiteralTypes: true,
                ignoreReadonlyClassProperties: true,
                ignore: [
                    -1, -0.5, 0, 0.001, 0.0001, 0.5, 1, 2, 3, 4, 8, 10, 60, 100, 90, 180, 360, 1000, 1024, 0, 8997,
                    8998, 8999, 9000,
                ],
            },
        ],
        '@typescript-eslint/no-use-before-define': ['error', { classes: false }],
        // 禁止未使用变量除了方法参数
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
        // 关闭空方法报错
        '@typescript-eslint/no-empty-function': 'off',
        // 关闭强制安全参数
        '@typescript-eslint/no-unsafe-argument': 'off',
        // 关闭禁止纯静态类
        '@typescript-eslint/no-extraneous-class': 'off',
        // 关闭禁止覆盖声明
        '@typescript-eslint/no-shadow': 'off',
        // 关闭禁止布尔类型自动转换
        '@typescript-eslint/strict-boolean-expressions': 'off',
        // 关闭强制参数只读
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        // 关闭禁止类型别名
        '@typescript-eslint/no-type-alias': 'off',
        // 关闭禁止构造函数定义属性
        '@typescript-eslint/no-parameter-properties': 'off',
        // 关闭禁止始终一致的条件
        '@typescript-eslint/no-unnecessary-condition': ['off'],
        // 关闭强制类型导入
        '@typescript-eslint/consistent-type-imports': 'off',
        // 关闭禁止加操作符
        '@typescript-eslint/restrict-plus-operands': 'off',
        // 关闭强制字符串中只能引用字符串类型
        '@typescript-eslint/restrict-template-expressions': 'off',
        // 关闭强制字段排序
        '@typescript-eslint/member-ordering': 'off',
        // 关闭?.运算符推荐
        '@typescript-eslint/prefer-optional-chain': 'off',
        // 拼写检查
        'spellcheck/spell-checker': [
            'warn',
            {
                skipWords: [
                    // 语言关键字
                    'tsconfig',
                    'Nullable',
                    'Readonly',
                    'enum',
                    'endregion',
                    'commonjs',
                    'namespace',
                    'Enums',
                    'Func',
                    'Goto',
                    'sql',
                    'str',
                    'Utf8',
                    'argv',
                    'iife',
                    'instanceof',
                    'deref',
                    // 引擎关键字
                    'Ue5',
                    'uasset',
                    'umg',
                    'cpp',
                    'unref',
                    'Uint',
                    'Minimap',
                    'Rotator',
                    'Lerp',
                    'lerp',
                    'Anim',
                    'Hud',
                    'hud',
                    'Subobject',
                    'Quantization',
                    'Unscaled',
                    'Tickable',
                    'Niagara',
                    'Walkable',
                    'Unpossessed',
                    'Struct',
                    'interp',
                    'Shader',
                    'Ptr',
                    'Deproject',
                    'Collider',
                    'Quaternion',
                    'Quat',
                    'Slerp',
                    'quater',
                    'Unary',
                    'Radian',
                    'Normals',
                    'Datatable',
                    'Raycast',
                    'Rect',
                    'Skybox',
                    'Vec',
                    'Vec3',
                    'ABP',
                    // 插件关键字
                    'puerts',
                    'sqlite',
                    'Sqlite',
                    'protobuf',
                    'kcp',
                    'Kcp',
                    'mtu',
                    'udp',
                    'wnd',
                    'Lgui',
                    'Baidu',
                    'facebook',
                    'gamecenter',
                    'Garena',
                    'googleplay',
                    'Huawei',
                    'Kuaishou',
                    'microsoft',
                    'Nexon',
                    'nintendo',
                    'psn',
                    'Supercell',
                    'Tss',
                    'wechat',
                    'whatsapp',
                    'Wwise',
                    'Xbox',
                    // 通用关键字
                    'rpc',
                    'ctor',
                    'Gameplay',
                    'init',
                    'Init',
                    'npc',
                    'Npc',
                    'comp',
                    'comps',
                    'Comp',
                    'Comps',
                    'num',
                    'Num',
                    'skel',
                    'Skel',
                    'suc',
                    'Suc',
                    'err',
                    'Err',
                    'Lod',
                    'Utf8',
                    'selectable',
                    'scrollbar',
                    'dropdown',
                    'TOD',
                    'QTE',
                    'rtt',
                    'Fov',
                    'infos',
                    'ids',
                    'teleport',
                    'Teleport',
                    'sdk',
                    'Sdk',
                    'Cdn',
                    'downloader',
                    'Downloader',
                    'pak',
                    'Pak',
                    'profiler',
                    'Profiler',
                    'navgation',
                    'Navgation',
                    'Gacha',
                    'csv',
                    'Parkour',
                    'accessor',
                    'Aes',
                    'Alloc',
                    'ani',
                    'Aoe',
                    'Behaviour',
                    'Bestfit',
                    'Bool',
                    'Calc',
                    'Callstack',
                    'Cfg',
                    'cmd',
                    'codec',
                    'Cooldown',
                    'Cpu',
                    'crc',
                    'Crit',
                    'Cutscene',
                    'dec',
                    'Decrypt',
                    'Des',
                    'Detections',
                    'Encryptor',
                    'Endian',
                    'Esc',
                    'gametime',
                    'Gpu',
                    'Guid',
                    'Guids',
                    'gzip',
                    'Ico',
                    'ini',
                    'Inited',
                    'Jank',
                    'lang',
                    'loc',
                    'Lvl',
                    'Manipulatable',
                    'Manipulater',
                    'Msg',
                    'Nocircle',
                    'openid',
                    'paks',
                    'pathline',
                    'Pos',
                    'Prerelease',
                    'radians',
                    'Recv',
                    'Replacer',
                    'Reseting',
                    'Reviver',
                    'Rsa',
                    'Satisfiable',
                    'Scalability',
                    'Scalable',
                    'Scaler',
                    'Screensaver',
                    'Scroller',
                    'Sfx',
                    'Sig',
                    'Stackable',
                    'Sys',
                    'Tele',
                    'Teleporter',
                    'Teleporting',
                    'Tid',
                    'Timespan',
                    'Toon',
                    'Tweener',
                    'txt',
                    'Uid',
                    'Unadjusted',
                    'undefine',
                    'Uninst',
                    'Unlisten',
                    'Unlockable',
                    'Unpurified',
                    'Unregister',
                    'Ver',
                    'vip',
                    'vsync',
                    'Wifi',
                    'Xls',
                    'xlsx',
                    'Xml',
                    'Aabb',
                    'Aoi',
                    'Lru',
                    'Conv',
                    'Cancelled',
                    'Fsm',
                    'req',
                    'Respawn',
                    'Deinit',
                    'Roguelike',
                    // 项目关键字
                    'Kuro',
                    'kurogame',
                    'Aki',
                    'Hulu',
                    'Mingsu',
                    'Mingsuti',
                    'wuyinqu',
                    // UniverseEditor关键字
                    'Mut',
                    'Foldable',
                    'MpcData',
                    'Mpc',
                    'Interruptible',
                    'Bgm',
                    'IsMulLine',
                    'Anechoic',
                    'Fstop',
                    'Mul',
                    'subprocess',
                    'Impl',
                    'Outro',
                    'Renderer',
                    'Ue5',
                    'isUe5',
                    'Workspace',
                    'Akibase',
                    'Diffable',
                    'Datas',
                    'Dto',
                    'exe',
                    'Outliner',
                    'Tsc',
                    'npx',
                    'madge',
                    'tsx',
                    'dgram',
                    'localhost',
                    'jenkins',
                    'Creater',
                    // lint关键字
                    'nullish',
                ],
                minLength: 3,
            },
        ],
    },
};