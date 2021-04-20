import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';

export default function FaqSection() {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="questions">
                <h4>How do I Start?</h4>
                <div className="answer">
                    <div className="faq-line"></div>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, porro.</p>
                </div>
            </div>

            <div className="questions">
                <h4>Daily schedule</h4>
                <div className="answer">
                <div className="faq-line"></div>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, porro.</p>
                </div>
            </div>

            <div className="questions">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                <div className="faq-line"></div>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, porro.</p>
                </div>
            </div>

            <div className="questions">
                <h4>What products do you offer</h4>
                <div className="answer">
                <div className="faq-line"></div>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, porro.</p>
                </div>
            </div>
        </Faq>
    )
}

const Faq = styled(About)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight:lighter;
    }
    .faq-line{
        background: #ccc;
        height:0.2rem;
        margin:2rem 0rem;
        width:100%;
    }
    .question{
        padding:3rem 0rem;
        cursor:pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding:1rem 0rem;
        }
    }
`;

