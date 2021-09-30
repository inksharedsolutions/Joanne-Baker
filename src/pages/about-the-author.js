import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'
import { Helmet } from 'react-helmet'

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="Author | Larry E. Banta, MD" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="Larry E. Banta, MD"/>
                            </div>

                            {/* <div className="heading-quote"> */}
                            {/* <span className="ata-span-fx"> */}
                                <h4> 
                                We must be all about PASSING OUR FAITH ALONG <br/>

•	By walking the talk <br/>
•	By talking the walk<br/>
•	By living the Word <br/>

In order to be salt and light in the lives of the children.<br/>


IT TAKES MORE THAN LOVE—IT TAKES AGAPE LOVE.                                
                                </h4>
                                {/* </span> */}
                    
                            

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Larry Banta was born and raised in Ohio, on a farm near Cincinnati. Upon graduating high school in Lebanon, Ohio, he left for college in Lincoln, Nebraska, where he obtained a BS in microbiology. From there, he attended University of Nebraska Medical College, where he was awarded his MD degree.
                            </p>
                            <p>
                            During his junior year in college, everything changed for him when he accepted Christ into his life. He soon met and married Ellen Fairbrother, a missionary kid from India. The two shared a passion for children and for missions. On a Reader’s Digest Medical Assistance Program scholarship, he was able to complete the last three months of medical school at an orphanage in India, where he was introduced to foreign missions. During the couple’s time in India, Ellen started a preschool, while Larry helped design a mission hospital and assess local medical needs.
                            </p>
                            <p>
                            With plans to return to India for medical training and future medical mission work, Larry completed an internship in internal medicine and completed two years of general practice in South Dakota on the Yankton Sioux Reservation serving the local tribe. Efforts were made to return to India but visas for physicians were being denied at that time.  Instead, the couple and their now 3 children headed to Kenya for a twenty-month tour. The first year was post-famine rehabilitation/medical work among the Pokot tribe located in Kiwawa, West Pokot. While there Larry had to manage 3 major epidemics, dysentery, polio, and a second dysentery. The work was very hard and dangerous. Larry was airlifted to a hospital in one of the nearby cities after contracting and nearly dying from hepatitis. After recovery and the start of the second the family moved upcountry to the Samburu district. There they developed a clinic, and a church. Ellen developed health problems so it became necessary to return to the United States in 1984.
                            </p>
                            <p>
                            It was with feelings of failure and discouragement that the Banta’s returned to the United States. While praying on the return flight, it became evident that God was leading them in a particular direction—psychiatric practice for Larry. At first, the calling did not seem to make sense, as they deeply desired to serve in the mission field, and psychiatry had not made it there yet. On arrival in the United States, they were privileged to stay with retired missionaries Norton and Lois Bare, Ellen’s grandparents. Both were elderly, and Norton suffered from Alzheimer’s disease. He was a retired psychiatrist. With no apparent knowledge of Larry’s time with God on the trip, Norton took all his recent psychiatric journals and newsletters and carefully pile them on the couch, where they waited for Larry’s arrival. Prior to and subsequent to the time he placed them on the couch and announced, “These are for Larry; he needs them,” he had few other words that made any sense. It was his final service for God, apparently.
                            </p>
                            <p>
                            Seeing the collection on the couch was the turning point—there was no doubt what God desired for Larry. He called a prior professor  from medical school and had a training position within a few minutes.

Following general psychiatry residency, Larry completed a fellowship in child and adolescent psychiatry. During training, he was introduced to working with foster parents and out-of-home-placed special-needs children, specifically with those who had attachment disorders.

                            </p>
                            <p>
                            During the next few years, following completion of training, Larry made efforts to connect with children’s ministries. As a family, the Banta’s traveled to Haiti to provide some medical care for children in a school there and consult with the hospital locally. This opened many doors, and it became evident that psychiatric care had something to offer. They were invited back to Haiti annually for several years. During that time, they made contact with Niños de Mexico, a Christian home for children in Mexico City. On inquiry, the administration was excited about a visit from a psychiatrist and wanted to learn what might help.
                            </p>
                            <p>
                            Larry and Ellen soon started making regular trips to Mexico to train staffers, evaluate children, and provide assistance with the organization as a whole. Ellen wondered if it would be a good idea to move there to offer more assistance, so they served there on site from 1996 through 1999 and as consultants until 2006. Ellen was instrumental in starting an on-campus school for Niños de Mexico. Larry started a clinic to serve the medical and psychiatric needs of the children. Larry continues to provide consultation to the staff in Mexico City and to assist with training as well as to encourage the staff and administration at the orphanage.
                            </p>
                            <p>
                            Ellen developed multiple sclerosis in 2004 and passed away in 2017. Larry remarried 2 years later, to Evelyn, who is a licensed professional counselor. They live in Boise ID where she provides counseling and he continues to provide outpatient psychiatric care for children and adults. They enjoy traveling, biking, and camping.
                            </p>
                            <p>
                            Larry and Evelyn continue to travel and provide consultation to US and international child serving agencies. 
                            </p>                   
                            
                            

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Larry E. Banta, MD</span>
                                </span>
                            </p>

                        </article>

                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;