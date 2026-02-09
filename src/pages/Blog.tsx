import React from 'react';
import Layout from '../components/Layout';
import Bradcam from '../components/Bradcam';
import BlogArea from '../components/BlogArea';

const BlogPage: React.FC = () => {
    return (
        <Layout>
            <Bradcam title="Blog" bgClass="bradcam_bg_2" />
            <BlogArea />
        </Layout>
    );
};

export default BlogPage;
