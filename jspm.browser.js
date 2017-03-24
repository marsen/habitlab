SystemJS.config({
  baseURL: "/",
  paths: {
    "npm:": "src/jspm_packages/npm/",
    "github:": "src/jspm_packages/github/"
  },
  bundles: {
    "bundles/text.js": [
      "github:systemjs/plugin-text@0.0.8/text.js",
      "github:systemjs/plugin-text@0.0.8.json"
    ],
    "bundles/js-yaml.js": [
      "github:nodeca/js-yaml@master/dist/js-yaml.js",
      "github:nodeca/js-yaml@master.json"
    ],
    "bundles/underscore.js": [
      "npm:underscore@1.8.3/underscore.js",
      "npm:underscore@1.8.3.json"
    ],
    "bundles/enable-webcomponents-in-content-scripts.js": [
      "npm:enable-webcomponents-in-content-scripts@1.0.7/index.js",
      "npm:enable-webcomponents-in-content-scripts@1.0.7.json",
      "npm:webcomponentsjs-custom-element-v0@1.0.1/CustomElements.js",
      "npm:webcomponentsjs-custom-element-v0@1.0.1.json"
    ],
    "bundles/prettyprintjs.js": [
      "npm:prettyprintjs@0.1.12/index.js",
      "npm:prettyprintjs@0.1.12.json"
    ],
    "bundles/sweetalert2.js": [
      "npm:sweetalert2@6.3.2/dist/sweetalert2.js",
      "npm:sweetalert2@6.3.2.json"
    ],
    "bundles/jquery.js": [
      "npm:jquery@3.1.1/dist/jquery.js",
      "npm:jquery@3.1.1.json"
    ],
    "bundles/shuffled.js": [
      "npm:shuffled@1.0.0/index.js",
      "npm:shuffled@1.0.0.json",
      "npm:shuffle-array@1.0.0/index.js",
      "npm:shuffle-array@1.0.0.json"
    ],
    "bundles/moment.js": [
      "npm:moment@2.17.1/moment.js",
      "npm:moment@2.17.1.json"
    ],
    "bundles/promise-debounce.js": [
      "npm:promise-debounce@1.0.1/index.js",
      "npm:promise-debounce@1.0.1.json"
    ],
    "bundles/cfy.js": [
      "npm:cfy@1.0.20/index.js",
      "npm:cfy@1.0.20.json",
      "npm:unthenify@1.0.4/dist/index.js",
      "npm:unthenify@1.0.4.json",
      "npm:util-arity@1.1.0/arity.js",
      "npm:util-arity@1.1.0.json",
      "npm:co@4.6.0/index.js",
      "npm:co@4.6.0.json"
    ],
    "bundles/dexie.js": [
      "npm:dexie@1.5.1/dist/dexie.js",
      "npm:dexie@1.5.1.json",
      "npm:jspm-nodelibs-process@0.2.0/process.js",
      "npm:jspm-nodelibs-process@0.2.0.json"
    ],
    "bundles/livescript15.js": [
      "npm:livescript15@1.5.4/lib/browser.js",
      "npm:livescript15@1.5.4.json",
      "npm:jspm-nodelibs-process@0.2.0/process.js",
      "npm:jspm-nodelibs-process@0.2.0.json",
      "npm:livescript15@1.5.4/lib/index.js",
      "npm:jspm-nodelibs-buffer@0.2.1/global.js",
      "npm:jspm-nodelibs-buffer@0.2.1.json",
      "npm:buffer@4.9.1/index.js",
      "npm:buffer@4.9.1.json",
      "npm:isarray@1.0.0/index.js",
      "npm:isarray@1.0.0.json",
      "npm:ieee754@1.1.8/index.js",
      "npm:ieee754@1.1.8.json",
      "npm:base64-js@1.2.0/index.js",
      "npm:base64-js@1.2.0.json",
      "npm:jspm-nodelibs-path@0.2.1/path.js",
      "npm:jspm-nodelibs-path@0.2.1.json",
      "npm:livescript15@1.5.4/lib/source-map.js",
      "npm:livescript15@1.5.4/lib/ast.js",
      "npm:livescript15@1.5.4/lib/util.js",
      "npm:prelude-ls@1.1.2/lib/index.js",
      "npm:prelude-ls@1.1.2.json",
      "npm:prelude-ls@1.1.2/lib/Num.js",
      "npm:prelude-ls@1.1.2/lib/Str.js",
      "npm:prelude-ls@1.1.2/lib/Obj.js",
      "npm:prelude-ls@1.1.2/lib/List.js",
      "npm:prelude-ls@1.1.2/lib/Func.js",
      "npm:livescript15@1.5.4/lib/parser.js",
      "npm:jspm-nodelibs-fs@0.2.0/fs.js",
      "npm:jspm-nodelibs-fs@0.2.0.json",
      "npm:livescript15@1.5.4/lib/lexer.js"
    ],
    "bundles/cheerio.js": [
      "npm:cheerio@0.22.0/index.js",
      "npm:cheerio@0.22.0.json",
      "npm:cheerio@0.22.0/package.json",
      "npm:cheerio@0.22.0/lib/cheerio.js",
      "npm:cheerio@0.22.0/lib/static.js",
      "npm:lodash.defaults@4.2.0/index.js",
      "npm:lodash.defaults@4.2.0.json",
      "npm:lodash.merge@4.6.0/index.js",
      "npm:lodash.merge@4.6.0.json",
      "npm:jspm-nodelibs-buffer@0.2.1/global.js",
      "npm:jspm-nodelibs-buffer@0.2.1.json",
      "npm:buffer@4.9.1/index.js",
      "npm:buffer@4.9.1.json",
      "npm:jspm-nodelibs-process@0.2.0/process.js",
      "npm:jspm-nodelibs-process@0.2.0.json",
      "npm:isarray@1.0.0/index.js",
      "npm:isarray@1.0.0.json",
      "npm:ieee754@1.1.8/index.js",
      "npm:ieee754@1.1.8.json",
      "npm:base64-js@1.2.0/index.js",
      "npm:base64-js@1.2.0.json",
      "npm:cheerio@0.22.0/lib/parse.js",
      "npm:htmlparser2@3.9.2/lib/index.js",
      "npm:htmlparser2@3.9.2.json",
      "npm:htmlparser2@3.9.2/lib/CollectingHandler.js",
      "npm:domutils@1.5.1/index.js",
      "npm:domutils@1.5.1.json",
      "npm:domutils@1.5.1/lib/helpers.js",
      "npm:domutils@1.5.1/lib/legacy.js",
      "npm:domelementtype@1.3.0/index.js",
      "npm:domelementtype@1.3.0.json",
      "npm:domutils@1.5.1/lib/querying.js",
      "npm:domutils@1.5.1/lib/manipulation.js",
      "npm:domutils@1.5.1/lib/traversal.js",
      "npm:domutils@1.5.1/lib/stringify.js",
      "npm:dom-serializer@0.1.0/index.js",
      "npm:dom-serializer@0.1.0.json",
      "npm:entities@1.1.1/index.js",
      "npm:entities@1.1.1.json",
      "npm:entities@1.1.1/lib/decode.js",
      "npm:entities@1.1.1/lib/decode_codepoint.js",
      "npm:entities@1.1.1/maps/decode.json",
      "npm:entities@1.1.1/maps/xml.json",
      "npm:entities@1.1.1/maps/legacy.json",
      "npm:entities@1.1.1/maps/entities.json",
      "npm:entities@1.1.1/lib/encode.js",
      "npm:domelementtype@1.1.3/index.js",
      "npm:domelementtype@1.1.3.json",
      "npm:htmlparser2@3.9.2/lib/ProxyHandler.js",
      "npm:htmlparser2@3.9.2/lib/WritableStream.js",
      "npm:inherits@2.0.3/inherits_browser.js",
      "npm:inherits@2.0.3.json",
      "npm:string_decoder@0.10.31/index.js",
      "npm:string_decoder@0.10.31.json",
      "npm:jspm-nodelibs-string_decoder@0.2.0.json",
      "npm:readable-stream@2.2.2/readable.js",
      "npm:readable-stream@2.2.2.json",
      "npm:readable-stream@2.2.2/lib/_stream_passthrough.js",
      "npm:core-util-is@1.0.2/lib/util.js",
      "npm:core-util-is@1.0.2.json",
      "npm:readable-stream@2.2.2/lib/_stream_transform.js",
      "npm:readable-stream@2.2.2/lib/_stream_duplex.js",
      "npm:readable-stream@2.2.2/lib/_stream_writable.js",
      "npm:buffer-shims@1.0.0/index.js",
      "npm:buffer-shims@1.0.0.json",
      "npm:jspm-nodelibs-events@0.2.0/events.js",
      "npm:jspm-nodelibs-events@0.2.0.json",
      "npm:util-deprecate@1.0.2/browser.js",
      "npm:util-deprecate@1.0.2.json",
      "npm:process-nextick-args@1.0.7/index.js",
      "npm:process-nextick-args@1.0.7.json",
      "npm:readable-stream@2.2.2/lib/_stream_readable.js",
      "npm:readable-stream@2.2.2/lib/internal/streams/BufferList.js",
      "npm:stream-browserify@2.0.1/index.js",
      "npm:stream-browserify@2.0.1.json",
      "npm:readable-stream@2.2.3/passthrough.js",
      "npm:readable-stream@2.2.3.json",
      "npm:readable-stream@2.2.3/lib/_stream_passthrough.js",
      "npm:readable-stream@2.2.3/lib/_stream_transform.js",
      "npm:readable-stream@2.2.3/lib/_stream_duplex.js",
      "npm:readable-stream@2.2.3/lib/_stream_writable.js",
      "npm:readable-stream@2.2.3/lib/_stream_readable.js",
      "npm:readable-stream@2.2.3/lib/internal/streams/BufferList.js",
      "npm:readable-stream@2.2.3/transform.js",
      "npm:readable-stream@2.2.3/duplex.js",
      "npm:readable-stream@2.2.3/writable.js",
      "npm:readable-stream@2.2.3/readable.js",
      "npm:jspm-nodelibs-stream@0.2.0.json",
      "npm:htmlparser2@3.9.2/lib/Parser.js",
      "npm:htmlparser2@3.9.2/lib/Tokenizer.js",
      "npm:htmlparser2@3.9.2/lib/Stream.js",
      "npm:htmlparser2@3.9.2/lib/FeedHandler.js",
      "npm:domhandler@2.3.0/index.js",
      "npm:domhandler@2.3.0.json",
      "npm:domhandler@2.3.0/lib/element.js",
      "npm:domhandler@2.3.0/lib/node.js",
      "npm:css-select@1.2.0/index.js",
      "npm:css-select@1.2.0.json",
      "npm:css-select@1.2.0/lib/compile.js",
      "npm:css-select@1.2.0/lib/pseudos.js",
      "npm:boolbase@1.0.0/index.js",
      "npm:boolbase@1.0.0.json",
      "npm:css-select@1.2.0/lib/attributes.js",
      "npm:nth-check@1.0.1/index.js",
      "npm:nth-check@1.0.1.json",
      "npm:nth-check@1.0.1/compile.js",
      "npm:nth-check@1.0.1/parse.js",
      "npm:css-select@1.2.0/lib/procedure.json",
      "npm:css-select@1.2.0/lib/sort.js",
      "npm:css-select@1.2.0/lib/general.js",
      "npm:css-what@2.1.0/index.js",
      "npm:css-what@2.1.0.json",
      "npm:cheerio@0.22.0/lib/api/forms.js",
      "npm:lodash.map@4.6.0/index.js",
      "npm:lodash.map@4.6.0.json",
      "npm:cheerio@0.22.0/lib/api/css.js",
      "npm:lodash.pick@4.4.0/index.js",
      "npm:lodash.pick@4.4.0.json",
      "npm:cheerio@0.22.0/lib/utils.js",
      "npm:cheerio@0.22.0/lib/api/manipulation.js",
      "npm:lodash.foreach@4.5.0/index.js",
      "npm:lodash.foreach@4.5.0.json",
      "npm:lodash.bind@4.2.1/index.js",
      "npm:lodash.bind@4.2.1.json",
      "npm:lodash.flatten@4.4.0/index.js",
      "npm:lodash.flatten@4.4.0.json",
      "npm:cheerio@0.22.0/lib/api/traversing.js",
      "npm:lodash.reduce@4.6.0/index.js",
      "npm:lodash.reduce@4.6.0.json",
      "npm:lodash.filter@4.6.0/index.js",
      "npm:lodash.filter@4.6.0.json",
      "npm:lodash.reject@4.6.0/index.js",
      "npm:lodash.reject@4.6.0.json",
      "npm:cheerio@0.22.0/lib/api/attributes.js",
      "npm:lodash.some@4.6.0/index.js",
      "npm:lodash.some@4.6.0.json",
      "npm:lodash.assignin@4.2.0/index.js",
      "npm:lodash.assignin@4.2.0.json"
    ],
    "bundles/intervention-editor-libs.js": [
      "npm:sweetjs-min@2.2.14/dist/sweet.js",
      "npm:sweetjs-min@2.2.14.json",
      "npm:jspm-nodelibs-process@0.2.0/process.js",
      "npm:jspm-nodelibs-process@0.2.0.json",
      "npm:sweetjs-min@2.2.14/dist/node-module-loader.js",
      "npm:jspm-nodelibs-fs@0.2.0/fs.js",
      "npm:jspm-nodelibs-fs@0.2.0.json",
      "npm:sweetjs-min@2.2.14/dist/node-module-resolver.js",
      "npm:sweetjs-min@2.2.14/dist/modules.js",
      "npm:sweetjs-min@2.2.14/dist/syntax.js",
      "npm:shift-parser@4.1.3/dist/tokenizer.js",
      "npm:shift-parser@4.1.3.json",
      "npm:shift-parser@4.1.3/dist/errors.js",
      "npm:shift-parser@4.1.3/dist/utils.js",
      "npm:esutils@2.0.2/lib/utils.js",
      "npm:esutils@2.0.2.json",
      "npm:esutils@2.0.2/lib/keyword.js",
      "npm:esutils@2.0.2/lib/code.js",
      "npm:esutils@2.0.2/lib/ast.js",
      "npm:ramda@0.19.1/dist/ramda.js",
      "npm:ramda@0.19.1.json",
      "npm:ramda-fantasy@0.4.1/index.js",
      "npm:ramda-fantasy@0.4.1.json",
      "npm:ramda-fantasy@0.4.1/src/Reader.js",
      "npm:ramda@0.17.1/dist/ramda.js",
      "npm:ramda@0.17.1.json",
      "npm:ramda-fantasy@0.4.1/src/Tuple.js",
      "npm:ramda-fantasy@0.4.1/src/Maybe.js",
      "npm:ramda-fantasy@0.4.1/src/internal/util.js",
      "npm:ramda-fantasy@0.4.1/src/lift3.js",
      "npm:ramda-fantasy@0.4.1/src/lift2.js",
      "npm:ramda-fantasy@0.4.1/src/IO.js",
      "npm:ramda-fantasy@0.4.1/src/Identity.js",
      "npm:ramda-fantasy@0.4.1/src/Future.js",
      "npm:ramda-fantasy@0.4.1/src/Either.js",
      "npm:sweetjs-min@2.2.14/dist/binding-map.js",
      "npm:sweetjs-min@2.2.14/dist/errors.js",
      "npm:immutable@3.8.1/dist/immutable.js",
      "npm:immutable@3.8.1.json",
      "npm:sweetjs-min@2.2.14/dist/hygiene-utils.js",
      "npm:sweetjs-min@2.2.14/dist/ast-dispatcher.js",
      "npm:sweetjs-min@2.2.14/dist/scope.js",
      "npm:sweetjs-min@2.2.14/dist/symbol.js",
      "npm:sweetjs-min@2.2.14/dist/transforms.js",
      "npm:sweetjs-min@2.2.14/dist/compiler.js",
      "npm:sweetjs-min@2.2.14/dist/token-expander.js",
      "npm:sweetjs-min@2.2.14/dist/load-syntax.js",
      "npm:jspm-nodelibs-vm@0.2.0/vm.js",
      "npm:jspm-nodelibs-vm@0.2.0.json",
      "npm:sweetjs-min@2.2.14/dist/template-processor.js",
      "npm:sweetjs-min@2.2.14/dist/macro-context.js",
      "npm:sweetjs-min@2.2.14/dist/enforester.js",
      "npm:sweetjs-min@2.2.14/dist/operators.js",
      "npm:sweetjs-min@2.2.14/dist/terms.js",
      "npm:sweet-spec@1.1.0/dist/term-spec.js",
      "npm:sweet-spec@1.1.0.json",
      "npm:sweetjs-min@2.2.14/dist/shift-reader.js",
      "npm:shift-codegen@4.0.3/dist/index.js",
      "npm:shift-codegen@4.0.3.json",
      "npm:shift-codegen@4.0.3/dist/token_stream.js",
      "npm:shift-reducer@3.0.3/dist/index.js",
      "npm:shift-reducer@3.0.3.json",
      "npm:shift-spec@2015.2.1/dist/index.js",
      "npm:shift-spec@2015.2.1.json",
      "npm:shift-reducer@3.0.3/dist/monoidal-reducer.js",
      "npm:shift-reducer@3.0.3/dist/clone-reducer.js",
      "npm:shift-codegen@4.0.3/dist/coderep.js",
      "npm:shift-codegen@4.0.3/dist/formatted-codegen.js",
      "npm:object-assign@3.0.0/index.js",
      "npm:object-assign@3.0.0.json",
      "npm:shift-codegen@4.0.3/dist/minimal-codegen.js",
      "npm:sweetjs-min@2.2.14/dist/serializer.js",
      "npm:transit-js@0.8.846/transit.js",
      "npm:transit-js@0.8.846.json",
      "npm:jspm-nodelibs-buffer@0.2.1/global.js",
      "npm:jspm-nodelibs-buffer@0.2.1.json",
      "npm:buffer@4.9.1/index.js",
      "npm:buffer@4.9.1.json",
      "npm:isarray@1.0.0/index.js",
      "npm:isarray@1.0.0.json",
      "npm:ieee754@1.1.8/index.js",
      "npm:ieee754@1.1.8.json",
      "npm:base64-js@1.2.0/index.js",
      "npm:base64-js@1.2.0.json",
      "npm:sweetjs-min@2.2.14/dist/parse-reducer.js",
      "npm:sweetjs-min@2.2.14/dist/env.js",
      "npm:sweetjs-min@2.2.14/dist/term-expander.js",
      "npm:sweetjs-min@2.2.14/dist/apply-scope-in-params-reducer.js",
      "npm:sweetjs-min@2.2.14/dist/store.js",
      "npm:prettier-min@0.15.3/index.js",
      "npm:prettier-min@0.15.3.json",
      "npm:prettier-min@0.15.3/src/doc-debug.js",
      "npm:prettier-min@0.15.3/src/parser.js",
      "npm:babylon@6.15.0/lib/index.js",
      "npm:babylon@6.15.0.json",
      "npm:prettier-min@0.15.3/src/options.js",
      "npm:prettier-min@0.15.3/src/deprecated.js",
      "npm:jest-validate@18.2.0/build/index.js",
      "npm:jest-validate@18.2.0.json",
      "npm:jest-validate@18.2.0/build/validate.js",
      "npm:jest-validate@18.2.0/build/defaultConfig.js",
      "npm:jest-validate@18.2.0/build/utils.js",
      "npm:leven@2.0.0/index.js",
      "npm:leven@2.0.0.json",
      "npm:pretty-format@18.1.0/build/index.js",
      "npm:pretty-format@18.1.0.json",
      "npm:pretty-format@18.1.0/build/printString.js",
      "npm:ansi-styles@2.2.1/index.js",
      "npm:ansi-styles@2.2.1.json",
      "npm:chalk@1.1.3/index.js",
      "npm:chalk@1.1.3.json",
      "npm:supports-color@2.0.0/index.js",
      "npm:supports-color@2.0.0.json",
      "npm:has-ansi@2.0.0/index.js",
      "npm:has-ansi@2.0.0.json",
      "npm:ansi-regex@2.1.1/index.js",
      "npm:ansi-regex@2.1.1.json",
      "npm:strip-ansi@3.0.1/index.js",
      "npm:strip-ansi@3.0.1.json",
      "npm:escape-string-regexp@1.0.5/index.js",
      "npm:escape-string-regexp@1.0.5.json",
      "npm:jest-validate@18.2.0/build/condition.js",
      "npm:jest-validate@18.2.0/build/exampleConfig.js",
      "npm:jest-validate@18.2.0/build/errors.js",
      "npm:jest-matcher-utils@18.1.0/build/index.js",
      "npm:jest-matcher-utils@18.1.0.json",
      "npm:jest-validate@18.2.0/build/warnings.js",
      "npm:jest-validate@18.2.0/build/deprecated.js",
      "npm:prettier-min@0.15.3/src/doc-printer.js",
      "npm:prettier-min@0.15.3/src/printer.js",
      "npm:ast-types@0.9.4/main.js",
      "npm:ast-types@0.9.4.json",
      "npm:ast-types@0.9.4/def/babel6.js",
      "npm:ast-types@0.9.4/lib/shared.js",
      "npm:ast-types@0.9.4/lib/types.js",
      "npm:ast-types@0.9.4/def/flow.js",
      "npm:ast-types@0.9.4/def/es7.js",
      "npm:ast-types@0.9.4/def/es6.js",
      "npm:ast-types@0.9.4/def/core.js",
      "npm:ast-types@0.9.4/def/babel.js",
      "npm:ast-types@0.9.4/def/esprima.js",
      "npm:ast-types@0.9.4/def/jsx.js",
      "npm:ast-types@0.9.4/def/e4x.js",
      "npm:ast-types@0.9.4/def/mozilla.js",
      "npm:ast-types@0.9.4/fork.js",
      "npm:ast-types@0.9.4/lib/path-visitor.js",
      "npm:ast-types@0.9.4/lib/node-path.js",
      "npm:ast-types@0.9.4/lib/scope.js",
      "npm:ast-types@0.9.4/lib/path.js",
      "npm:ast-types@0.9.4/lib/equiv.js",
      "npm:prettier-min@0.15.3/src/doc-utils.js",
      "npm:prettier-min@0.15.3/src/doc-builders.js",
      "npm:prettier-min@0.15.3/src/util.js",
      "npm:jspm-nodelibs-assert@0.2.0/assert.js",
      "npm:jspm-nodelibs-assert@0.2.0.json",
      "npm:jspm-nodelibs-util@0.2.1/util.js",
      "npm:jspm-nodelibs-util@0.2.1.json",
      "npm:jspm-nodelibs-util@0.2.1/isBufferBrowser.js",
      "npm:prettier-min@0.15.3/src/fast-path.js",
      "npm:prettier-min@0.15.3/src/comments.js",
      "npm:prettier-min@0.15.3/package.json",
      "npm:babel-code-frame@6.22.0/lib/index.js",
      "npm:babel-code-frame@6.22.0.json",
      "npm:js-tokens@3.0.1/index.js",
      "npm:js-tokens@3.0.1.json",
      "npm:list_requires_multi@1.0.0/index.js",
      "npm:list_requires_multi@1.0.0.json",
      "npm:esprima-walk@0.1.0/esprima-walk.js",
      "npm:esprima-walk@0.1.0.json",
      "npm:esprima@3.1.3/dist/esprima.js",
      "npm:esprima@3.1.3.json",
      "npm:brace@0.9.1/theme/monokai.js",
      "npm:brace@0.9.1.json",
      "npm:brace@0.9.1/mode/livescript.js",
      "npm:brace@0.9.1/mode/javascript.js",
      "npm:brace@0.9.1/worker/javascript.js",
      "npm:brace@0.9.1/mode/html.js",
      "npm:brace@0.9.1/worker/html.js",
      "npm:brace@0.9.1/worker/css.js",
      "npm:brace@0.9.1/index.js",
      "npm:w3c-blob@0.0.1/browser.js",
      "npm:w3c-blob@0.0.1.json"
    ]
  }
});
