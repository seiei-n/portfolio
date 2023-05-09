import { BlogCardParams } from "@/components/blog/card";

type Props = {
    posts: string[];
};

export default function Post({ posts }: Props) {
    return (
        <div>
            {posts.map((post) => (
                <p key={post}>{post}</p>
            ))}
        </div>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/posts");
    const posts = await res.json();
    return {
        props: {
            posts: posts,
        },
    };
}