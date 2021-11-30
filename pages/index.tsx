import Link from 'next/link'
import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'

export default function Index() {
    return (
        <MainLayout title="Home page">
            <h1>Hello nextjs</h1>
            <p><Link href="/about"><a href="/about">About</a></Link></p>
            <p><Link href="/posts"><a href="/posts">Posts</a></Link></p>
        </MainLayout>
    )
}
