import dynamic from 'next/dynamic';
import React, { ReactElement, ComponentType, Suspense } from 'react';
import Header from "@/components/Header/Header";
import posts from '../../../../public/json/posts.json';
import { Metadata } from 'next';
import Footer from '@/components/Footer/Footer';

interface ComponentMap {
    [key: string]: ComponentType<any>;
}

const componentMap: ComponentMap = {
    'what-does-json-stand-for': dynamic(() => import('../../../components/blog/one'))
};
  

const BlogPost = ({params}: {params: { slug: string }}): ReactElement => {
    const path = params.slug;
    const blogPath: string = Array.isArray(path) ? path[0] : path || '';
    const SelectedComponent: ComponentType<any> = componentMap[blogPath] || (() => <p>Blog not found</p>);
    return <>
        <Header />
        <Suspense>
            <SelectedComponent />
        </Suspense>
        <Footer />
    </>
};

export async function generateMetadata({params}: {params: { slug: string }}):Promise<Metadata>{
    const path = params.slug;
    const post = posts.filter((post)=> post.slug.name === path);
    const metadata = post[0].metadata;
    return metadata;
}

export default BlogPost;
