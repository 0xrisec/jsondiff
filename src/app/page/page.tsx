"use client"

import dynamic from 'next/dynamic';
import React, { ReactElement, ComponentType, Suspense } from 'react';
import Header from "@/components/Header/Header";

import { Metadata } from "next";

const metadata: Metadata = {
    title: 'JSON Diff - Validate, Format, and Compare JSON',
    description: 'Validate, format, and compare JSON data with JSON Diff.',
    authors: [{ name: "0xrisec", url: "https://www.linkedin.com/in/0xrisec/" }],
    applicationName: 'jsondiff',
    generator: 'jsondiff',
    keywords: "json diff, semantic json compare tool, json comparison tool, Format JSON, Compare JSON documents, Securely Compare JSON, JSON comparison",
    robots: "json diff, json comparison",
    openGraph: {
        type: "website",
        url: "https://jsondiff.in/",
        title: "JSON Diff - Validate, Format, and Compare JSON",
        description: "Validate, format, and compare JSON data with JSON Diff.",
        siteName: "jsondiff",
        images: [{
            url: "https://jsondiff.in/assets/images/jsondiff.png",
        }],
    }
};

interface ComponentMap {
    [key: string]: ComponentType<any>;
}

const componentMap: ComponentMap = {
    '1': dynamic(() => import('../../components/blog/one'))
};
  
const BlogPost = (): ReactElement => {
    const id = 1;
    const blogId: string = Array.isArray(id) ? id[0] : id || '';
    const SelectedComponent: ComponentType<any> = componentMap[blogId] || (() => <p>Blog not found</p>);
    return <>
        <Header />
        <Suspense>
            <SelectedComponent />
        </Suspense>
    </>
};

export default BlogPost;
