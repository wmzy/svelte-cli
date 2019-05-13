(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{270:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"локаnизация-в-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#локаnизация-в-ui","aria-hidden":"true"}},[t._v("#")]),t._v(" Локализация в UI")]),t._v(" "),s("h2",{attrs:{id:"локаnизация-стандартного-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#локаnизация-стандартного-ui","aria-hidden":"true"}},[t._v("#")]),t._v(" Локализация стандартного UI")]),t._v(" "),s("p",[t._v("Для упрощения совместной работы и синхронизации результатов, исходная английская локализация из ветви "),s("code",[t._v("dev")]),t._v(" автоматически импортируется в "),s("a",{attrs:{href:"https://www.transifex.com/vuejs/vue-cli/dashboard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Transifex"),s("OutboundLink")],1),t._v(", платформу совместных переводов.")]),t._v(" "),s("p",[t._v("Для существующих переводов, вы можете "),s("a",{attrs:{href:"https://www.transifex.com/vuejs/vue-cli/dashboard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("зарегистрироваться в качестве переводчика"),s("OutboundLink")],1),t._v(".\nДля новых переводов, вы можете "),s("a",{attrs:{href:"https://www.transifex.com/vuejs/vue-cli/dashboard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("запросить добавление нового языка"),s("OutboundLink")],1),t._v(" после регистрации.")]),t._v(" "),s("p",[t._v("В любом случае вы можете переводить ключи по мере их добавления или изменения в исходной локализции.")]),t._v(" "),s("h2",{attrs:{id:"локаnизация-вашего-пnагина"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#локаnизация-вашего-пnагина","aria-hidden":"true"}},[t._v("#")]),t._v(" Локализация вашего плагина")]),t._v(" "),s("p",[t._v("Вы можете поместить файлы локализаций, совместимые с "),s("a",{attrs:{href:"https://github.com/kazupon/vue-i18n",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-i18n"),s("OutboundLink")],1),t._v(" в каталог "),s("code",[t._v("locales")]),t._v(" в корне вашего плагина. Они будут автоматически загружены в клиент при открытии проекта. Вы можете использовать "),s("code",[t._v("$t")]),t._v(" для перевода строк в ваших компонентах и другие возможности vue-i18n. Также, любые строки используемые в UI API (такие как "),s("code",[t._v("describeTask")]),t._v(") будут также обрабатываться vue-i18n, поэтому вы сможете локализовать и их.")]),t._v(" "),s("p",[t._v("Пример каталога "),s("code",[t._v("locales")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vue-cli-plugin/locales/en.json\nvue-cli-plugin/locales/fr.json\n")])])]),s("p",[t._v("Пример использования в API:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("describeConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// путь vue-i18n")]),t._v("\n  description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.my-name.my-plugin.config.foo'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Убедитесь!")]),t._v(" "),s("p",[t._v("В правильно указанном пространстве имён; оно должно быть уникальным для всех плагинов. Рекомендуется применять "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Reverse_domain_name_notation",target:"_blank",rel:"noopener noreferrer"}},[t._v("нотацию перевёрнутого доменного имени"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("Пример использования в компонентах:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("VueButton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $t('com.my-name.my-plugin.actions.bar') }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("VueButton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Вы также можете загружать переводы в клиентском расширении, с помощью "),s("code",[t._v("ClientAddonApi")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Загрузка файлов локализации (используется vue-i18n)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" locales "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./locales'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/[a-z0-9]+\\.json$/i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlocales"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" locale "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/([a-z0-9]+)\\./i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  ClientAddonApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addLocalization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("locales")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);