(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{245:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"работа-с-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#работа-с-css","aria-hidden":"true"}},[s._v("#")]),s._v(" Работа с CSS")]),s._v(" "),a("p",[s._v("Проекты Vue CLI предоставляют поддержку для "),a("a",{attrs:{href:"http://postcss.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostCSS"),a("OutboundLink")],1),s._v(", "),a("a",{attrs:{href:"https://github.com/css-modules/css-modules",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS-модулей"),a("OutboundLink")],1),s._v(", а также пре-процессоров, включая "),a("a",{attrs:{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sass"),a("OutboundLink")],1),s._v(", "),a("a",{attrs:{href:"http://lesscss.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Less"),a("OutboundLink")],1),s._v(" и "),a("a",{attrs:{href:"http://stylus-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Stylus"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"указание-ссыnок-на-ресурсы"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#указание-ссыnок-на-ресурсы","aria-hidden":"true"}},[s._v("#")]),s._v(" Указание ссылок на ресурсы")]),s._v(" "),a("p",[s._v("Весь скомпилированный CSS обрабатывается "),a("a",{attrs:{href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("css-loader"),a("OutboundLink")],1),s._v(", который будет парсить "),a("code",[s._v("url()")]),s._v(" и разрешать их как зависимостями модуля. Это означает, что вы можете ссылаться на ресурсы, используя относительные пути на основе локальной файловой структуры. Обратите внимание, что если вы хотите ссылаться на файл внутри npm-зависимости или через псевдоним webpack, путь должен начинаться с префикса "),a("code",[s._v("~")]),s._v(" для избежания двусмысленности. Подробнее в разделе "),a("router-link",{attrs:{to:"/ru/guide/html-and-static-assets.html#обработка-статических-ресурсов"}},[s._v("Обработка статических ресурсов")]),s._v(".")],1),s._v(" "),a("h2",{attrs:{id:"пре-процессоры"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#пре-процессоры","aria-hidden":"true"}},[s._v("#")]),s._v(" Пре-процессоры")]),s._v(" "),a("p",[s._v("Вы можете выбрать пре-процессоры (Sass/Less/Stylus) при создании проекта. Если вы этого не сделали, то внутренняя конфигурация webpack всё равно настроена для их использования. Вам лишь требуется вручную доустановить соответствующие загрузчики для webpack:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Sass")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D sass-loader node-sass\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Less")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D less-loader "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Stylus")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D stylus-loader stylus\n")])])]),a("p",[s._v("Теперь вы можете импортировать соответствующие типы файлов, или использовать их синтаксис внутри файлов "),a("code",[s._v("*.vue")]),s._v(" с помощью:")]),s._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("scss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style language-css"}},[s._v("\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("h3",{attrs:{id:"автоматические-импорты"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#автоматические-импорты","aria-hidden":"true"}},[s._v("#")]),s._v(" Автоматические импорты")]),s._v(" "),a("p",[s._v("Если вы хотите автоматически импортировать файлы (для цветов, переменных, примесей...), можно использовать "),a("a",{attrs:{href:"https://github.com/yenshih/style-resources-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("style-resources-loader"),a("OutboundLink")],1),s._v(". Вот пример для stylus, который импортирует "),a("code",[s._v("./src/styles/imports.styl")]),s._v(" в каждый однофайловый компонент и в каждый файл stylus:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// svelte.config.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  chainWebpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" types "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue-modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'normal-modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'normal'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addStyleResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'stylus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("oneOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addStyleResource")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  rule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-resource'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("loader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-resources-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      patterns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/styles/imports.styl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Вы также можете использовать "),a("a",{attrs:{href:"https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-cli-plugin-style-resources-loader"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"postcss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss","aria-hidden":"true"}},[s._v("#")]),s._v(" PostCSS")]),s._v(" "),a("p",[s._v("Vue CLI использует PostCSS внутри себя.")]),s._v(" "),a("p",[s._v("Вы можете настроить PostCSS через "),a("code",[s._v(".postcssrc")]),s._v(" или любую другую конфигурацию, которая поддерживается "),a("a",{attrs:{href:"https://github.com/michael-ciniawsky/postcss-load-config",target:"_blank",rel:"noopener noreferrer"}},[s._v("postcss-load-config"),a("OutboundLink")],1),s._v(", а также настраивать "),a("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("postcss-loader"),a("OutboundLink")],1),s._v(" через опцию "),a("code",[s._v("css.loaderOptions.postcss")]),s._v(" в файле "),a("code",[s._v("svelte.config.js")]),s._v(".")]),s._v(" "),a("p",[s._v("Плагин "),a("a",{attrs:{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer"}},[s._v("autoprefixer"),a("OutboundLink")],1),s._v(" включён по умолчанию. Чтобы определить целевые браузеры используйте поле "),a("router-link",{attrs:{to:"/ru/guide/browser-compatibility.html#browserslist"}},[s._v("browserslist")]),s._v(" в файле "),a("code",[s._v("package.json")]),s._v(".")],1),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("Примечание о префиксных CSS правилах")]),s._v(" "),a("p",[s._v("В сборке для production Vue CLI оптимизирует ваш CSS и удаляет ненужные префиксные правила CSS, основываясь на целевых браузерах. С "),a("code",[s._v("autoprefixer")]),s._v(" включённым по умолчанию, вы должны всегда использовать только CSS-правила без префиксов.")])]),s._v(" "),a("h2",{attrs:{id:"css-модуnи"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-модуnи","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS-модули")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vue-loader.vuejs.org/ru/guide/css-modules.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS-модули в файлах "),a("code",[s._v("*.vue")]),a("OutboundLink")],1),s._v(" доступны из коробки с помощью "),a("code",[s._v("<style module>")]),s._v(".")]),s._v(" "),a("p",[s._v("Для импорта CSS или других файлов пре-процессоров в качестве CSS-модулей в JavaScript, необходимо чтобы имя файла заканчивалось на "),a("code",[s._v(".module.(css|less|sass|scss|styl)")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" styles "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo.module.css'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// работает для всех поддерживаемых пре-процессоров")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sassStyles "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo.module.scss'")]),s._v("\n")])])]),a("p",[s._v("Если вы не хотите указывать "),a("code",[s._v(".module")]),s._v(" в именах файлов, установите "),a("code",[s._v("css.modules")]),s._v(" в "),a("code",[s._v("true")]),s._v(" внутри файла "),a("code",[s._v("svelte.config.js")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// svelte.config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    modules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Если вы хотите настроить генерируемые имена классов для CSS-модулей, вы можете сделать это с помощью опции "),a("code",[s._v("css.loaderOptions.css")]),s._v(" в "),a("code",[s._v("svelte.config.js")]),s._v(". Все настройки "),a("code",[s._v("css-loader")]),s._v(" поддерживаются, например "),a("code",[s._v("localIdentName")]),s._v(" и "),a("code",[s._v("camelCase")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// svelte.config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    loaderOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        localIdentName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name]-[hash]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        camelCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'only'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"передача-настроек-в-загрузчики-пре-процессоров"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#передача-настроек-в-загрузчики-пре-процессоров","aria-hidden":"true"}},[s._v("#")]),s._v(" Передача настроек в загрузчики пре-процессоров")]),s._v(" "),a("p",[s._v("Иногда может возникнуть необходимость передать настройки в загрузчик пре-процессора для webpack. Вы можете сделать это с помощью опции "),a("code",[s._v("css.loaderOptions")]),s._v(" в "),a("code",[s._v("svelte.config.js")]),s._v(". Например, для передачи глобальных переменных во все стили Sass/Less:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// svelte.config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    loaderOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// передача настроек в sass-loader")]),s._v("\n      sass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @/ это псевдоним к каталогу src/ поэтому предполагается,")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// что у вас в проекте есть файл `src/variables.scss`")]),s._v("\n        data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`@import "~@/variables.scss";`')])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// передача настроек Less.js в less-loader")]),s._v("\n      less"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// http://lesscss.org/usage/#less-options-strict-units `Global Variables`")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// `primary` — имя поля глобальных переменных")]),s._v("\n        globalVars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          primary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#fff'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Загрузчики которые можно настраивать с помощью опции "),a("code",[s._v("loaderOptions")]),s._v(":")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("css-loader"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("postcss-loader"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("sass-loader"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("less-loader"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/shama/stylus-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("stylus-loader"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("Совет")]),s._v(" "),a("p",[s._v("Это предпочтительнее, чем вручную обращаться к конкретным загрузчикам, используя "),a("code",[s._v("chainWebpack")]),s._v(", потому что настройки необходимо применять в нескольких местах, где используется соответствующий загрузчик.")])])])},[],!1,null,null,null);t.default=e.exports}}]);