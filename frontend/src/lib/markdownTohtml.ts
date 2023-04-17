import { unified } from "unified";
import { remark } from "remark";
import html from "remark-html";
import slug from "remark-slug";
import toc from "remark-toc";

export async function markdownToHtml({
    markdown,
}: {
    markdown: string;
}): Promise<string> {
    const result = await unified()
        .use(remark)
        .use(slug)
        .use(toc)
        .use(html)
        .process(markdown);
    return result.toString();
}

