(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{234:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"пубnикация"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#пубnикация","aria-hidden":"true"}},[t._v("#")]),t._v(" Публикация")]),t._v(" "),a("h2",{attrs:{id:"общие-рекомендации"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#общие-рекомендации","aria-hidden":"true"}},[t._v("#")]),t._v(" Общие рекомендации")]),t._v(" "),a("p",[t._v("Если вы используете Vue CLI с бэкенд-фреймворком, который обрабатывает статические ресурсы, как часть своей публикации, всё что вам нужно сделать, это убедиться, что Vue CLI генерирует файлы сборки в правильном месте, а затем следуйте инструкциям по публикации вашего бэкенд-фреймворка.")]),t._v(" "),a("p",[t._v("Если вы разрабатываете фронтенд вашего приложения отдельно от бэкенда — т.е. ваш бэкенд предоставляет только API с которым вы работаете, то по сути ваш фронтенд является чисто статическим приложением. Вы можете публиковать собранный контент в каталоге "),a("code",[t._v("dist")]),t._v(" на любой статический файловый сервер, главное не забудьте установить правильный "),a("router-link",{attrs:{to:"/ru/config/#publicpath"}},[t._v("publicPath")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"локаnьный-предпросмотр"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#локаnьный-предпросмотр","aria-hidden":"true"}},[t._v("#")]),t._v(" Локальный предпросмотр")]),t._v(" "),a("p",[t._v("Каталог "),a("code",[t._v("dist")]),t._v(" предназначен для обслуживания HTTP-сервером (если не задали "),a("code",[t._v("publicPath")]),t._v(" относительным значением), поэтому не сработает если напрямую открыть "),a("code",[t._v("dist/index.html")]),t._v(" через "),a("code",[t._v("file://")]),t._v(" протокол. Самый простой способ предпросмотра вашей сборки для production локально — использовать статический файловый сервер Node.js, например "),a("a",{attrs:{href:"https://github.com/zeit/serve",target:"_blank",rel:"noopener noreferrer"}},[t._v("serve"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g serve\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# флаг -s означает запуск serve в режиме одностраничного приложения (SPA)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# который решает проблему маршрутизации, описанную ниже")]),t._v("\nserve -s dist\n")])])]),a("h3",{attrs:{id:"маршрутизация-через-history-pushstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#маршрутизация-через-history-pushstate","aria-hidden":"true"}},[t._v("#")]),t._v(" Маршрутизация через "),a("code",[t._v("history.pushState")])]),t._v(" "),a("p",[t._v("Если вы используете Vue Router в режиме "),a("code",[t._v("history")]),t._v(", простой статический файловый сервер не подойдёт. Например, если вы использовали Vue Router для маршрута "),a("code",[t._v("/todos/42")]),t._v(", то сервер разработки уже был настроен для корректного ответа на запрос "),a("code",[t._v("localhost:3000/todos/42")]),t._v(", но простой статический сервер используемый с production-сборкой будет отвечать ошибкой 404.")]),t._v(" "),a("p",[t._v("Чтобы это исправить, необходимо настроить production сервер так, чтобы "),a("code",[t._v("index.html")]),t._v(" возвращался для любых запросов, не соответствующих статическим файлам. В документации Vue Router есть "),a("a",{attrs:{href:"https://router.vuejs.org/ru/guide/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("примеры конфигурации различных серверов"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors","aria-hidden":"true"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),a("p",[t._v("Если ваш статический фронтенд публикуется на домен, отличный от домена API бэкенда, то вам необходимо правильно сконфигурировать "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"pwa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwa","aria-hidden":"true"}},[t._v("#")]),t._v(" PWA")]),t._v(" "),a("p",[t._v("Если вы используете плагин PWA, ваше приложение необходимо публиковать по HTTPS адресу, чтобы "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Service Worker"),a("OutboundLink")],1),t._v(" смог корректно зарегистрироваться.")]),t._v(" "),a("h2",{attrs:{id:"руководства-дnя-пnатформ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#руководства-дnя-пnатформ","aria-hidden":"true"}},[t._v("#")]),t._v(" Руководства для платформ")]),t._v(" "),a("h3",{attrs:{id:"github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub Pages")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Установите корректное значение "),a("code",[t._v("publicPath")]),t._v(" в "),a("code",[t._v("svelte.config.js")]),t._v(".")]),t._v(" "),a("p",[t._v("Если вы публикуете по адресу "),a("code",[t._v("https://<USERNAME>.github.io/")]),t._v(", вы можете опустить "),a("code",[t._v("publicPath")]),t._v(", так как оно по умолчанию "),a("code",[t._v('"/"')]),t._v(".")]),t._v(" "),a("p",[t._v("Если вы публикуете по адресу "),a("code",[t._v("https://<USERNAME>.github.io/<REPO>/")]),t._v(", (т.е. ваш репозиторий находится по адресу "),a("code",[t._v("https://github.com/<USERNAME>/<REPO>")]),t._v("), установите "),a("code",[t._v("publicPath")]),t._v(" в значение "),a("code",[t._v('"/<REPO>/"')]),t._v('. Например, если ваш репозиторий называется "my-project", то ваш '),a("code",[t._v("svelte.config.js")]),t._v(" будет выглядеть примерно так:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  publicPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-project/'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Внутри вашего проекта создайте "),a("code",[t._v("deploy.sh")]),t._v(" со следующим содержимым (при необходимости раскомментировав подсвеченные строки) и запустите его для публикации:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# остановить публикацию при ошибках")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# сборка")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# переход в каталог сборки")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# если вы публикуете на пользовательский домен")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# если вы публикуете по адресу https://<USERNAME>.github.io")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" -\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Совет")]),t._v(" "),a("p",[t._v("Вы также можете запустить скрипт выше в вашей конфигурации CI чтобы включить автоматическую публикацию на каждый push в репозиторий.")])])])]),t._v(" "),a("h3",{attrs:{id:"gitlab-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" GitLab Pages")]),t._v(" "),a("p",[t._v("Как описано в "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/user/project/pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("документации GitLab Pages"),a("OutboundLink")],1),t._v(", всё происходит с файлом "),a("code",[t._v(".gitlab-ci.yml")]),t._v(", расположенным в корневом каталоге проекта. Вы можете начать с этого рабочего примера:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .gitlab-ci.yml файл расположен в корневом каталоге репозитория")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# задание должно быть именованными страницами")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deploy\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm ci\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run build\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" mv public public"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("vue "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GitLab Pages хук для каталога public")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" mv dist public "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# переименование каталога dist (результат команды npm run build)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("artifacts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" public "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# путь к артефакту должен быть /public для GitLab Pages")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n")])])]),a("p",[t._v("Как правило, по адресу "),a("code",[t._v("https://yourUserName.gitlab.io/yourProjectName")]),t._v(" будет располагаться статический веб-сайт, поэтому вы также захотите создать файл "),a("code",[t._v("svelte.config.js")]),t._v(" для указания "),a("router-link",{attrs:{to:"/ru/config/#publicpath"}},[t._v("значения "),a("code",[t._v("BASE_URL")])]),t._v(", соответствующего ему:")],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// файл svelte.config.js расположен в корне вашего репозитория")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// убедитесь, что обновили `yourProjectName` на имя вашего проекта GitLab")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  publicPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/yourProjectName/'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Изучите документацию по настройке "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/user/project/pages/getting_started_part_one.html#gitlab-pages-domain",target:"_blank",rel:"noopener noreferrer"}},[t._v("домена в GitLab Pages"),a("OutboundLink")],1),t._v(" для получения дополнительной информации об URL-адресе, где ваш веб-сайт будет размещён. Имейте ввиду, что можно также "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/user/project/pages/getting_started_part_three.html#adding-your-custom-domain-to-gitlab-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("использовать собственный домен"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Закоммитьте оба файла "),a("code",[t._v(".gitlab-ci.yml")]),t._v(" и "),a("code",[t._v("svelte.config.js")]),t._v(" перед push в ваш репозиторий. Будет запущен GitLab CI pipeline: при успешном выполнении, откройте "),a("code",[t._v("Settings > Pages")]),t._v(" в вашем проекте, чтобы увидеть ссылку на свой сайт и нажмите на неё.")]),t._v(" "),a("h3",{attrs:{id:"netlify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netlify","aria-hidden":"true"}},[t._v("#")]),t._v(" Netlify")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("На сайте Netlify добавьте новый проект из GitHub со следующими настройками:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Build Command:")]),t._v(" "),a("code",[t._v("npm run build")]),t._v(" или "),a("code",[t._v("yarn build")])]),t._v(" "),a("li",[a("strong",[t._v("Publish directory:")]),t._v(" "),a("code",[t._v("dist")])])])]),t._v(" "),a("li",[a("p",[t._v("Нажмите кнопку публикации!")])])]),t._v(" "),a("p",[t._v("Также посмотрите "),a("a",{attrs:{href:"https://github.com/netlify/vue-cli-plugin-netlify-lambda",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli-plugin-netlify-lambda"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Для получения прямых хитов при использовании "),a("code",[t._v("режима history")]),t._v(" во Vue Router, необходимо создавть файл "),a("code",[t._v("_redirects")]),t._v(" в каталоге "),a("code",[t._v("/public")]),t._v(" со следующим содержимым:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Настройки Netlify для одностраничных приложений (SPA)\n/*    /index.html   200\n")])])]),a("p",[t._v("Подробнее можно изучить в "),a("a",{attrs:{href:"https://www.netlify.com/docs/redirects/#history-pushstate-and-single-page-apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("документации Netlify по перенаправлениям"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"amazon-s3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amazon-s3","aria-hidden":"true"}},[t._v("#")]),t._v(" Amazon S3")]),t._v(" "),a("p",[t._v("Плагин "),a("a",{attrs:{href:"https://github.com/multiplegeorges/vue-cli-plugin-s3-deploy",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli-plugin-s3-deploy"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"firebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firebase","aria-hidden":"true"}},[t._v("#")]),t._v(" Firebase")]),t._v(" "),a("p",[t._v("Создайте новый проект Firebase в "),a("a",{attrs:{href:"https://console.firebase.google.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("консоли Firebase"),a("OutboundLink")],1),t._v(". Рекомендуем изучить "),a("a",{attrs:{href:"https://firebase.google.com/docs/web/setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("документацию"),a("OutboundLink")],1),t._v(" о том, как настроить проект.")]),t._v(" "),a("p",[t._v("Убедитесь, что у вас глобально установлены "),a("a",{attrs:{href:"https://github.com/firebase/firebase-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("firebase-tools"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g firebase-tools\n")])])]),a("p",[t._v("Из корня вашего проекта инициализируйте "),a("code",[t._v("firebase")]),t._v(" с помощью команды:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("firebase init\n")])])]),a("p",[t._v("Firebase задаст несколько вопросов о том, как настроить проект.")]),t._v(" "),a("ul",[a("li",[t._v("Выберите функции Firebase CLI, которые хотите настроить для проекта. Убедитесь, что выбрали "),a("code",[t._v("hosting")]),t._v(".")]),t._v(" "),a("li",[t._v("Выберите проект Firebase по умолчанию для вашего проекта.")]),t._v(" "),a("li",[t._v("Установите каталог "),a("code",[t._v("public")]),t._v(" в значение "),a("code",[t._v("dist")]),t._v(" (или куда генерируется итоговая сборка), который будет загружаться на Firebase Hosting.")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// firebase.json")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hosting"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"public"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Выберите "),a("code",[t._v("yes")]),t._v(" чтобы настроить проект как одностраничное приложение. Это создаст "),a("code",[t._v("index.html")]),t._v(" и в вашем каталоге "),a("code",[t._v("dist")]),t._v(" и добавит настройки в "),a("code",[t._v("hosting")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// firebase.json")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hosting"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rewrites"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"destination"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/index.html"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Запустите "),a("code",[t._v("npm run build")]),t._v(" для сборки вашего проекта.")]),t._v(" "),a("p",[t._v("Для публикации вашего проекта на Firebase Hosting выполните команду:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("firebase deploy --only hosting\n")])])]),a("p",[t._v("Если вы хотите использовать другие возможности Firebase CLI, которые вы используете в своём проекте для публикации, запустите "),a("code",[t._v("firebase deploy")]),t._v(" без опции "),a("code",[t._v("--only")]),t._v(".")]),t._v(" "),a("p",[t._v("Теперь можно открыть проект по адресу "),a("code",[t._v("https://<YOUR-PROJECT-ID>.firebaseapp.com")]),t._v(".")]),t._v(" "),a("p",[t._v("Обратитесь к "),a("a",{attrs:{href:"https://firebase.google.com/docs/hosting/deploying",target:"_blank",rel:"noopener noreferrer"}},[t._v("документации Firebase"),a("OutboundLink")],1),t._v(" для получения более подробной информации.")]),t._v(" "),a("h3",{attrs:{id:"now"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#now","aria-hidden":"true"}},[t._v("#")]),t._v(" Now")]),t._v(" "),a("ol",[a("li",[t._v("Установите глобально Now CLI:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g now\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("Добавьте файл "),a("code",[t._v("now.json")]),t._v(" в корневой каталог проекта:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-example-app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"static"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"static"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"public"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rewrites"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"source"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destination"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/index.html"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alias"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Можно детальнее настроить статическую публикацию, обратившись к "),a("a",{attrs:{href:"https://zeit.co/docs/deployment-types/static",target:"_blank",rel:"noopener noreferrer"}},[t._v("документации Now"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Добавьте скрипт для публикации в "),a("code",[t._v("package.json")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run build && now && now alias"')]),t._v("\n")])])]),a("p",[t._v("Если вы хотите по умолчанию публиковать публично, то измените команду на следующую:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run build && now --public && now alias"')]),t._v("\n")])])]),a("p",[t._v("Это автоматически установит псевдоним сайта на последнюю публикацию. Теперь просто запустите команду "),a("code",[t._v("npm run deploy")]),t._v(" для публикации приложения.")])])]),t._v(" "),a("h3",{attrs:{id:"stdlib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stdlib","aria-hidden":"true"}},[t._v("#")]),t._v(" Stdlib")]),t._v(" "),a("blockquote",[a("p",[t._v("TODO | Присылайте пулл-реквесты.")])]),t._v(" "),a("h3",{attrs:{id:"heroku"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heroku","aria-hidden":"true"}},[t._v("#")]),t._v(" Heroku")]),t._v(" "),a("blockquote",[a("p",[t._v("TODO | Присылайте пулл-реквесты.")])]),t._v(" "),a("h3",{attrs:{id:"surge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#surge","aria-hidden":"true"}},[t._v("#")]),t._v(" Surge")]),t._v(" "),a("p",[t._v("Публикация с помощью "),a("a",{attrs:{href:"http://surge.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Surge"),a("OutboundLink")],1),t._v(" очень проста.")]),t._v(" "),a("p",[t._v("Сначала, вам потребуется собрать проект командой "),a("code",[t._v("npm run build")]),t._v(". И, если вы не установили утилиту Surge для командной строки, то вы можете сделать это командой:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --global surge\n")])])]),a("p",[t._v("Затем перейдите в каталог "),a("code",[t._v("dist/")]),t._v(" вашего проекта, запустите "),a("code",[t._v("surge")]),t._v(" и следуйте подсказкам на экране. Вас попросят указать электронную почту и пароль, если вы впервые используете Surge. Подтвердите каталог проекта, введите нужный домен и посмотрите как публикуется ваш проект, как примерно выглядит ниже.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("            project: /Users/user/Documents/myawesomeproject/dist/\n         domain: myawesomeproject.surge.sh\n         upload: [====================] 100% eta: 0.0s (31 files, 494256 bytes)\n            CDN: [====================] 100%\n             IP: **.**.***.***\n\n   Success! - Published to myawesomeproject.surge.sh\n")])])]),a("p",[t._v("Убедитесь, что ваш проект успешно опубликован с помощью Surge открыв в браузере "),a("code",[t._v("myawesomeproject.surge.sh")]),t._v("! Дополнительные сведения о настройке, такие как конфигурация пользовательских доменов, можно найти на "),a("a",{attrs:{href:"https://surge.sh/help/",target:"_blank",rel:"noopener noreferrer"}},[t._v("странице справки Surge"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"bitbucket-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitbucket-cloud","aria-hidden":"true"}},[t._v("#")]),t._v(" Bitbucket Cloud")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Как описывается в "),a("a",{attrs:{href:"https://confluence.atlassian.com/bitbucket/publishing-a-website-on-bitbucket-cloud-221449776.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("документации Bitbucket"),a("OutboundLink")],1),t._v(" вам необходимо создать репозиторий названный в точности "),a("code",[t._v("<USERNAME>.bitbucket.io")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Возможно публиковать в подкаталог, например, если требуется иметь несколько веб-сайтов. В этом случае укажите корректный "),a("code",[t._v("publicPath")]),t._v(" в файле "),a("code",[t._v("svelte.config.js")]),t._v(".")]),t._v(" "),a("p",[t._v("Если публикуете по адресу "),a("code",[t._v("https://<USERNAME>.bitbucket.io/")]),t._v(", установку "),a("code",[t._v("publicPath")]),t._v(" можно опустить, поскольку значение по умолчанию "),a("code",[t._v('"/"')]),t._v(".")]),t._v(" "),a("p",[t._v("Если публикуете по адресу "),a("code",[t._v("https://<USERNAME>.bitbucket.io/<SUBFOLDER>/")]),t._v(", нужно задать "),a("code",[t._v("publicPath")]),t._v(" в значение "),a("code",[t._v('"/<SUBFOLDER>/"')]),t._v(". В этом случае структура каталогов должна отражать структуру URL-адресов, например, репозиторий должен иметь каталог "),a("code",[t._v("/<SUBFOLDER>")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("В проекте создайте "),a("code",[t._v("deploy.sh")]),t._v(" с указанным содержимым и запустите его для публикации:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# остановиться при ошибках")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# сборка")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# переход в каталог итоговой сборки")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" dist\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@bitbucket.org:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("USERNAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("USERNAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".bitbucket.io.git master\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" -\n")])])])])])])},[],!1,null,null,null);s.default=n.exports}}]);