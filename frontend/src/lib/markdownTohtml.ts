import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrismGenerater from "rehype-prism-plus/generator";
import remarkMath from "remark-math";
import rehypeMathJaxSvg from "rehype-mathjax";
import { refractor } from "refractor";
import refractorClike from "refractor/lang/clike";
import refractorCpp from "refractor/lang/cpp";
import refractorCsharp from "refractor/lang/csharp";
import refractorCss from "refractor/lang/css";
import refractorDart from "refractor/lang/dart";
import refractorGo from "refractor/lang/go";
import refractorJava from "refractor/lang/java";
import refractorJavascript from "refractor/lang/javascript";
import refractorJson from "refractor/lang/json";
import refractorKotlin from "refractor/lang/kotlin";
import refractorPhp from "refractor/lang/php";
import refractorPython from "refractor/lang/python";
import refractorRuby from "refractor/lang/ruby";
import refractorTypescript from "refractor/lang/typescript";
import refractorYaml from "refractor/lang/yaml";
import refractorBash from "refractor/lang/bash";
import refractorC from "refractor/lang/c";
import refractorCmake from "refractor/lang/cmake";
import refractorDocker from "refractor/lang/docker";
import refractorGit from "refractor/lang/git";
import refractorIni from "refractor/lang/ini";
import refractorGraphQL from "refractor/lang/graphql";

refractor.register(refractorClike);
refractor.register(refractorCpp);
refractor.register(refractorCsharp);
refractor.register(refractorCss);
refractor.register(refractorDart);
refractor.register(refractorGo);
refractor.register(refractorJava);
refractor.register(refractorJavascript);
refractor.register(refractorJson);
refractor.register(refractorKotlin);
refractor.register(refractorPhp);
refractor.register(refractorPython);
refractor.register(refractorRuby);
refractor.register(refractorTypescript);
refractor.register(refractorYaml);
refractor.register(refractorBash);
refractor.register(refractorC);
refractor.register(refractorCmake);
refractor.register(refractorDocker);
refractor.register(refractorGit);

refractor.register(refractorIni);
refractor.register(refractorGraphQL);

const rehypePrism = rehypePrismGenerater(refractor);

export const markdownToHtml = async (markdown: string) => {
    const result = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(remarkMath)
        .use(rehypeMathJaxSvg)
        .use(rehypePrism)
        .use(rehypeStringify)
        .process(markdown);
    return result.toString();
};
