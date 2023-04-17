
// import { markdownTohtml } from "../lib/markdownTohtml";
// import { markdownfile } from "../lib/markdownTohtml";

type Props = {
    markdown: string;
};


export default function Works({ markdown }: Props) {
  return (
    <div>
      <h1>Works</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: markdown }} /> */}
    </div>
  );
}

// export async function getServerSideProps() {
//     const markdown = await markdownTohtml(markdownfile);
//     return {
//         props: {
//             markdown,
//         },
//     };
// }
