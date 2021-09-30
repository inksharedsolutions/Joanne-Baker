import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book3 from '../../static/books/book3.png'
import { Helmet } from 'react-helmet'

const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'larry-e-banta-md',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="Book | Larry E. Banta, MD" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About the`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Help for the Hurting Child:`,
                                spanFirst: `Christian Approaches to Therapeutic Parenting`,
                                imgSrc: Book3,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                        The primary purpose of this book is to assist those caring for children unable to be with their original parents. There are many reasons this occurs. Some might be truly orphaned, their parents having died from AIDS, Ebola, or another epidemic or because of an accident, war, terrorism, or some other illness or tragedy. Others perhaps come from situations in which original parents or adoptive parents are not able to care for them due to factors related to either the child or parents. Whatever the situation, these children do not have the advantage of living with their original set of parents and are now in some type of alternative home placement.
                                        </p> 
                                        <p>
                                        The placement may be a foster home, adoptive home, orphanage, children's home, residential school, or other type of placement.
                                        </p>
                                        <p>
                                        Caring for these special children, who are hurting from having been separated from their original parents, is a difficult, challenging, but rewarding ministry.
                                        </p>
                                        <p>
                                        As Christians, we are commanded to care for the widows and orphans, as this fulfills true religion:
                                        </p>
                                        <span>
                                        Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world. <br/>-James 1:27
                                        <span/>
                                        
                                        
                                    `,

                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/help-for-the-hurting-child-md-fapa-larry-banta-e/1139976652?ean=9781648954832',
                                    amazon: 'https://www.amazon.com/Help-Hurting-Child-Approaches-Therapeutic-ebook/dp/B09C21XNVZ/ref=sr_1_1?dchild=1&keywords=9781648954832&qid=1628545767&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Help-Hurting-Child-Approaches-Therapeutic/dp/1648954820/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1628545767&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/help-for-the-hurting-child-md-fapa-larry-banta-e/1139976652?ean=9781648954825',
                                    booksamillion: 'https://www.booksamillion.com/p/Help-Hurting-Child/Fapa-Larry-Banta/9781648954825?id=8312449787077',
                                }
                            }}
                        />

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;