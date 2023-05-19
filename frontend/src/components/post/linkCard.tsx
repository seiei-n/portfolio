//make link card component
import Link from "next/link";
import { tagstringToArray } from "@/lib/filter";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "@/styles/components/post/linkCard.module.scss";
import { stringify } from "querystring";


export type LinkCardParams = {
    url: string;
    title : string;
    thumbnail: string;
    description: string;
};

export default function LinkCard({ url }: LinkCardParams) {}

