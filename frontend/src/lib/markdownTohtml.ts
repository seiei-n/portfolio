import { unified } from "unified";
import { remark } from "remark";
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'



export  const markdownToHtml = async (markdown: string) => {
    const result = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(markdown)
    return result.toString()
}



