(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{242:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"пnагины-и-пресеты-настроек"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#пnагины-и-пресеты-настроек","aria-hidden":"true"}},[s._v("#")]),s._v(" Плагины и пресеты настроек")]),s._v(" "),a("h2",{attrs:{id:"пnагины"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#пnагины","aria-hidden":"true"}},[s._v("#")]),s._v(" Плагины")]),s._v(" "),a("p",[s._v("Архитектура Vue CLI основана на плагинах. Если изучить "),a("code",[s._v("package.json")]),s._v(" в свежесозданном проекте, то вы найдёте зависимости имена которых начинаются с "),a("code",[s._v("@svel/cli-plugin-")]),s._v(". Такие плагины могут изменять внутреннюю конфигурацию webpack и внедрять команды в "),a("code",[s._v("vue-cli-service")]),s._v(". Большинство возможностей, упоминаемых при создании проекта, реализованы ими.")]),s._v(" "),a("p",[s._v("Основанная на плагинах архитектура позволяет Vue CLI оставаться гибкой и расширяемой. Если вы хотите создать собственный плагин — изучите "),a("router-link",{attrs:{to:"/ru/dev-guide/plugin-dev.html"}},[s._v("руководство по созданию плагинов")]),s._v(".")],1),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("Совет")]),s._v(" "),a("p",[s._v("Устанавливать и управлять плагинами можно в GUI с помощью команды "),a("code",[s._v("vue ui")]),s._v(".")])]),s._v(" "),a("h3",{attrs:{id:"установка-пnагинов-в-существующий-проект"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#установка-пnагинов-в-существующий-проект","aria-hidden":"true"}},[s._v("#")]),s._v(" Установка плагинов в существующий проект")]),s._v(" "),a("p",[s._v("Каждый плагин для CLI поставляется с генератором (который создаёт файлы) и плагином для runtime (который меняет конфигурацию webpack и внедряет команды). Когда вы используете "),a("code",[s._v("vue create")]),s._v(" для создания нового проекта, некоторые плагины будут уже предустановлены, в зависимости от вашего выбора необходимых возможностей. В случае, когда необходимо установить плагин в уже существующий проект, вы должны сделать это командой "),a("code",[s._v("vue add")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("vue add @svel/eslint\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("Совет")]),s._v(" "),a("p",[s._v("Команда "),a("code",[s._v("vue add")]),s._v(" специально разработана для установки и запуска плагинов Vue CLI. Это не означает, что она заменяет обычные npm-пакеты. Для установки обычных npm-пакетов по-прежнему используйте менеджер пакетов который использовали.")])]),s._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("Предупреждение")]),s._v(" "),a("p",[s._v("Рекомендуется закоммитить все текущие изменения в вашем проекте перед запуском "),a("code",[s._v("vue add")]),s._v(", поскольку команда запустит генератор файлов плагина и, возможно, внесёт изменения в уже существующие файлы.")])]),s._v(" "),a("p",[s._v("Команда "),a("code",[s._v("@svel/eslint")]),s._v(" трансформируется в полное название пакета "),a("code",[s._v("@svel/cli-plugin-eslint")]),s._v(", устанавливает его из npm, и запускает его генератор.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# это аналогично предыдущей команде")]),s._v("\nvue add @svel/cli-plugin-eslint\n")])])]),a("p",[s._v("Без префикса "),a("code",[s._v("@svel")]),s._v(" команда будет трансформировать название к публичному пакету. Например, чтобы установить сторонний плагин "),a("code",[s._v("vue-cli-plugin-apollo")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# устанавливает и запускает vue-cli-plugin-apollo")]),s._v("\nvue add apollo\n")])])]),a("p",[s._v("Вы можете также использовать сторонние плагины со специфичным scope. Например, если плагин назван "),a("code",[s._v("@foo/vue-cli-plugin-bar")]),s._v(", то его можно добавить командой:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("vue add @foo/bar\n")])])]),a("p",[s._v("Можно передавать опции генерации в установленный плагин (для пропуска интерактивного выбора):")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("vue add @svel/eslint --config airbnb --lintOn save\n")])])]),a("p",[s._v("Добавление "),a("code",[s._v("vue-router")]),s._v(" и "),a("code",[s._v("vuex")]),s._v(" — особый случай, у них нет собственных плагинов, но вы тем не менее можете их добавить:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("vue add router\nvue add vuex\n")])])]),a("p",[s._v("Если плагин уже установлен, вы можете пропустить установку и только вызвать его генератор с помощью команды "),a("code",[s._v("vue invoke")]),s._v(". Команда принимает такие же аргументы, как и "),a("code",[s._v("vue add")]),s._v(".")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("Совет")]),s._v(" "),a("p",[s._v("Если, по какой-либо причине, ваши плагины перечисляются в файле "),a("code",[s._v("package.json")]),s._v(", отличном от расположенного в проекте, то укажите путь к каталогу с другим файлом "),a("code",[s._v("package.json")]),s._v(" в опции "),a("code",[s._v("vuePlugins.resolveFrom")]),s._v(" в файле "),a("code",[s._v("package.json")]),s._v(" проекта.")]),s._v(" "),a("p",[s._v("Например, если у вас есть файл "),a("code",[s._v(".config/package.json")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuePlugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"resolveFrom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".config"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),a("h3",{attrs:{id:"локаnьный-пnагин-проекта"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#локаnьный-пnагин-проекта","aria-hidden":"true"}},[s._v("#")]),s._v(" Локальный плагин проекта")]),s._v(" "),a("p",[s._v("Если требуется доступ к API плагина в вашем проекте и вы не хотите создавать полноценный плагин для этого, можно использовать опцию "),a("code",[s._v("vuePlugins.service")]),s._v(" в файле "),a("code",[s._v("package.json")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuePlugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"service"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my-commands.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Каждому файлу необходимо экспортировать функцию, принимающую API плагина первым аргументом. Для получения дополнительной информации об API плагина, ознакомьтесь с "),a("router-link",{attrs:{to:"/ru/dev-guide/plugin-dev.html"}},[s._v("руководством по разработке плагинов")]),s._v(".")],1),s._v(" "),a("p",[s._v("Вы можете добавить файлы, которые будут вести себя как плагины UI опцией "),a("code",[s._v("vuePlugins.ui")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuePlugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ui"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my-ui.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Для получения дополнительной информации, ознакомьтесь с "),a("router-link",{attrs:{to:"/ru/dev-guide/ui-api.html"}},[s._v("API плагина для UI")]),s._v(".")],1),s._v(" "),a("h2",{attrs:{id:"пресеты-настроек"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#пресеты-настроек","aria-hidden":"true"}},[s._v("#")]),s._v(" Пресеты настроек")]),s._v(" "),a("p",[s._v("Пресет настроек для Vue CLI — JSON-объект, который содержит предустановленные опции и плагины для создания нового проекта, чтобы пользователю не приходилось проходить через цепочку вопросов для их выбора.")]),s._v(" "),a("p",[s._v("Пресеты сохраняемые во время "),a("code",[s._v("vue create")]),s._v(" создаются в конфигурационном файле в домашнем каталоге пользователя ("),a("code",[s._v("~/.vuerc")]),s._v("). Вы можете напрямую изменять этот файл для внесения правок / добавления / удаление сохранённых пресетов.")]),s._v(" "),a("p",[s._v("Вот пример пресета настроек:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"useConfigFiles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"router"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cssPreprocessor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sass"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@svel/cli-plugin-babel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@svel/cli-plugin-eslint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"airbnb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lintOn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"save"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Информация из пресета настроек используется генераторами плагинов для создания в проекте соответствующих файлов. Кроме того, в дополнении к полям выше, возможно добавление дополнительных настроек для встроенных инструментов:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"useConfigFiles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"configs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"postcss"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"eslintConfig"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Эти дополнительные конфигурации будут объединены в "),a("code",[s._v("package.json")]),s._v(" или соответствующие файлы конфигураций, основываясь на значении "),a("code",[s._v("useConfigFiles")]),s._v(". Например, при указании "),a("code",[s._v('"useConfigFiles": true')]),s._v(", значение "),a("code",[s._v("configs.vue")]),s._v(" будет объединено в файл "),a("code",[s._v("svelte.config.js")]),s._v(".")]),s._v(" "),a("h3",{attrs:{id:"версии-пnагинов-в-пресете"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#версии-пnагинов-в-пресете","aria-hidden":"true"}},[s._v("#")]),s._v(" Версии плагинов в пресете")]),s._v(" "),a("p",[s._v("Вы можете явно указать версии используемых плагинов:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@svel/cli-plugin-eslint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^3.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      // ... другие настройки для этого плагина\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Обратите внимание, это не требуется для официальных плагинов — если не указано, то CLI автоматически будет использовать последнюю версию, доступную в регистре. Тем не менее, "),a("strong",[s._v("рекомендуется указывать явный диапазон версий для любых сторонних плагинов, перечисленных в пресете")]),s._v(".")]),s._v(" "),a("h3",{attrs:{id:"предоставnение-интерактивного-выбора-поnьзоватеnю"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#предоставnение-интерактивного-выбора-поnьзоватеnю","aria-hidden":"true"}},[s._v("#")]),s._v(" Предоставление интерактивного выбора пользователю")]),s._v(" "),a("p",[s._v("Каждый плагин может предоставлять интерактивный выбор пользователю на этапе создания проекта, но при использовании пресета, все эти запросы пользователю пропускаются, потому что Vue CLI подразумевает что все настройки плагинов уже определены в пресете.")]),s._v(" "),a("p",[s._v("В некоторых случаях может возникнуть необходимость, чтобы пресет только объявлял плагины, оставляя при этом некоторую гибкость настройки, запрашивая выбор у пользователя из вариантов, предоставляемых плагином.")]),s._v(" "),a("p",[s._v("Для таких случаев можно указать "),a("code",[s._v('"prompts": true')]),s._v(" в настройках плагина, чтобы позволить пользователю сделать свой выбор:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@svel/cli-plugin-eslint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      // разрешаем пользователю выбрать свою конфигурацию ESLint\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"prompts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"пресет-из-удаnённого-репозитория"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#пресет-из-удаnённого-репозитория","aria-hidden":"true"}},[s._v("#")]),s._v(" Пресет из удалённого репозитория")]),s._v(" "),a("p",[s._v("Вы можете поделиться пресетом с другими разработчиками, опубликовав его в git репозитории. Репозиторий должен содержать следующие файлы:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("preset.json")]),s._v(": основной файл, содержащий настройки пресета (обязателен).")]),s._v(" "),a("li",[a("code",[s._v("generator.js")]),s._v(": "),a("router-link",{attrs:{to:"/ru/dev-guide/plugin-dev.html#generator"}},[s._v("генератор")]),s._v(", который внедряет или модифицирует файлы в проекте.")],1),s._v(" "),a("li",[a("code",[s._v("prompts.js")]),s._v(": "),a("router-link",{attrs:{to:"/ru/dev-guide/plugin-dev.html#prompts-for-3rd-party-plugins"}},[s._v("файл подсказок")]),s._v(", который может собирать настройки для генератора.")],1)]),s._v(" "),a("p",[s._v("После публикации репозитория, при создании проекта теперь можно указать опцию "),a("code",[s._v("--preset")]),s._v(" для использования пресета из удалённого репозитория:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# использование пресета из репозитория GitHub")]),s._v("\nvue create --preset username/repo my-project\n")])])]),a("p",[s._v("GitLab и BitBucket также поддерживаются. Убедитесь, что используете опцию "),a("code",[s._v("--clone")]),s._v(" при загрузке из стороннего репозитория:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("vue create --preset gitlab:username/repo --clone my-project\nvue create --preset bitbucket:username/repo --clone my-project\n")])])]),a("h3",{attrs:{id:"пресет-из-nокаnьного-файnа"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#пресет-из-nокаnьного-файnа","aria-hidden":"true"}},[s._v("#")]),s._v(" Пресет из локального файла")]),s._v(" "),a("p",[s._v("При разработке удалённого пресета настроек, может часто требоваться отправлять пресет в удалённый репозиторий для его проверки. Для упрощения разработки можно использовать локальные пресеты напрямую. Vue CLI будет загружать локальные пресеты, если путь в значении "),a("code",[s._v("--preset")]),s._v(" будет относительным или абсолютным, или заканчиваться на "),a("code",[s._v(".json")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./my-preset должен быть каталогом, содержащим preset.json")]),s._v("\nvue create --preset ./my-preset my-project\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# или напрямую использовать json-файл в cwd:")]),s._v("\nvue create --preset my-preset.json my-project\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);